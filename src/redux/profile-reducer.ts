import { profileAPI } from '../api/api'
import { stopSubmit } from 'redux-form'
import { PostType, PhotosType, ProfileType } from '../types/types'


const ADD_POST = 'social-network/profile/ADD-POST'
const SET_USER_PROFILE = 'social-network/profile/SET_USER_PROFILE'
const SET_STATUS = 'social-network/profile/SET_STATUS'
const SET_USER_AVATAR = 'social-network/profile/SET_USER_AVATAR'


export type InitialStateType = {
  posts: PostType[],
  profile: null | ProfileType,
  status: string
}
const initialState: InitialStateType = {
  posts: [
    { message: 'Hi, how are you?', likesCount: 12 },
    { message: 'It\'s my second post', likesCount: 2 },
    { message: 'First post', likesCount: 15 }
  ],
  profile: null,
  status: ''
}


const profileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        message: action.newPostText,
        likesCount: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
      }
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }
    case SET_STATUS: {
      return { ...state, status: action.status }
    }
    case SET_USER_AVATAR: {
      return { ...state, profile: { ...state.profile, photos: action.userAvatar } }
    }
    default: {
      return state
    }
  }
}


type AddPostActionType = { type: typeof ADD_POST, newPostText: string }
export const addPost = (newPostText: string): AddPostActionType => ({ type: ADD_POST, newPostText })

type SetUserProfileActionType = { type: typeof SET_USER_PROFILE, profile: ProfileType }
const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile })

type SetStatusActionType = { type: typeof SET_STATUS, status: string }
const setStatus = (status: string): SetStatusActionType => ({ type: SET_STATUS, status })

type SetUserAvatarActionType = { type: typeof SET_USER_AVATAR, userAvatar: PhotosType }
const setUserAvatar = (userAvatar: PhotosType): SetUserAvatarActionType => ({ type: SET_USER_AVATAR, userAvatar })


export const getUserProfile = (userId: string) => async (dispatch: any) => {
  const data = await profileAPI.getProfile(userId)
  dispatch(setUserProfile(data))
}

export const getStatus = (userId: string) => async (dispatch: any) => {
  const data = await profileAPI.getStatus(userId)
  dispatch(setStatus(data))
}

export const updateProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.userId
  const data = await profileAPI.updateProfile(profile)
  if (data.resultCode === 0){
    dispatch(getUserProfile(userId))
  } else {
    const message = data.messages.length > 0 ? data.messages[0] : 'Something went wrong. Try again later.'
    dispatch(stopSubmit('edit-profile-data', { _error: message }))
    return Promise.reject(message)
  }
}

export const updateStatus = (status: string) => async (dispatch: any) => {
  const data = await profileAPI.updateStatus(status)
  if (data.resultCode === 0){
    dispatch(setStatus(status))
  }
}

export const postUserAvatar = (userAvatar: PhotosType) => async (dispatch: any) => {
  const data = await profileAPI.postUserAvatar(userAvatar)
  if (data.resultCode === 0){
    dispatch(setUserAvatar(data.data.photos))
  }
}


export default profileReducer