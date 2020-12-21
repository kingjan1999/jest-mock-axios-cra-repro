import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: '/api',
  timeout: 20000,
  withCredentials: true,
  headers: { 'X-Csrf-Prevention': 'true' },
})