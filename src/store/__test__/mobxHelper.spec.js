// Dependencies
import * as mobxStateTree from 'mobx-state-tree';

// Helper under test.
import mobxHelper from '../mobxHelper';

/**
 * @file mobxHelper.spec.js
 * @author Daniel Mejia
 * @description Test file mobx helper.
 */
describe('Mobx Helper', () => {
  const data = Promise.resolve(true);
  const self = {};

  beforeEach(() => {
    jest.spyOn(mobxStateTree, 'flow').mockImplementation((param) => () => param());
    jest.spyOn(mobxStateTree, 'applySnapshot').mockImplementation();
  });

  describe('should make an async', () => {
    const actionResponse = {};
    const action = jest.fn().mockReturnValue(actionResponse);

    beforeEach(() => jest.clearAllMocks());

    it('success request', async () => {
      const iterator = mobxHelper.async(data, self, action);
      const firstResponse = iterator.next();
      const response = await firstResponse.value;
      expect(firstResponse.done).toBeFalsy();
      expect(response).toBeTruthy();
      expect(self.loading).toBeTruthy();

      const lastResponse = iterator.next(response);
      expect(lastResponse.done).toBeTruthy();
      expect(self.loading).toBeFalsy();
      expect(lastResponse.value).toEqual(actionResponse);
      expect(action).toHaveBeenCalledWith(response);
    });

    it('success request default action', async () => {
      const iterator = mobxHelper.async(data, self);
      const firstResponse = iterator.next();
      const response = await firstResponse.value;
      expect(firstResponse.done).toBeFalsy();
      expect(response).toBeTruthy();
      expect(self.loading).toBeTruthy();

      const lastResponse = iterator.next(response);
      expect(lastResponse.done).toBeTruthy();
      expect(self.loading).toBeFalsy();
      expect(lastResponse.value).toBe(await data);
    });
  });

  it('should async assing', async () => {
    const response = {};
    jest.spyOn(mobxHelper, 'async').mockImplementation((_data, _self, action) => action(response));
    mobxHelper.asyncAssign(data, self);
    expect(mobxHelper.async).toHaveBeenCalledWith(data, self, expect.any(Function));
    expect(mobxStateTree.applySnapshot).toHaveBeenCalledWith(self, response);
  });

  it('should asycn assing target', async () => {
    const response = {};
    jest.spyOn(mobxHelper, 'async').mockImplementation((_data, _self, action) => action(response));
    mobxHelper.asyncAssignPath(data, self, 'hello');
    expect(mobxHelper.async).toHaveBeenCalledWith(data, self, expect.any(Function));
    expect(self.hello).toEqual(response);
  });
});
