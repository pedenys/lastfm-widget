import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Define your API response data type
interface UserData {
  id: number;
  name: string;
  email: string;
}

// Create an axios instance with custom config
const api: AxiosInstance = axios.create({
  baseURL: process.env.API_ROOT_URL,
  timeout: 5000, // Set your desired timeout
});

// Optional interceptor for request
api.interceptors.request.use(
  (config) => {
    // Modify the config if needed before sending the request
    // For example: Add headers, authentication token, etc.
    return config;
  },
  (error: any) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Optional interceptor for response
api.interceptors.response.use(
  (response: AxiosResponse) => {
    // Handle response data if needed
    return response;
  },
  (error: any) => {
    // Handle response error
    return Promise.reject(error);
  }
);

// Define a function to perform a GET request
async function getUserData(userId: number): Promise<UserData> {
  const response: ApiResponse<UserData> = await api.get(`/users/${userId}`);
  return response.data;
}

export { api, getUserData };
