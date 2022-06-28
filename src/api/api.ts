import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '9dc3f95e-670a-4d64-b7ec-4e220a033e9c'
  }
})
