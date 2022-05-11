import { profileAPI } from '../api/api'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
  posts: [
    { message: 'Hi, how are you?', likesCount: 12 },
    { message: 'It\'s my second post', likesCount: 2 },
    { message: 'First post', likesCount: 15 }
  ],
  newPostText: '',
  profile: null,
  status: ""
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        message: state.newPostText,
        likesCount: 0
      }
      return {
        ...state,
        posts: [newPost, ...state.posts],
        newPostText: ''
      }
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newPostText }
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


export const addPost = () => ({ type: ADD_POST })
export const updateNewPostText = newPostText => ({ type: UPDATE_NEW_POST_TEXT, newPostText })
const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile })
const setStatus = status => ({ type: SET_STATUS, status })

export const getUserProfile = userId => dispatch => {
  profileAPI.getProfile(userId)
    .then( data => {
      dispatch(setUserProfile(data))
    } )
}
export const getStatus = userId => dispatch => {
  profileAPI.getStatus(userId)
    .then( data => {
      dispatch(setStatus(data))
    } )
}
export const updateStatus = status => dispatch => {
  profileAPI.updateStatus(status)
    .then( data => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status))
      }
    } )
}

export default profileReducer