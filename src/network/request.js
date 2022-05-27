import { baseURL } from '@/utils/const/const';
import axios from 'axios';

export function request (config) {
  const instance1 = axios.create({
    baseURL: baseURL,
    timeout: 6000
  });

  instance1.interceptors.request.use(

    config => {
      // Do something before request is sent
      return config;
    },
    error => {
      // Do something with request error
      // console.log("出错啦",error) // for debug
      Promise.reject(error);
    }
  );
  // response interceptor
  instance1.interceptors.response.use(
    response => response,

    error => {
      console.log('err' + error); // for debug
      return Promise.reject(error);
    }
  );
}
