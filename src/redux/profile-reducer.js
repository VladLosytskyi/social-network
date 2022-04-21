const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
  posts: [
    { message: 'Hi, how are you?', likesCount: 12 },
    { message: 'It\'s my second post', likesCount: 2 },
    { message: 'First post', likesCount: 15 }
  ],
  newPostText: '',
  profile: null
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
    default: {
      return state
    }
  }
}


export const addPost = () => ({ type: ADD_POST })
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile })
export const updateNewPostText = newPostText => ({ type: UPDATE_NEW_POST_TEXT, newPostText })

export default profileReducer