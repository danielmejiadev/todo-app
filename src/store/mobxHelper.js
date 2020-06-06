// Dependencies
import { flow, applySnapshot } from 'mobx-state-tree';

/**
 * Manage an async actions with loading and errors.
 * @param { Promise<object> } data The async data.
 * @param { object } self The self reference.
 * @param { Function } [action] Callback to executed with success data.
 */
export function async(data, self, action = (response) => response) {
  function* generator() {
    try {
      self.loading = true;
      const response = yield data;
      return action(response);
    } finally {
      self.loading = false;
    }
  }

  return flow(generator)();
}

/**
 * Make an async action to mobx state tree and assign to given self.
 * @param { Promise<object> } data The async data.
 * @param { object } self The self reference.
 */
export const asyncAssign = (data, self) => exports.async(data, self, (response) => {
  applySnapshot(self, response);
  return self;
});

/**
 * Make an async action to mobx state tree and assign to given self path.
 * @param { Promise<object> } data The async data
 * @param { object } self The self reference.
 */
export const asyncAssignPath = (data, self, path) => exports.async(data, self, (response) => {
  self[path] = response;
  return self[path];
});

const exports = {
  async,
  asyncAssign,
  asyncAssignPath,
}

export default exports;
