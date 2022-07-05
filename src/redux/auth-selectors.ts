import { RootState } from './store'

export const getIsAuthSelector = (state: RootState) => {
  return state.auth.isAuth
}
export const getCaptchaUrlSelector = (state: RootState) => {
  return state.auth.captchaUrl
}