import { instance } from './api'
import { GetCaptchaUrlResponse } from '../types/api-types/security-api-types'

export const securityAPI = {
  getCaptchaUrl: () => {
    return instance.get<GetCaptchaUrlResponse>(`security/get-captcha-url`)
      .then(response => response.data)
  }
}