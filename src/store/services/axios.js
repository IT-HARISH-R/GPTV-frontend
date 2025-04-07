import axios from "axios";

const baseURL = 'http://localhost:3000/api/v1'

const instance = axios.create({
    baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token'); // Retrieve token from localStorage
      if (token) {
        config.headers.Authorization = `Bearer ${token}`; // Attach Bearer token
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export default instance;