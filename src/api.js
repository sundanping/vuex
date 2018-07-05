import axios from 'axios';
// import Message from '@/components/message';

// import { baseURL } from './../config/env';
const baseURL = ''
const http = axios.create({
  baseURL
  // showErrorMessage: true
});

http.interceptors.response.use((response) => {
  const { error_code: code, error_message: message } = response.data;
  if (code) {
    const { showErrorMessage } = response.config;
    // if (showErrorMessage) Message.error(message);
    const err = new Error(message);
    err.code = code;
    return Promise.reject(err);
  }
  // return response.data.result;
  return response.data;
}, (err) => {
  if (status === 401 || status === 403) {
    // store.commit('LOG_OUT');
    // router.push({ path: '/login', query: { redirect: router.currentRoute.fullPath } });
  }
  return Promise.reject(err);
});

export default http;

