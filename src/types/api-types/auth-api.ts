import { ResultCodes } from './api'

export enum CaptchaResultCode {
  CaptchaIsRequired = 10
}

export interface MeResponse {
  data: {
    id: number
    email: string
    login: string
  }
  resultCode: ResultCodes
  messages: string[]
}

export interface LoginResponse {
  data: {
    userId: number
  }
  resultCode: ResultCodes | CaptchaResultCode
  messages: string[]
}
