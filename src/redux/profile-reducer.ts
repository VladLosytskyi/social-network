import { profileAPI } from '../api/api'
import { stopSubmit } from 'redux-form'
import { IPost, IPhotos, IProfile } from '../types/types'


const ADD_POST = 'social-network/profile/ADD-POST'
const SET_USER_PROFILE = 'social-network/profile/SET_USER_PROFILE'
const SET_STATUS = 'social-network/profile/SET_STATUS'
const SET_USER_AVATAR = 'social-network/profile/SET_USER_AVATAR'


interface ProfileState {
  posts: IPost[],
  profile: null | IProfile,
  status: string
}
const initialState: ProfileState = {
  posts: [
    { message: 'Hi, how are you?', likesCount: 12 },
    { message: 'It\'s my second post', likesCount: 2 },
    { message: 'First post', likesCount: 15 }
  ],
  profile: null,
  status: ''
}


const profileReducer = (state = initialState, action: any): ProfileState => {
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


interface AddPostAction { type: typeof ADD_POST, newPostText: string }
export const addPost = (newPostText: string): AddPostAction => ({ type: ADD_POST, newPostText })

interface SetUserProfileAction { type: typeof SET_USER_PROFILE, profile: IProfile }
const setUserProfile = (profile: IProfile): SetUserProfileAction => ({ type: SET_USER_PROFILE, profile })

interface SetStatusAction { type: typeof SET_STATUS, status: string }
const setStatus = (status: string): SetStatusAction => ({ type: SET_STATUS, status })

interface SetUserAvatarAction { type: typeof SET_USER_AVATAR, userAvatar: IPhotos }
const setUserAvatar = (userAvatar: IPhotos): SetUserAvatarAction => ({ type: SET_USER_AVATAR, userAvatar })


export const getUserProfile = (userId: string) => async (dispatch: any) => {
  const data = await profileAPI.getProfile(userId)
  dispatch(setUserProfile(data))
}

export const getStatus = (userId: string) => async (dispatch: any) => {
  const data = await profileAPI.getStatus(userId)
  dispatch(setStatus(data))
}

export const updateProfile = (profile: IProfile) => async (dispatch: any, getState: any) => {
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

export const postUserAvatar = (userAvatar: IPhotos) => async (dispatch: any) => {
  const data = await profileAPI.postUserAvatar(userAvatar)
  if (data.resultCode === 0){
    dispatch(setUserAvatar(data.data.photos))
  }
}


export default profileReducer