// Dependencies
import React from 'react'

// Store
import Store from '../../store/users/users.store';

// Context
import StoreContext from '../../context/store.context';

// Store instance
const store = Store.create();

/**
 * Props definition for {@link StoreProvider}
 */
export interface StoreProviderProps {
  children: React.ReactNode;
}

/**
 * Store provider component to share using react context.
 * @param props The store properties
 * @returns The store component.
 */
export function StoreProvider(props: StoreProviderProps): React.ReactElement {
  const { children } = props;

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider;
