import { profileAPI } from '../api/api'

const ADD_POST = 'social-network/profile/ADD-POST'
const SET_USER_PROFILE = 'social-network/profile/SET_USER_PROFILE'
const SET_STATUS = 'social-network/profile/SET_STATUS'

let initialState = {
  posts: [
    { message: 'Hi, how are you?', likesCount: 12 },
    { message: 'It\'s my second post', likesCount: 2 },
    { message: 'First post', likesCount: 15 }
  ],
  profile: null,
  status: ""
}

const profileReducer = (state = initialState, action) => {

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
    default: {
      return state
    }
  }
}


export const addPost = newPostText => ({ type: ADD_POST, newPostText })
const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile })
const setStatus = status => ({ type: SET_STATUS, status })

export const getUserProfile = userId => async (dispatch) => {
  const data = await profileAPI.getProfile(userId)
  dispatch(setUserProfile(data))
}
export const getStatus = userId => async (dispatch) => {
  const data = await profileAPI.getStatus(userId)
  dispatch(setStatus(data))
}
export const updateStatus = status => async (dispatch) => {
  const data = await profileAPI.updateStatus(status)
  if (data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

export default profileReducer