import { instance } from './api'
import { Response } from '../types/api-types/api-types'
import { LoginResponseData, LoginResponseResultCode, MeResponseData } from '../types/api-types/auth-api-types'

export const authAPI = {
  me: () => {
    return instance.get<Response<MeResponseData>>(`auth/me`)
      .then(response => response.data)
  },
  login: (email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) => {
    return instance.post<Response<LoginResponseData, LoginResponseResultCode>>(
      `auth/login`,
      { email, password, rememberMe, captcha }
    ).then(response => response.data)
  },
  logout: () => {
    return instance.delete<Response>(`auth/login`)
      .then(response => response.data)
  }
}