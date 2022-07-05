export interface IAuthState {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
  captchaUrl: string | null
}

export enum AuthActionTypes {
  SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA',
  SET_CAPTCHA_URL = 'SET_CAPTCHA_URL'
}

interface IUserData {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}

export interface ISetAuthUserDataAC {
  type: AuthActionTypes.SET_AUTH_USER_DATA
  userData: IUserData
}

export interface ISetCaptchaCaptchaUrlAC {
  type: AuthActionTypes.SET_CAPTCHA_URL
  captchaUrl: string | null
}

export type AuthActions = ISetAuthUserDataAC | ISetCaptchaCaptchaUrlAC
