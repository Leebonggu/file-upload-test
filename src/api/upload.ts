import instance from '../client';

export const uploadFileAPI = async () => {
  instance
    .post('')
    .then((res) => res.data)
    .catch((error) => error.response);
};
