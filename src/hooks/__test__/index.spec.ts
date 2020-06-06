// Dependencies
import React from 'react';

// Context
import StoreContext from '../../context/store.context';

// Dto
import { IUserStore } from '../../store/users/users.store';

// Hooks under testing
import * as Hooks from '../index';

/**
 * @file index.spec.ts
 * @author Daniel Mejia
 * @description Test file for hooks.
 */
describe('Hooks', () => {
  describe('should use the store', () => {
    it('get the store', () => {
      const store = { };
      jest.spyOn(React, 'useContext').mockReturnValue(store);
      const response = Hooks.useStore();
  
      expect(response).toEqual(store);
      expect(React.useContext).toHaveBeenCalledWith(StoreContext);
    });

    it('get error because no store', () => {
      jest.spyOn(React, 'useContext').mockReturnValue(undefined);
      expect(Hooks.useStore).toThrow(Error);
      expect(React.useContext).toHaveBeenCalledWith(StoreContext);
    });
  });

  it('use fetch store', () => {
    const selectedUser = {
      id: 1,
      tasks: {
        list: jest.fn(),
      }
    }
    const store = { listUsers: jest.fn(), selectedUser } as unknown as IUserStore;
    jest.spyOn(Hooks, 'useStore').mockReturnValue(store);
    jest.spyOn(React, 'useEffect').mockImplementation((callback) => callback());

    const response = Hooks.useFetchStore();
    expect(response).toEqual(store);
  });

  it('use state actions', () => {
    const setState = jest.fn();
    jest.spyOn(React, 'useState').mockReturnValue([false, setState]);
    jest.spyOn(React, 'useCallback').mockImplementation((callback) => callback);

    const [state, setTruthy, setFalsy] = Hooks.useStateActions();
    expect(state).toBeFalsy();

    setTruthy();
    expect(setState).toHaveBeenCalledWith(true);

    setFalsy();
    expect(setState).toHaveBeenCalledWith(false);
  });
});
