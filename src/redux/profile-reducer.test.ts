import profileReducer, { addPost } from './profile-reducer'

let state = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: 'It\'s my second post', likesCount: 2 },
    { id: 3, message: 'First post', likesCount: 15 }
  ],
  profile: null,
  status: ''
}

describe('Profile Reducer Test', () => {
  test('length of posts should be incremented', () => {
    // 1. Test data
    let action = addPost('Hello World')
    // 2. Action
    let newState = profileReducer(state, action)
    // 3. Expectation
    expect(newState.posts.length).toBe(4)
  })

  test('text of new post should be correct', () => {
    let action = addPost('Hello World')
    let newState = profileReducer(state, action)
    expect(newState.posts[3].message).toBe('Hello World')
  })
})
