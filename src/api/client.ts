import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: window.env?.SOME_API_URL || 'http://localhost:3000',
  timeout: 10000,
});
