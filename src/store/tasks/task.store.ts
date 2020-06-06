// Dependencies
import { types, Instance, getParent } from 'mobx-state-tree';

// Helper
import * as mobxHelper from '../mobxHelper';

// Api Client
import ApiClient from '../../apiClient';

/**
 * The avaiables states for a stask.
 */
export const taskStates = {
  TODO: 'todo',
  DONE: 'done',
};

/**
 * Definition for todo store.
 */
export const Task = types
  .model('Task', {
    id: types.identifierNumber,
    description: types.string,
    state: types.enumeration(Object.values(taskStates)),
    userId: types.number,
  })
  .views((self) => ({
    /**
     * Calculates if the item is done.
     * @returns true if the item is done, false otherwise.
     */
    get isDone() {
      return self.state === taskStates.DONE;
    }
  }))
  .actions((self) => ({
   /**
    * Updates a task.
    * @param params The task update params.
    * @return The task updated.
    */
    update(params: Partial<ITask>) {
      Object.assign(self, params)
      return mobxHelper.asyncAssign(ApiClient.tasks.update(self.id, params), self)
    },

    /**
     * Toggle the task state.
     */
    toggle() {
      const { isDone } = self;
      const todoToUpdate = { state: isDone ? taskStates.TODO : taskStates.DONE };
      Object.assign(self, todoToUpdate)
      return mobxHelper.asyncAssign(ApiClient.tasks.update(self.id, todoToUpdate), self)
    },

    /**
     * Remove a task.
     */
    remove() {
      const { remove } = getParent(self, 2);
      remove(self)
    },
  }))

/**
 * Definition type for {@link Task}.
 */
export interface ITask extends Instance<typeof Task> { }

export default Task;