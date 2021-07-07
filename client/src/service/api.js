import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://172.22.13.128:3000/'
})