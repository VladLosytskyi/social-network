import usersReducer, { follow, setFollow, setUnfollow, toggleFollowingProgress, unfollow } from './users-reducer'
import { UsersState } from '../types/reducers-types/users-types'
import { usersAPI } from '../api/users-api'
import { Response, ResultCodes } from '../types/api-types/api-types'


jest.mock('../api/users-api')
const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>
const result: Response = {
  resultCode: ResultCodes.Success,
  messages: [],
  data: {}
}

describe('Users Reducer Test', () => {
  describe('Action Creator Tests', () => {
    let state: UsersState

    beforeEach(() => {
      state = {
        users: [
          {
            id: 0, name: 'User0', status: 'User0 Status',
            photos: { small: null, large: null }, followed: false,
          },
          {
            id: 1, name: 'User1', status: 'User1 Status',
            photos: { small: null, large: null }, followed: false,
          },
          {
            id: 2, name: 'User2', status: 'User2 Status',
            photos: { small: null, large: null }, followed: true,
          },
          {
            id: 3, name: 'User3', status: 'User3 Status',
            photos: { small: null, large: null }, followed: true,
          }
        ],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [],
        filter: {
          term: '',
          friend: null
        }
      }
    })


    test('setFollow test', () => {
      const newState: UsersState = usersReducer(state, setFollow(1))

      expect(newState.users[0].followed).toBeFalsy()
      expect(newState.users[1].followed).toBeTruthy()
    })

    test('setUnfollow test', () => {
      const newState: UsersState = usersReducer(state, setUnfollow(3))

      expect(newState.users[2].followed).toBeTruthy()
      expect(newState.users[3].followed).toBeFalsy()
    })
  })

  describe('Thunks Tests', () => {
    const dispatchMock = jest.fn()
    const getStateMock = jest.fn()

    beforeEach(() => {
      dispatchMock.mockClear()
      getStateMock.mockClear()
      usersAPIMock.follow.mockClear()
      usersAPIMock.unfollow.mockClear()
    })

    test('follow test', async () => {
      usersAPIMock.follow.mockReturnValue(Promise.resolve(result))

      const thunk = follow(1)

      await thunk(dispatchMock, getStateMock, {})

      expect(dispatchMock).toBeCalledTimes(3)
      expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleFollowingProgress(true, 1))
      expect(dispatchMock).toHaveBeenNthCalledWith(2, setFollow(1))
      expect(dispatchMock).toHaveBeenNthCalledWith(3, toggleFollowingProgress(false, 1))
    })
    test('unfollow test', async () => {
      usersAPIMock.unfollow.mockReturnValue(Promise.resolve(result))

      const thunk = unfollow(1)

      await thunk(dispatchMock, getStateMock, {})

      expect(dispatchMock).toBeCalledTimes(3)
      expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleFollowingProgress(true, 1))
      expect(dispatchMock).toHaveBeenNthCalledWith(2, setUnfollow(1))
      expect(dispatchMock).toHaveBeenNthCalledWith(3, toggleFollowingProgress(false, 1))
    })
  })
})