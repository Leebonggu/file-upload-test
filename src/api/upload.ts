import { AxiosRequestConfig } from 'axios';
import instance from '../client';

export const postUploadFileAPI = async (data: FormData, config: AxiosRequestConfig) =>
  instance
    .post(`https://api.imgbb.com/1/upload?key=828fda1cb3179fa6f4e860f42b565237`, data, config)
    .then((res) => res.data)
    .catch((error) => error.response);
