// Dependencies
import * as mobxStateTree from 'mobx-state-tree';

// Helper
import * as mobxHelper from '../../mobxHelper';

// Api Client
import ApiClient from '../../../apiClient';
import Tasks from '../../../apiClient/resources/tasks';

// Under test.
import TaskStore, { ITask } from '../task.store';

/**
 * @file index.js
 * @author Daniel Mejia.
 * @description Test file task store.
 */
describe('task store', () => {
  const task = {
    id: 1,
    description: 'description',
    state: 'todo',
    userId: 1,
  };
  let taskStore: ITask;
  const mockTasks = { update: jest.fn() } as unknown as Tasks;

  beforeEach(() => {
    taskStore = TaskStore.create(task);
    jest.spyOn(mobxHelper, 'asyncAssign').mockImplementation();
    ApiClient.tasks = mockTasks;
  });

  afterEach(() => jest.clearAllMocks());

  it('should validate is done', () => {
    expect(taskStore.isDone).toBeFalsy();
  });

  it('update a task', () => {
    const description = 'new task';
    taskStore.update({ description });
    expect(mockTasks.update).toHaveBeenCalledWith(task.id, { description });
  });

  describe('should toggle state', () => {
    it('change to done', () => {
      taskStore.toggle();
      expect(mockTasks.update).toHaveBeenCalledWith(task.id, { state: 'done' });
    });

    it('change to to-do', () => {
      taskStore.toggle();
      taskStore.toggle();
      expect(mockTasks.update).toHaveBeenCalledWith(task.id, { state: 'todo' });
    });
  });

  it('remove a task', () => {
    const remove = jest.fn();
    jest.spyOn(mobxStateTree, 'getParent').mockReturnValue({ remove });
    taskStore.remove();
    expect(remove).toHaveBeenCalledWith(task);
  });
});
