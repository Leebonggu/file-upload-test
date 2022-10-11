import axios from 'axios';

const instance = axios.create();

instance.interceptors.request.use(
  (req) => req,
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (req) => req,
  (error) => Promise.reject(error),
);

export default instance;
