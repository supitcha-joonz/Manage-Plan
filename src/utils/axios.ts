/**
 * axios setup to use mock service
 */

import axios from 'axios';

const axiosServices = axios.create();

// interceptor for http
axiosServices.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.resolve((error.response && error.response.data) || 'Wrong Services')
);
axiosServices.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('AccessToken');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosServices;
