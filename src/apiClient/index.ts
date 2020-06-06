// Depedencies
import axios, { AxiosInstance, AxiosResponse } from 'axios';

// Resources
import { Users } from './resources/users';
import { Tasks } from './resources/tasks';

/**
 * Definition of request interceptor to set for axios instance.
 */
export type RequestInterceptor = (response: AxiosResponse) => AxiosResponse<unknown> | Promise<AxiosResponse<unknown>>;

/**
 * Api client manager.
 * @author Daniel Mejia
 */
export class ApiClient {
  /**
   * The axios instance to execute api calls.
   */
  axiosInstance!: AxiosInstance;

  /**
   * The client to manage users resource.
   */
  users!: Users;

  /**
   * The client to manage tasks resource.
   */
  tasks!: Tasks;

  /**
   * Initialze the stripe client base on url.
   * @param url The url to backend requiests.
   */
  initialize(url: string) {
    this.axiosInstance = axios.create({ baseURL: url });
    this.addResponseInterceptor(this.basicResponse);
    this.users = new Users(this.axiosInstance);
    this.tasks = new Tasks(this.axiosInstance);

    return this;
  }

  /**
   * Add a response interceptor for client.
   * @param callback The callback to add.
   * @returns The stripe client itself.
   */
  addResponseInterceptor(callback: RequestInterceptor): ApiClient {
    const { interceptors } = this.axiosInstance;
    interceptors.response.use(callback);
    return this;
  }

  /**
   * Intercepts every response.
   * @param response The response.
   * @returns The new response parsed.
   */
  basicResponse = <T>(response: AxiosResponse<T>): T => response.data;
}

export default new ApiClient();