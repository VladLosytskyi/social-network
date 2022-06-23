import { usersAPI } from '../api/api'
import { IUser } from '../types/types'


const FOLLOW = 'social-network/users/FOLLOW'
const UNFOLLOW = 'social-network/users/UNFOLLOW'
const SET_USERS = 'social-network/users/SET_USERS'
const SET_CURRENT_PAGE = 'social-network/users/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'social-network/users/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'social-network/users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'social-network/users/TOGGLE_IS_FOLLOWING_PROGRESS'


interface UsersState {
  users: IUser[],
  pageSize: number,
  totalUsersCount: number,
  currentPage: number,
  isFetching: boolean,
  followingInProgress: number[]
}
const initialState: UsersState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}


const usersReducer = (state = initialState, action: any): UsersState => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId){
            return { ...user, followed: true }
          }
          return user
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId){
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


interface FollowSuccessAction { type: typeof FOLLOW, userId: number }
const followSuccess = (userId: number): FollowSuccessAction => ({ type: FOLLOW, userId })

interface UnfollowSuccessAction { type: typeof UNFOLLOW, userId: number }
const unfollowSuccess = (userId: number): UnfollowSuccessAction => ({ type: UNFOLLOW, userId })

interface SetUsersAction { type: typeof SET_USERS, users: IUser[] }
const setUsers = (users: IUser[]): SetUsersAction => ({ type: SET_USERS, users })

interface SetTotalUsersCountAction { type: typeof SET_TOTAL_USERS_COUNT, totalUsersCount: number }
const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountAction => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })

interface ToggleIsFetchingAction { type: typeof TOGGLE_IS_FETCHING, isFetching: boolean }
const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingAction => ({ type: TOGGLE_IS_FETCHING, isFetching })

interface ToggleFollowingProgressAction { type: typeof TOGGLE_IS_FOLLOWING_PROGRESS, isFetching: boolean, userId: number }
const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressAction => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

interface SetCurrentPageAction { type: typeof SET_CURRENT_PAGE, currentPage: number }
export const setCurrentPage = (currentPage: number): SetCurrentPageAction => ({ type: SET_CURRENT_PAGE, currentPage })


export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: any) => {
  dispatch(toggleIsFetching(true))
  const data = await usersAPI.getUsers(currentPage, pageSize)
  dispatch(toggleIsFetching(false))
  dispatch(setUsers(data.items))
  dispatch(setTotalUsersCount(data.totalCount))
}

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
  dispatch(toggleFollowingProgress(true, userId))
  const data = await apiMethod(userId)
  if (data.resultCode === 0){
    dispatch(actionCreator(userId))
  }
  dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId: number) => async (dispatch: any) => {
  await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
}

export const unfollow = (userId: number) => async (dispatch: any) => {
  await followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}


export default usersReducer