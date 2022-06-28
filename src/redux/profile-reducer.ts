import { stopSubmit } from 'redux-form'
import { AppDispatch, AppThunk, RootState } from './store'
import { profileAPI } from '../api/profile-api'
import {
  ProfileState,
  ProfileActionTypes,
  AddPostAction,
  SetUserProfileAction,
  SetStatusAction,
  SetUserAvatarAction,
  IAvatar,
  IProfile,
  ProfileActions
} from '../types/reducers-types/profile-types'


const initialState: ProfileState = {
  posts: [
    { message: 'Hi, how are you?', likesCount: 12 },
    { message: 'It\'s my second post', likesCount: 2 },
    { message: 'First post', likesCount: 15 }
  ],
  profile: null,
  status: ''
}


const profileReducer = (state = initialState, action: ProfileActions): ProfileState => {
  switch (action.type) {
    case ProfileActionTypes.ADD_POST: {
      let newPost = {
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


export const addPost = (newPostText: string): AddPostAction => ({ type: ProfileActionTypes.ADD_POST, newPostText })
const setUserProfile = (profile: IProfile): SetUserProfileAction => ({
  type: ProfileActionTypes.SET_USER_PROFILE,
  profile
})
const setStatus = (status: string): SetStatusAction => ({ type: ProfileActionTypes.SET_STATUS, status })
const setUserAvatar = (userAvatar: IAvatar): SetUserAvatarAction => ({
  type: ProfileActionTypes.SET_USER_AVATAR,
  userAvatar
})


export const getUserProfile = (userId: number) => async (dispatch: AppDispatch) => {
  const data = await profileAPI.getProfile(userId)
  dispatch(setUserProfile(data))
}
export const getStatus = (userId: number) => async (dispatch: AppDispatch) => {
  const data = await profileAPI.getStatus(userId)
  dispatch(setStatus(data))
}
export const updateProfile = (profile: IProfile): AppThunk => async (dispatch, getState: () => RootState) => {
  const userId = getState().auth.userId
  const data = await profileAPI.updateProfile(profile)
  if (data.resultCode === 0){
    await dispatch(getUserProfile(userId))
  } else {
    const message = data.messages.length > 0 ? data.messages[0] : 'Something went wrong. Try again later.'
    await dispatch(stopSubmit('edit-profile-data', { _error: message }))
    return Promise.reject(message)
  }
}
export const updateStatus = (status: string): AppThunk => async (dispatch: AppDispatch) => {
  const data = await profileAPI.updateStatus(status)
  if (data.resultCode === 0){
    dispatch(setStatus(status))
  }
}
export const postUserAvatar = (userAvatar: File): AppThunk => async (dispatch: AppDispatch) => {
  const data = await profileAPI.postUserAvatar(userAvatar)
  if (data.resultCode === 0){
    dispatch(setUserAvatar(data.data.photos))
  }
}


export default profileReducer