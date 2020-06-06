// Dependencies
import { types, Instance, flow, destroy } from 'mobx-state-tree';

// Helper
import * as mobxHelper from '../mobxHelper';

// Stores
import User, { IUser } from './user.store';

// Api Client
import ApiClient from '../../apiClient';

/**
 * Definition for users store.
 */
const Users = types
  .model('Users', {
    data: types.array(User),
    selectedUser: types.maybe(types.safeReference(User)),
    loading: false,
  }).actions((self) => ({
    /**
     * Marks a user as selected.
     * @param user The user to select.
     */
    selectUser(user: IUser) {
      self.selectedUser = user;
    },

    /**
     * List the users from server.
     * @returns The list of users.
     */
    listUsers() {
      return mobxHelper.asyncAssign(ApiClient.users.list(), self);
    },

    /**
     * Add a new user to the server.
     * @param user The user to add.
     * @returns The list of users.
     */
    addUser: flow(function* (user: Partial<IUser>) {
      self.loading = true
      const userAdded = yield ApiClient.users.create(user);
      self.data.push(userAdded);
      self.loading = false;
      return self.data;
    }),

    /**
     * Removes the user from server.
     * @param user The user to remove.
     * @returns The list of users. 
     */
    removeUser: flow(function* (user: IUser) {
      self.loading = true
      yield ApiClient.users.delete(user.id);
      destroy(user);
      self.loading = false;
      return self.data;
    }),
  }));

/**
 * Definition type for {@link Users}.
 */
export interface IUserStore extends Instance<typeof Users> { };

export default Users;