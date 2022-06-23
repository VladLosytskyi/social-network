import { getAuthUserData } from './auth-reducer'


const SET_INITIALIZE = 'social-network/app/SET_INITIALIZE'


interface AppState { initialized: boolean }
const initialState: AppState = {
  initialized: false
}


const appReducer = (state = initialState, action: any): AppState => {
  switch (action.type) {
    case SET_INITIALIZE: {
      return { ...state, initialized: true }
    }
    default: {
      return state
    }
  }
}


interface SetInitializeAction { type: typeof SET_INITIALIZE }
export const setInitialize = (): SetInitializeAction => ({ type: SET_INITIALIZE })


export const initializeApp = () => (dispatch: any) => {
  dispatch(getAuthUserData())
    .then(() => {
      dispatch(setInitialize())
    })
}


export default appReducer