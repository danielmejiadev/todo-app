// Dependencies
import axios from 'axios';

// Instance under testing
import BaseService from '../baseService';

// Mock modules
jest.mock('axios');

/**
 * Base service test class.
 * @author Daniel Mejia
 * @file baseService.spec.js
 */
describe('Base service: Test suit', () => {
  const id = 1;
  const testResource = 'tests';
  const testResourceId = `${testResource}/${id}`;
  const overridedResource = '/overrided';
  const overridedResourceId = `${overridedResource}/${id}`;
  let baseService: BaseService;
  const data = {};
  const mockResponse = Promise.resolve(data);

  beforeEach(() => {
    baseService = new BaseService(axios);
    baseService.resourceUrl = testResource;
  });

  afterEach(() => jest.clearAllMocks());

  describe('should list resources: ', () => {
    beforeEach(() => jest.spyOn(axios, 'get').mockResolvedValue(mockResponse));

    it('default params', async () => {
      const response = await baseService.list();
      expect(response).toBe(data);
      expect(axios.get).toHaveBeenCalledWith(testResource, { });
    });

    it('overrided URL', async () => {
      const response = await baseService.list({ url: overridedResource });
      expect(response).toBe(data);
      expect(axios.get).toHaveBeenCalledWith(overridedResource, { });
    });

    it('pass params', async () => {
      const params = { id: 1 };
      const response = await baseService.list({ params });
      expect(response).toBe(data);
      expect(axios.get).toHaveBeenCalledWith(testResource, { params });
    });
  });

  describe('should get by id request: ', () => {
    beforeEach(() => jest.spyOn(axios, 'get').mockResolvedValue(mockResponse));

    it('normal default request', async () => {
      const response = await baseService.retrieve(id);
      expect(response).toBe(data);
      expect(axios.get).toHaveBeenCalledWith(testResourceId, { });
    });

    it('overrided URL', async () => {
      const response = await baseService.retrieve(id, { url: overridedResource });
      expect(response).toBe(data);
      expect(axios.get).toHaveBeenCalledWith(overridedResourceId, { });
    });

    it('pass params', async () => {
      const params = { id: 1 };
      const response = await baseService.retrieve(id, { params });
      expect(response).toBe(data);
      expect(axios.get).toHaveBeenCalledWith(testResourceId, { params });
    });
  });

  describe('should post request: ', () => {
    beforeEach(() => jest.spyOn(axios, 'post').mockResolvedValue(mockResponse));

    it('default params', async () => {
      const response = await baseService.create(data);
      expect(response).toBe(data);
      expect(axios.post).toHaveBeenCalledWith(testResource, data, { });
    });

    it('overrided URL', async () => {
      const response = await baseService.create(data, { url: overridedResource });
      expect(response).toBe(data);
      expect(axios.post).toHaveBeenCalledWith(overridedResource, data, { });
    });

    it('pass params', async () => {
      const params = { id: 1 };
      const response = await baseService.create(data, { params });
      expect(response).toBe(data);
      expect(axios.post).toHaveBeenCalledWith(testResource, data, { params });
    });
  });

  describe('should update request: ', () => {
    beforeEach(() => jest.spyOn(axios, 'request').mockResolvedValue(mockResponse));

    it('default params', async () => {
      const request = {
        data,
        method: 'patch',
        url: testResourceId,
        params: undefined,
      };
      const response = await baseService.update(id, data);
      expect(response).toBe(data);
      expect(axios.request).toHaveBeenCalledWith(request);
    });

    it('overrided URL and method', async () => {
      const request = {
        data,
        method: 'put',
        url: overridedResourceId,
        params: undefined,
      };
      const response = await baseService
        .update(id, data, { method: 'put', url: overridedResource });
      expect(response).toBe(data);
      expect(axios.request).toHaveBeenCalledWith(request);
    });

    it('pass params', async () => {
      const params = { id: 1 };
      const request = {
        params,
        data,
        method: 'patch',
        url: testResourceId,
      };
      const response = await baseService.update(id, data, { params });
      expect(response).toBe(data);
      expect(axios.request).toHaveBeenCalledWith(request);
    });
  });

  describe('should delete request: ', () => {
    beforeEach(() => jest.spyOn(axios, 'delete').mockResolvedValue(mockResponse));

    it('normal default url', async () => {
      const response = await baseService.delete(id);
      expect(response).toBe(data);
      expect(axios.delete).toHaveBeenCalledWith(testResourceId,  { });
    });

    it('overrided URL', async () => {
      const params = { id: 1 };
      const response = await baseService.delete(id, { url: overridedResource, params });
      expect(response).toBe(data);
      expect(axios.delete).toHaveBeenCalledWith(overridedResourceId, { params });
    });

    it('pass params', async () => {
      const params = { id: 1 };
      const response = await baseService.delete(id, { params });
      expect(response).toBe(data);
      expect(axios.delete).toHaveBeenCalledWith(testResourceId, { params });
    });
  });
});
