const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
  posts: [
    { message: 'Hi, how are you?', likesCount: 12 },
    { message: 'It\'s my second post', likesCount: 2 },
    { message: 'First post', likesCount: 15 }
  ],
  newPostText: ''
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
      return {
        ...state,
        newPostText: action.newText
      }
    }
    default: {
      return state
    }
  }
}


export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = text =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer