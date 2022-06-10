import profileReducer, { addPost } from './profile-reducer'

let state = {
  posts: [
    { message: 'First post', likesCount: 15 },
    { message: 'It\'s my second post', likesCount: 2 },
    { message: 'Hi, how are you?', likesCount: 12 }
  ]
}

it('length of posts should be incremented', () => {
  // 1. Test data
  let action = addPost("Hello World")

  // 2. Action
  let newState = profileReducer(state, action)

  // 3. Expectation
  expect(newState.posts.length).toBe(4)
})

it('text of new post should be correct', () => {
  let action = addPost("Hello World")

  let newState = profileReducer(state, action)

  expect(newState.posts[3].message).toBe("Hello World")
})
