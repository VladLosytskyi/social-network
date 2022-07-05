import { AppThunk } from './store'
import { getAuthUserDataThunk } from './auth-reducer'
import { AppActions, AppActionsTypes, IAppState, ISetInitializeAC } from '../types/reducers-types/app-types'


const initialState: IAppState = {
  initialized: false
}


const appReducer = (state = initialState, action: AppActions): IAppState => {
  switch (action.type) {
    case AppActionsTypes.SET_INITIALIZE: {
      return { ...state, initialized: true }
    }
    default: {
      return state
    }
  }
}


export const setInitialize = (): ISetInitializeAC => ({ type: AppActionsTypes.SET_INITIALIZE })


export const initializeApp = (): AppThunk => async (dispatch) => {
  await dispatch(getAuthUserDataThunk())
  dispatch(setInitialize())
}


export default appReducer