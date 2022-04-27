import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { "API-KEY": "d7d8b2e7-6066-4cde-91e9-656d90847c44" }
})

export const authAPI = {
  login: () => {
    return axiosInstance.get(`auth/me`)
      .then(response => response.data)
  }
}
export const usersAPI = {
  getUsers: (currentPage = 1, pageSize = 10) => {
    return axiosInstance.get(`users?page=${ currentPage }&count=${ pageSize }`)
      .then(response => response.data)
  },
  follow: id => {
    return axiosInstance.post(`follow/${ id }`)
      .then(response => response.data)
  },
  unfollow: id => {
    return axiosInstance.delete(`follow/${ id }`)
      .then(response => response.data)
  }
}
