import { getAuthUserData } from './auth-reducer'


const SET_INITIALIZE = 'social-network/app/SET_INITIALIZE'


export type InitialStateType = { initialized: boolean }
const initialState: InitialStateType = {
  initialized: false
}


const appReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_INITIALIZE: {
      return { ...state, initialized: true }
    }
    default: {
      return state
    }
  }
}


type SetInitializeActionType = { type: typeof SET_INITIALIZE }
export const setInitialize = (): SetInitializeActionType => ({ type: SET_INITIALIZE })


export const initializeApp = () => (dispatch: any) => {
  dispatch(getAuthUserData())
    .then(() => {
      dispatch(setInitialize())
    })
}


export default appReducer