import axios from 'axios'
import { IProfile } from '../types/reducers-types/profile'
import { DefaultResponse } from '../types/api-types/api'
import { GetUsersResponse } from '../types/api-types/users-api'
import { PostUserAvatarResponse } from '../types/api-types/profile-api'
import { LoginResponse, MeResponse } from '../types/api-types/auth-api'
import { GetCaptchaUrlResponse } from '../types/api-types/security-api'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '9dc3f95e-670a-4d64-b7ec-4e220a033e9c'
  }
})

export const usersAPI = {
  getUsers: (currentPage: number, pageSize: number) => {
    return instance.get<GetUsersResponse>(`users?page=${ currentPage }&count=${ pageSize }`)
      .then(response => response.data)
  },
  follow: (userId: number) => {
    return instance.post<DefaultResponse>(`follow/${ userId }`)
      .then(response => response.data)
  },
  unfollow: (userId: number) => {
    return instance.delete<DefaultResponse>(`follow/${ userId }`)
      .then(response => response.data)
  }
}

export const profileAPI = {
  getProfile: (userId: number) => {
    return instance.get<IProfile>(`profile/${ userId }`)
      .then(response => response.data)
  },
  getStatus: (userId: number) => {
    return instance.get<string>(`profile/status/${ userId }`)
      .then(response => response.data)
  },
  updateProfile: (profile: IProfile) => {
    return instance.put<DefaultResponse>(`profile`, profile)
      .then(response => response.data)
  },
  updateStatus: (status: string) => {
    return instance.put<DefaultResponse>(`profile/status`, { status })
      .then(response => response.data)
  },
  postUserAvatar: (userAvatar: File) => {
    const formData = new FormData()
    formData.append('image', userAvatar)
    return instance.put<PostUserAvatarResponse>(`profile/photo`, formData, {
      headers: {
        'Content-type': 'multipart/form-data'
      }
    })
      .then(response => response.data)
  }
}

export const authAPI = {
  me: () => {
    return instance.get<MeResponse>(`auth/me`)
      .then(response => response.data)
  },
  login: (email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) => {
    return instance.post<LoginResponse>(`auth/login`, { email, password, rememberMe, captcha })
      .then(response => response.data)
  },
  logout: () => {
    return instance.delete<DefaultResponse>(`auth/login`)
      .then(response => response.data)
  }
}

export const securityAPI = {
  getCaptchaUrl: () => {
    return instance.get<GetCaptchaUrlResponse>(`security/get-captcha-url`)
      .then(response => response.data)
  }
}
