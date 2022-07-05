import { usersAPI } from '../api/users-api'
import { AppDispatch, AppThunk } from './store'
import { Response, ResultCodes } from '../types/api-types/api-types'
import {
  IFilter,
  IUser,
  ISetCurrentPageAC,
  ISetFilterAC,
  ISetFollowAC,
  ISetTotalUsersCountAC,
  ISetUnfollowAC,
  ISetUsersAC,
  TToggleFollowingProgressAC,
  IToggleIsFetchingAC,
  UsersAction,
  UsersActionTypes,
  IUsersState
} from '../types/reducers-types/users-types'


const initialState: IUsersState = {
  users: [],
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


const usersReducer = (state = initialState, action: UsersAction): IUsersState => {
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
    case UsersActionTypes.SET_FILTER: {
      return { ...state, filter: action.filter }
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


export const setFollow = (userId: number): ISetFollowAC => ({ type: UsersActionTypes.FOLLOW, userId })
export const setUnfollow = (userId: number): ISetUnfollowAC => ({ type: UsersActionTypes.UNFOLLOW, userId })
const setUsers = (users: IUser[]): ISetUsersAC => ({ type: UsersActionTypes.SET_USERS, users })
const setTotalUsersCount = (totalUsersCount: number): ISetTotalUsersCountAC => ({
  type: UsersActionTypes.SET_TOTAL_USERS_COUNT,
  totalUsersCount
})
const toggleIsFetching = (isFetching: boolean): IToggleIsFetchingAC => ({
  type: UsersActionTypes.TOGGLE_IS_FETCHING,
  isFetching
})
export const toggleFollowingProgress = (isFetching: boolean, userId: number): TToggleFollowingProgressAC => ({
  type: UsersActionTypes.TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
})
export const setCurrentPage = (currentPage: number): ISetCurrentPageAC => ({
  type: UsersActionTypes.SET_CURRENT_PAGE,
  currentPage
})
export const setFilter = (filter: IFilter): ISetFilterAC => ({
  type: UsersActionTypes.SET_FILTER,
  filter: filter
})


export const getUsersThunk = (currentPage: number, pageSize: number, filter: IFilter): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(toggleIsFetching(true))
  dispatch(setCurrentPage(currentPage))
  dispatch(setFilter(filter))
  const data = await usersAPI.getUsers(currentPage, pageSize, filter)
  dispatch(toggleIsFetching(false))
  dispatch(setUsers(data.items))
  dispatch(setTotalUsersCount(data.totalCount))
}
const followUnfollowFlow = async (dispatch: AppDispatch,
                                  userId: number,
                                  apiMethod: (userId: number) => Promise<Response>,
                                  actionCreator: (userId: number) => ISetFollowAC | ISetUnfollowAC) => {
  dispatch(toggleFollowingProgress(true, userId))
  const data = await apiMethod(userId)
  if (data.resultCode === ResultCodes.Success){
    dispatch(actionCreator(userId))
  }
  dispatch(toggleFollowingProgress(false, userId))
}
export const followThunk = (userId: number): AppThunk => async (dispatch: AppDispatch) => {
  await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), setFollow)
}
export const unfollowThunk = (userId: number): AppThunk => async (dispatch: AppDispatch) => {
  await followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), setUnfollow)
}


export default usersReducer