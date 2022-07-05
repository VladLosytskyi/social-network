import { IAvatar } from './profile-types'

export interface IUsersState {
  users: IUser[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: number[],
  filter: IFilter
}

export enum UsersActionTypes {
  FOLLOW = 'FOLLOW',
  UNFOLLOW = 'UNFOLLOW',
  SET_USERS = 'SET_USERS',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
  SET_FILTER = 'SET_FILTER',
  SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
  TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
  TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'
}

export interface ISetFollowAC {
  type: UsersActionTypes.FOLLOW
  userId: number
}

export interface ISetUnfollowAC {
  type: UsersActionTypes.UNFOLLOW
  userId: number
}

export interface ISetUsersAC {
  type: UsersActionTypes.SET_USERS
  users: IUser[]
}

export interface ISetTotalUsersCountAC {
  type: UsersActionTypes.SET_TOTAL_USERS_COUNT
  totalUsersCount: number
}

export interface IToggleIsFetchingAC {
  type: UsersActionTypes.TOGGLE_IS_FETCHING
  isFetching: boolean
}

export interface TToggleFollowingProgressAC {
  type: UsersActionTypes.TOGGLE_IS_FOLLOWING_PROGRESS
  isFetching: boolean
  userId: number
}

export interface ISetCurrentPageAC {
  type: UsersActionTypes.SET_CURRENT_PAGE
  currentPage: number
}

export interface ISetFilterAC {
  type: UsersActionTypes.SET_FILTER
  filter: IFilter
}

export interface IUser {
  id: number
  name: string
  status: string
  photos: IAvatar
  followed: boolean
}

export interface IFilter {
  term: string
  friend: null | boolean
}

export type UsersAction =
  ISetFollowAC
  | ISetUnfollowAC
  | ISetUsersAC
  | ISetTotalUsersCountAC
  | IToggleIsFetchingAC
  | TToggleFollowingProgressAC
  | ISetCurrentPageAC
  | ISetFilterAC
