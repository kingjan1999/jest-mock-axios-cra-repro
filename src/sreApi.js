import { AxiosResponse } from 'axios'
import { axiosInstance } from './axiosInstance'

export const callEndpoint = async (data) => {
  return axiosInstance.post('/endpoint', data)
}