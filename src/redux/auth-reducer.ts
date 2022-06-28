import { stopSubmit } from 'redux-form'
import { AppDispatch, AppThunk } from './store'
import { authAPI } from '../api/auth-api'
import { securityAPI } from '../api/security-api'
import {
  AuthActions,
  AuthActionTypes,
  AuthState,
  SetAuthUserDataAction,
  SetCaptchaCaptchaUrlAction
} from '../types/reducers-types/auth-types'
import { ResultCodes } from '../types/api-types/api-types'
import { CaptchaResultCode } from '../types/api-types/auth-api-types'


const initialState: AuthState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
}


const authReducer = (state = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
    case AuthActionTypes.SET_AUTH_USER_DATA: {
      return { ...state, ...action.payload }
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
                                isAuth: boolean): SetAuthUserDataAction => ({
  type: AuthActionTypes.SET_AUTH_USER_DATA,
  payload: { userId, email, login, isAuth }
})
export const setCaptchaUrl = (captchaUrl: string): SetCaptchaCaptchaUrlAction => ({
  type: AuthActionTypes.SET_CAPTCHA_URL,
  captchaUrl
})


export const getAuthUserData = (): AppThunk => async (dispatch: AppDispatch) => {
  const data = await authAPI.me()
  if (data.resultCode === ResultCodes.Success){
    const { id, email, login } = data.data
    dispatch(setAuthUserData(id, email, login, true))
  }
}
export const login = (email: string,
                      password: string,
                      rememberMe: boolean,
                      captcha: string | null): AppThunk => async (dispatch) => {
  const data = await authAPI.login(email, password, rememberMe, captcha)
  if (data.resultCode === ResultCodes.Success){
    await dispatch(getAuthUserData())
  } else {
    if (data.resultCode === CaptchaResultCode.CaptchaIsRequired){
      await dispatch(getCaptchaUrl())
    }
    const message = data.messages.length > 0 ? data.messages[0] : 'Something went wrong. Try again later.'
    await dispatch(stopSubmit('login', { _error: message }))
  }
}
export const getCaptchaUrl = (): AppThunk => async (dispatch: AppDispatch) => {
  const data = await securityAPI.getCaptchaUrl()
  const captchaUrl = data.url
  dispatch(setCaptchaUrl(captchaUrl))
}
export const logout = (): AppThunk => async (dispatch: AppDispatch) => {
  const data = await authAPI.logout()
  if (data.resultCode === 0){
    dispatch(setAuthUserData(null, null, null, false))
  }
}


export default authReducer