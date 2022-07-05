import { stopSubmit } from 'redux-form'
import { AppDispatch, AppThunk } from './store'
import { authAPI } from '../api/auth-api'
import { securityAPI } from '../api/security-api'
import {
  AuthActions,
  AuthActionTypes,
  IAuthState,
  ISetAuthUserDataAC,
  ISetCaptchaCaptchaUrlAC
} from '../types/reducers-types/auth-types'
import { ResultCodes } from '../types/api-types/api-types'
import { CaptchaResultCode } from '../types/api-types/auth-api-types'


const initialState: IAuthState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
}


const authReducer = (state = initialState, action: AuthActions): IAuthState => {
  switch (action.type) {
    case AuthActionTypes.SET_AUTH_USER_DATA: {
      return { ...state, ...action.userData }
    }
    case AuthActionTypes.SET_CAPTCHA_URL: {
      return { ...state, captchaUrl: action.captchaUrl }
    }
    default: {
      return state
    }
  }
}


export const setAuthUserData = (userId: number | null,
                                email: string | null,
                                login: string | null,
                                isAuth: boolean): ISetAuthUserDataAC => ({
  type: AuthActionTypes.SET_AUTH_USER_DATA,
  userData: { userId, email, login, isAuth }
})
export const setCaptchaUrl = (captchaUrl: string): ISetCaptchaCaptchaUrlAC => ({
  type: AuthActionTypes.SET_CAPTCHA_URL,
  captchaUrl
})


export const getAuthUserDataThunk = (): AppThunk => async (dispatch: AppDispatch) => {
  const data = await authAPI.me()
  if (data.resultCode === ResultCodes.Success){
    const { id, email, login } = data.data
    dispatch(setAuthUserData(id, email, login, true))
  }
}
export const loginThunk = (email: string,
                           password: string,
                           rememberMe: boolean,
                           captcha: string | null): AppThunk => async (dispatch) => {
  const data = await authAPI.login(email, password, rememberMe, captcha)
  if (data.resultCode === ResultCodes.Success){
    await dispatch(getAuthUserDataThunk())
  } else {
    if (data.resultCode === CaptchaResultCode.CaptchaIsRequired){
      await dispatch(getCaptchaUrlThunk())
    }
    const message = data.messages.length > 0 ? data.messages[0] : 'Something went wrong. Try again later.'
    await dispatch(stopSubmit('loginThunk', { _error: message }))
  }
}
export const getCaptchaUrlThunk = (): AppThunk => async (dispatch: AppDispatch) => {
  const data = await securityAPI.getCaptchaUrl()
  const captchaUrl = data.url
  dispatch(setCaptchaUrl(captchaUrl))
}
export const logoutThunk = (): AppThunk => async (dispatch: AppDispatch) => {
  const data = await authAPI.logout()
  if (data.resultCode === ResultCodes.Success){
    dispatch(setAuthUserData(null, null, null, false))
  }
}


export default authReducer