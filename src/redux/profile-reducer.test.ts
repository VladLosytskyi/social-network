import profileReducer, { addPostAC } from './profile-reducer'
import { IProfileState } from '../types/reducers-types/profile-types'


describe('ProfilePage Reducer Test', () => {

  let state: IProfileState

  beforeEach(() => {
    state = {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It\'s my second post', likesCount: 2 },
        { id: 3, message: 'First post', likesCount: 15 }
      ],
      profile: null,
      status: ''
    }
  })

  test('length of posts should be incremented', () => {
    // 1. Test data
    let action = addPostAC('Hello World')
    // 2. Action
    let newState: IProfileState = profileReducer(state, action)
    // 3. Expectation
    expect(newState.posts.length).toBe(4)
  })

  test('text of new post should be correct', () => {
    let action = addPostAC('Hello World')
    let newState: IProfileState = profileReducer(state, action)
    expect(newState.posts[3].message).toBe('Hello World')
  })
})
