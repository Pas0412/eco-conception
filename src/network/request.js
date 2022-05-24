import { baseURL } from '@/const/const/const';
// import store from '@/store';
import axios from 'axios';

export function request (config) {
  const instance1 = axios.create({
    baseURL: baseURL,
    timeout: 6000
  });

  instance1.defaults.headers.post['Content-Type'] = 'application/jason;charset=UTF-8';
  instance1.interceptors.request.use(config => {
    if (config.method === 'post') {
      config.data = JSON.stringify(config.data);// 这样发送请求，虽然是可以发送，但是携带的参数，是一个json字符串，会出现问题。所以我们在用post发送请求的时候，需要这样
      // config.headers= { 'content-type': 'application/x-www-form-urlencoded' };
    }
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  });
}
