import axios from 'axios'


const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "514803d4-d50a-4581-9403-b2efec04021f"
  }
})

export const usersAPI = {
  getUsers: (currentPage, pageSize) => {
    return instance.get(`users?page=${ currentPage }&count=${ pageSize }`)
      .then(response => response.data)
  },
  follow: (userId) => {
    return instance.post(`follow/${ userId }`)
      .then(response => response.data)
  },
  unfollow: (userId) => {
    return instance.delete(`follow/${ userId }`)
      .then(response => response.data)
  },
  getProfile: (userId) => {
    return instance.get(`profile/${ userId }`)
      .then(response => response.data)
  }
}

export const authAPI = {
  me: () => {
    return instance.get(`auth/me`)
      .then(response => response.data)
  }
}
