import axios, { type AxiosInstance } from 'axios';

// 1 Abstraction over Http Client interface

export type HttpClientResponse<T> = [null, T] | [Error | any];

export interface HttpClient {
  get<T = unknown>(path: string): Promise<HttpClientResponse<T>>;
  post<T = unknown>(path: string, body: any): Promise<HttpClientResponse<T>>;
  put<T = unknown>(path: string, body: any): Promise<HttpClientResponse<T>>;
  patch<T = unknown>(path: string, body: any): Promise<HttpClientResponse<T>>;
  delete<T = unknown>(path: string): Promise<HttpClientResponse<T>>;
}

export class AxiosHttpClient implements HttpClient {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  async get<T = unknown>(path: string): Promise<HttpClientResponse<T>> {
    try {
      const { data } = await this.axiosInstance.get<T>(path);
      return [null, data];
    } catch (error) {
      console.error(error);
      return [error];
    }
  }

  async post<T = unknown>(path: string, body: any): Promise<HttpClientResponse<T>> {
    try {
      const { data } = await this.axiosInstance.post<T>(path, body);
      return [null, data];
    } catch (error) {
      console.error(error);
      return [error];
    }
  }

  async put<T = unknown>(path: string, body: any): Promise<HttpClientResponse<T>> {
    try {
      const { data } = await this.axiosInstance.put<T>(path, body);
      return [null, data];
    } catch (error) {
      console.error(error);
      return [error];
    }
  }

  async patch<T = unknown>(path: string, body: any): Promise<HttpClientResponse<T>> {
    try {
      const { data } = await this.axiosInstance.patch<T>(path, body);
      return [null, data];
    } catch (error) {
      console.error(error);
      return [error];
    }
  }

  async delete<T = unknown>(path: string): Promise<HttpClientResponse<T>> {
    try {
      await this.axiosInstance.delete(path);
      return [null]; // No data on successful delete
    } catch (error) {
      console.error(error);
      return [error];
    }
  }
}

// Example Usage:

// Create an Axios instance (you can configure it as needed)
const axiosInstance: AxiosInstance = axios.create({ // Explicitly type axiosInstance
  //baseURL: 'https://api.example.com',
  // baseURL: 'https://jsonplaceholder.typicode.com',
  baseURL: "https://jsonplaceholder.typicode.com/todos"
});

// Create an AxiosHttpClient instance
const httpClient = new AxiosHttpClient(axiosInstance);

// Example function to use the HttpClient
async function fetchData() {
  const [error, data] = await httpClient.get<{ message: string }>('/data'); // Replace with your API endpoint
  if (error) {
    console.error('Error fetching data:', error);
  } else {
    console.log('Data:', data);
  }
}

fetchData();