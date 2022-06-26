export interface AuthState {
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

interface SetAuthUserDataActionPayload {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}

export interface SetAuthUserDataAction {
  type: AuthActionTypes.SET_AUTH_USER_DATA
  payload: SetAuthUserDataActionPayload
}

export interface SetCaptchaCaptchaUrlAction {
  type: AuthActionTypes.SET_CAPTCHA_URL
  captchaUrl: string
}

export type AuthActions = SetAuthUserDataAction | SetCaptchaCaptchaUrlAction
