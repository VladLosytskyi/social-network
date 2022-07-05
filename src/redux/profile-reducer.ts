import { stopSubmit } from 'redux-form'
import { AppDispatch, AppThunk, RootState } from './store'
import { profileAPI } from '../api/profile-api'
import {
  IProfileState,
  ProfileActionTypes,
  IAddPostAC,
  ISetUserProfileAC,
  ISetStatusAC,
  ISetUserAvatarAC,
  IAvatar,
  IProfile,
  ProfileActions
} from '../types/reducers-types/profile-types'
import { ResultCodes } from '../types/api-types/api-types'


const initialState: IProfileState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: 'It\'s my second post', likesCount: 2 },
    { id: 3, message: 'First post', likesCount: 15 }
  ],
  profile: null,
  status: ''
}


const profileReducer = (state = initialState, action: ProfileActions): IProfileState => {
  switch (action.type) {
    case ProfileActionTypes.ADD_POST: {
      let newPost = {
        id: 4,
        message: action.newPostText,
        likesCount: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
      }
    }
    case ProfileActionTypes.SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }
    case ProfileActionTypes.SET_STATUS: {
      return { ...state, status: action.status }
    }
    case ProfileActionTypes.SET_USER_AVATAR: {
      return { ...state, profile: { ...state.profile, photos: action.userAvatar } }
    }
    default: {
      return state
    }
  }
}


export const addPostAC = (newPostText: string): IAddPostAC => ({ type: ProfileActionTypes.ADD_POST, newPostText })
const setUserProfileAC = (profile: IProfile): ISetUserProfileAC => ({
  type: ProfileActionTypes.SET_USER_PROFILE,
  profile
})
const setStatusAC = (status: string): ISetStatusAC => ({ type: ProfileActionTypes.SET_STATUS, status })
const setUserAvatarAC = (userAvatar: IAvatar): ISetUserAvatarAC => ({
  type: ProfileActionTypes.SET_USER_AVATAR,
  userAvatar
})


export const getUserProfileThunk = (userId: number): AppThunk => async (dispatch: AppDispatch) => {
  const data = await profileAPI.getProfile(userId)
  dispatch(setUserProfileAC(data))
}
export const getStatusThunk = (userId: number): AppThunk => async (dispatch: AppDispatch) => {
  const data = await profileAPI.getStatus(userId)
  dispatch(setStatusAC(data))
}
export const updateProfileThunk = (profile: IProfile): AppThunk => async (dispatch, getState: () => RootState) => {
  const userId = getState().auth.userId
  const data = await profileAPI.updateProfile(profile)
  if (data.resultCode === ResultCodes.Success){
    await dispatch(getUserProfileThunk(userId))
  } else {
    const message = data.messages.length > 0 ? data.messages[0] : 'Something went wrong. Try again later.'
    await dispatch(stopSubmit('editProfileData', { _error: message }))
    return Promise.reject(message)
  }
}
export const updateStatusThunk = (status: string): AppThunk => async (dispatch: AppDispatch) => {
  const data = await profileAPI.updateStatus(status)
  if (data.resultCode === ResultCodes.Success){
    dispatch(setStatusAC(status))
  }
}
export const postUserAvatarThunk = (userAvatar: File): AppThunk => async (dispatch: AppDispatch) => {
  const data = await profileAPI.postUserAvatar(userAvatar)
  if (data.resultCode === ResultCodes.Success){
    dispatch(setUserAvatarAC(data.data.photos))
  }
}


export default profileReducer