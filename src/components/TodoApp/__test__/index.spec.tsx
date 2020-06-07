// Dependencies
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

// Components
import Users from '../../Users';
import Tasks from '../../Tasks';

// Hooks
import * as Hooks from '../../../hooks';

// Dto
import { IUserStore } from '../../../store/users/users.store';

// Under testing
import { TodoApp } from '../index';

/**
 * @file index.spec.tsx
 * @author Daniel Mejia
 * @description Test file for todo app.
 */
describe('TodoApp', () => {
  let component: ShallowWrapper;
  const selectedUser = {
    tasks: {
      loading: true,
      add: jest.fn(),
      data: [],
    },
  };
  const store = {
    loading: true,
    data: [],
    addUser: jest.fn(),
    selectedUser,
  } as unknown as IUserStore;

  beforeEach(() => {
    jest.spyOn(Hooks, 'useFetchStore').mockReturnValue(store);
    component = shallow(<TodoApp />);
  });

  it('render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
