// Dependencies
import { AxiosInstance, AxiosRequestConfig } from 'axios';

/**
 * Base service for http request.
 * @author Daniel Mejia
 */
class BaseService {
  /**
   * The axios instance to make http request.
   */
  axiosInstance: AxiosInstance;

  /**
   * The default resourceUrl to get values.
   */
  resourceUrl!: string;

  /**
   * Creates an instance of BaseService.
   */
  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  /**
    * Make a get request.
    * @param { Object } [requestParams=this.defaultParams] The params to make the request.
    * @return The data promise.
   */
  list = <T>(requestParams: AxiosRequestConfig = this.defaultParams): Promise<T> => {
    const { url = this.resourceUrl, params, ...rest } = requestParams;
    return this.axiosInstance.get(url, { params, ...rest });
  }

  /**
   * Make a get request by id resourceUrl.
   * @param id The id to find by.
   * @param { Object } [requestParams=this.defaultParams] The params to make the request.
   * @return The data promise.
   */
  retrieve = (id: number, requestParams: AxiosRequestConfig = this.defaultParams) => {
    const { url = this.resourceUrl, ...rest } = requestParams;
    const requestUrl = `${url}/${id}`;
    return this.axiosInstance.get(requestUrl, { ...rest });
  }

  /**
   * Make a post request with data.
   * @param { Object } [data={}] The data to send as body.
   * @param { Object } [requestParams=this.defaultParams] The params to make the request.
   * @return The data promise.
   */
  create = <T>(data: T, requestParams: AxiosRequestConfig = this.defaultParams): Promise<T> => {
    const { url = this.resourceUrl, ...rest } = requestParams;
    return this.axiosInstance.post(url, data, { ...rest });
  }

  /**
   * Make a put or patch request with data.
   * @param id The id to update by.
   * @param data The instance to update.
   * @param { Object } [requestParams=this.defaultParams] The params to make the request.
   * @return The data promise.
   */
  update = <T>(id: number, data: T, requestParams: AxiosRequestConfig = this.defaultParams): Promise<T> => {
    const { url = this.resourceUrl, method = 'patch', ...rest } = requestParams;
    const requestUrl = `${url}/${id}`;
    return this.axiosInstance.request({ url: requestUrl, data, method, ...rest });
  }

  /**
  * Make a get request by id to delete a item.
  * @param id The id to find by.
  * @param { Object } [requestParams=this.defaultParams] The params to make the request.
  * @return The data promise.
  */
  delete = (id: number, requestParams: AxiosRequestConfig = this.defaultParams) => {
    const { url = this.resourceUrl, ...rest } = requestParams;
    const requestUrl = `${url}/${id}`;
    return this.axiosInstance.delete(requestUrl, { ...rest });
  }

  /**
   * Getter for default request params.
   * @readonly
   * @returns { object } The default request params.
   */
  get defaultParams(): AxiosRequestConfig {
    return {
      url: this.resourceUrl,
    };
  }
}

export default BaseService;
