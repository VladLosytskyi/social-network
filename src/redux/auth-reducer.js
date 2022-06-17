import { authAPI, securityAPI } from '../api/api'
import { stopSubmit } from 'redux-form'

const SET_AUTH_USER_DATA = 'social-network/auth/SET_AUTH_USER_DATA'
const SET_CAPTCHA_URL = 'social-network/auth/SET_CAPTCHA_URL'

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA: {
      return { ...state, ...action.payload }
    }
    case SET_CAPTCHA_URL: {
      return { ...state, captchaUrl: action.captchaUrl }
    }
    default: {
      return state
    }
  }
}


export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_AUTH_USER_DATA,
  payload: { userId, email, login, isAuth }
})

export const setCaptchaUrl = captchaUrl => ({ type: SET_CAPTCHA_URL, captchaUrl })


export const getAuthUserData = () => async (dispatch) => {
  const data = await authAPI.me()
  if (data.resultCode === 0) {
    const { id, email, login } = data.data
    dispatch(setAuthUserData(id, email, login, true))
  }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  const data = await authAPI.login(email, password, rememberMe, captcha)
  if (data.resultCode === 0) {
    dispatch(getAuthUserData())
  } else {
    if (data.resultCode === 10) {
      dispatch(getCaptchaUrl())
    }
    const message = data.messages.length > 0 ? data.messages[0] : 'Something went wrong. Try again later.'
    dispatch(stopSubmit('login', { _error: message }))
  }
}

export const getCaptchaUrl = () => async (dispatch) => {
  const data = await securityAPI.getCaptchaUrl()
  const captchaUrl = data.url
  dispatch(setCaptchaUrl(captchaUrl))
}

export const logout = () => async (dispatch) => {
  const data = await authAPI.logout()
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export default authReducer