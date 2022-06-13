import { usersAPI } from '../api/api'

const FOLLOW = 'social-network/users/FOLLOW'
const UNFOLLOW = 'social-network/users/UNFOLLOW'
const SET_USERS = 'social-network/users/SET_USERS'
const SET_CURRENT_PAGE = 'social-network/users/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'social-network/users/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'social-network/users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'social-network/users/TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true }
          }
          return user
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false }
          }
          return user
        })
      }
    case SET_USERS: {
      return { ...state, users: [...action.users] }
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.totalUsersCount }
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    }
    default: {
      return state
    }
  }
}


const followSuccess = userId => ({ type: FOLLOW, userId })
const unfollowSuccess = userId => ({ type: UNFOLLOW, userId })
const setUsers = users => ({ type: SET_USERS, users })
const setTotalUsersCount = totalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
const toggleIsFetching = isFetching => ({ type: TOGGLE_IS_FETCHING, isFetching })
const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })
export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage })

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true))
  const data = await usersAPI.getUsers(currentPage, pageSize)
  dispatch(toggleIsFetching(false))
  dispatch(setUsers(data.items))
  dispatch(setTotalUsersCount(data.totalCount))
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleFollowingProgress(true, userId))
  const data = await apiMethod(userId)
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleFollowingProgress(false, userId))
}

export const follow = userId => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
}
export const unfollow = userId => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}

export default usersReducer