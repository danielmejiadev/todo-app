// Dependencies
import { types, Instance, flow, destroy } from 'mobx-state-tree';

// Helper
import * as mobxHelper from '../mobxHelper';

// Api Client
import ApiClient from '../../apiClient';

// Store
import Task, { ITask, taskStates } from './task.store';

/**
 * Definition for tasks store.
 */
const TasksStore = types
  .model('TasksStore', {
    data: types.array(Task),
    loading: false,
  })
  .actions((self) => ({
    /**
     * Fetch task for a given user from server.
     * @param userId The user owner identifier.
     * @returns The task response.
     */
    list(userId: number) {
      return mobxHelper.asyncAssign(ApiClient.tasks.list({ params: { userId } }), self);
    },

    /**
     * Add a task for a given user.
     * @param userId The user owner identifier.
     * @returns The task response.
     */
    add: flow(function* (userId: number, task: Partial<ITask>) {
      self.loading = true;
      const todoAdded = yield ApiClient.tasks.create({ ...task, state: taskStates.TODO, userId });
      self.data.push(todoAdded);
      self.loading = false;
      return self.data;
    }),

    /**
     * Removes the user from server.
     * @param user The user to remove.
     * @returns The list of users. 
     */
    remove: flow(function* (task: ITask) {
      self.loading = true
      yield ApiClient.tasks.delete(task.id);
      destroy(task);
      self.loading = false;
      return self.data;
    }),
  }));

/**
 * Definition type for {@link TasksStore}.
 */
export interface ITasks extends Instance<typeof TasksStore> { };

export default TasksStore;