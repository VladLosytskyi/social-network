import axios from 'axios'


const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "44a56630-cca6-4e61-9a1b-b68d455e1c1d"
  }
})

export const usersAPI = {
  getUsers: (currentPage, pageSize) => {
    return instance.get(`users?page=${ currentPage }&count=${ pageSize }`)
      .then(response => response.data)
  },
  follow: userId => {
    return instance.post(`follow/${ userId }`)
      .then(response => response.data)
  },
  unfollow: userId => {
    return instance.delete(`follow/${ userId }`)
      .then(response => response.data)
  }
}

export const profileAPI = {
  getProfile: userId => {
    return instance.get(`profile/${ userId }`)
      .then(response => response.data)
  },
  getStatus: userId => {
    return instance.get(`profile/status/${ userId }`)
      .then(response => response.data)
  },
  updateStatus: status => {
    return instance.put(`profile/status`, { status })
      .then(response => response.data)
  }
}

export const authAPI = {
  me: () => {
    return instance.get(`auth/me`)
      .then(response => response.data)
  }
}
