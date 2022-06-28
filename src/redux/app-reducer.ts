import { AppThunk } from './store'
import { getAuthUserData } from './auth-reducer'
import { AppActionsTypes, AppState, SetInitializeAction } from '../types/reducers-types/app-types'


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


export const initializeApp = (): AppThunk => async (dispatch) => {
  await dispatch(getAuthUserData())
  dispatch(setInitialize())
}


export default appReducer