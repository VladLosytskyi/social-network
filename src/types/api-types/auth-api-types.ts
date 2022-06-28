import { ResultCodes } from './api-types'

export enum CaptchaResultCode {
  CaptchaIsRequired = 10
}

export interface MeResponseData {
  id: number
  email: string
  login: string
}

export interface LoginResponseData {
  userId: number
}

export type LoginResponseResultCode = ResultCodes | CaptchaResultCode

