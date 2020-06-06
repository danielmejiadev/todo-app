// Dependencies
import React from 'react'

// Hooks
import * as Hooks from './index';

// Context
import storeContext from '../context/store.context';

// Dtos
import { IUserStore } from '../store/users/users.store';

/**
 * Hook to use the store in any component.
 * @returns The store provided.
 */
export function useStore(): IUserStore {
  const store = React.useContext(storeContext)

  if (store) {
    return store
  }

  throw new Error('useStore must be used within a StoreProvider.')
}

/**
 * Use the store fetching the data from server.
 * @returns The store and data fetched.
 */
export function useFetchStore() {
  const store = Hooks.useStore();
  const { listUsers, selectedUser } = store;
  React.useEffect(() => void listUsers(), [listUsers]);
  React.useEffect(() => void selectedUser?.tasks.list(selectedUser.id), [selectedUser])

  return store;
}

/**
 * A hook to generate basic logic to manage a state with actions.
 * @param initalValue The initial state value for state.
 * @returns The state of modal and the memoize actions to manage it.
 */
export function useStateActions(initalValue?: boolean): [boolean, () => void, () => void] {
  const [state, setState] = React.useState(!!initalValue);
  const setTruthy = React.useCallback(() => setState(true), []);
  const setFalsy = React.useCallback(() => void setState(false), []);

  return [state, setTruthy, setFalsy];
}
