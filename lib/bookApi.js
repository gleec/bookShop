import axios from 'axios';

export const bookApiInstance = axios.create({
  baseURL: 'http://192.168.1.108:3000',
  headers: {
    'Content-Type': 'application/json'
  }
});
