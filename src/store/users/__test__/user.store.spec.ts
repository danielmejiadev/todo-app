// Dependencies
import * as mobxStateTree from 'mobx-state-tree';

// Helper
import * as mobxHelper from '../../mobxHelper';

// Api Client
import ApiClient from '../../../apiClient';
import Users from '../../../apiClient/resources/users';

// Under test.
import UserStore, { IUser } from '../user.store';

/**
 * @file index.js
 * @author Daniel Mejia.
 * @description Test file task store.
 */
describe('user store', () => {
  const user = {
    id: 1,
    name: 'name',
    tasks: {
      data: [],
      loading: false,
    }
  };
  let userStore: IUser;
  const mockUsers = { update: jest.fn() } as unknown as Users;

  beforeEach(() => {
    userStore = UserStore.create(user);
    jest.spyOn(mobxHelper, 'async').mockImplementation();
    ApiClient.users = mockUsers;
  });

  afterEach(() => jest.clearAllMocks());

  it('update a user', () => {
    const name = 'new user';
    userStore.update({ name });
    expect(mockUsers.update).toHaveBeenCalledWith(user.id, { name });
  });

  it('remove a user', () => {
    const removeUser = jest.fn();
    jest.spyOn(mobxStateTree, 'getParent').mockReturnValue({ removeUser });
    userStore.remove();
    expect(removeUser).toHaveBeenCalledWith(user);
  });

  it('select a user', () => {
    const selectUser = jest.fn();
    jest.spyOn(mobxStateTree, 'getParent').mockReturnValue({ selectUser });
    userStore.select();
    expect(selectUser).toHaveBeenCalledWith(user);
  });
});
