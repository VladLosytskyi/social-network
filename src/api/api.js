import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '9dc3f95e-670a-4d64-b7ec-4e220a033e9c'
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
  updateProfile: profile => {
    return instance.put(`profile`, profile)
      .then(response => response.data)
  },
  updateStatus: status => {
    return instance.put(`profile/status`, { status })
      .then(response => response.data)
  },
  postUserAvatar: userAvatar => {
    const formData = new FormData()
    formData.append('image', userAvatar)
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-type': 'multipart/form-data'
      }
    })
      .then(response => response.data)
  }
}

export const authAPI = {
  me: () => {
    return instance.get(`auth/me`)
      .then(response => response.data)
  },
  login: (email, password, rememberMe = false) => {
    return instance.post(`auth/login`, { email, password, rememberMe })
      .then(response => response.data)
  },
  logout: () => {
    return instance.delete(`auth/login`)
      .then(response => response.data)
  }
}
