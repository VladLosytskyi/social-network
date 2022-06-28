import { usersAPI } from '../api/users-api'
import { AppDispatch, AppThunk } from './store'
import {
  UsersState,
  UsersActionTypes,
  SetFollowAction,
  SetUnfollowAction,
  SetUsersAction,
  SetTotalUsersCountAction,
  ToggleIsFetchingAction,
  ToggleFollowingProgressAction,
  SetCurrentPageAction,
  IUser,
  UsersAction
} from '../types/reducers-types/users-types'


const initialState: UsersState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}


const usersReducer = (state = initialState, action: UsersAction): UsersState => {
  switch (action.type) {
    case UsersActionTypes.FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId){
            return { ...user, followed: true }
          }
          return user
        })
      }
    case UsersActionTypes.UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId){
            return { ...user, followed: false }
          }
          return user
        })
      }
    case UsersActionTypes.SET_USERS: {
      return { ...state, users: [...action.users] }
    }
    case UsersActionTypes.SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case UsersActionTypes.SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.totalUsersCount }
    }
    case UsersActionTypes.TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }
    case UsersActionTypes.TOGGLE_IS_FOLLOWING_PROGRESS: {
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


const setFollow = (userId: number): SetFollowAction => ({ type: UsersActionTypes.FOLLOW, userId })
const setUnfollow = (userId: number): SetUnfollowAction => ({ type: UsersActionTypes.UNFOLLOW, userId })
const setUsers = (users: IUser[]): SetUsersAction => ({ type: UsersActionTypes.SET_USERS, users })
const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountAction => ({
  type: UsersActionTypes.SET_TOTAL_USERS_COUNT,
  totalUsersCount
})
const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingAction => ({ type: UsersActionTypes.TOGGLE_IS_FETCHING, isFetching })
const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressAction => ({
  type: UsersActionTypes.TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
})
export const setCurrentPage = (currentPage: number): SetCurrentPageAction => ({ type: UsersActionTypes.SET_CURRENT_PAGE, currentPage })


export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: AppDispatch) => {
  dispatch(toggleIsFetching(true))
  const data = await usersAPI.getUsers(currentPage, pageSize)
  dispatch(toggleIsFetching(false))
  dispatch(setUsers(data.items))
  dispatch(setTotalUsersCount(data.totalCount))
}
const followUnfollowFlow = async (dispatch: AppDispatch,
                                  userId: number,
                                  apiMethod: any,
                                  actionCreator: (userId: number) => SetFollowAction | SetUnfollowAction) => {
  dispatch(toggleFollowingProgress(true, userId))
  const data = await apiMethod(userId)
  if (data.resultCode === 0){
    dispatch(actionCreator(userId))
  }
  dispatch(toggleFollowingProgress(false, userId))
}
export const follow = (userId: number): AppThunk => async (dispatch: AppDispatch) => {
  await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), setFollow)
}
export const unfollow = (userId: number): AppThunk => async (dispatch: AppDispatch) => {
  await followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), setUnfollow)
}


export default usersReducer