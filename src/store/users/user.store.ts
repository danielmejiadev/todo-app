// Depedencies
import { types, Instance, getParent } from 'mobx-state-tree';

// Store
import Tasks from '../tasks/tasks.store';

// Helper
import * as mobxHelper from '../mobxHelper';

// Api Client
import ApiClient from '../../apiClient';

/**
 * Definition for user store.
 */
export const User = types
  .model('User', {
    id: types.identifierNumber,
    name: types.string,
    tasks: types.optional(Tasks, {}),
  }).actions((self) => ({
   /**
    * Updates a user.
    * @param params The user update param.
    * @return The user update.d
    */
    update(params: Partial<IUser>) {
      Object.assign(self, params)
      return mobxHelper.async(ApiClient.users.update(self.id, params), self)
    },

    /**
     * Remove the user.
     */
    remove() {
      const { removeUser } = getParent(self, 2);
      removeUser(self)
    },

    /**
     * Mark the user as selected.
     */
    select() {
      const { selectUser } = getParent(self, 2);
      selectUser(self);
    },
  }));

/**
 * Definition type for {@link User}.
 */
export interface IUser extends Instance<typeof User> { }

export default User;