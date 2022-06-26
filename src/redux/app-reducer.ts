import { AppActionsTypes, AppState, SetInitializeAction } from '../types/reducers-types/app'
import { getAuthUserData } from './auth-reducer'


const initialState: AppState = {
  initialized: false
}


const appReducer = (state = initialState, action: any): AppState => {
  switch (action.type) {
    case AppActionsTypes.SET_INITIALIZE: {
      return { ...state, initialized: true }
    }
    default: {
      return state
    }
  }
}


export const setInitialize = (): SetInitializeAction => ({ type: AppActionsTypes.SET_INITIALIZE })


export const initializeApp = () => (dispatch: any) => {
  dispatch(getAuthUserData())
    .then(() => {
      dispatch(setInitialize())
    })
}


export default appReducer