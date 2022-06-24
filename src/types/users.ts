import { IPhotos } from './profile'

export interface UsersState {
  users: IUser[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: number[]
}

export enum UsersActionTypes {
  FOLLOW = 'FOLLOW',
  UNFOLLOW = 'UNFOLLOW',
  SET_USERS = 'SET_USERS',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
  SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
  TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
  TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

}

export interface SetFollowAction {
  type: UsersActionTypes.FOLLOW
  userId: number
}

export interface SetUnfollowAction {
  type: UsersActionTypes.UNFOLLOW
  userId: number
}

export interface SetUsersAction {
  type: UsersActionTypes.SET_USERS
  users: IUser[]
}

export interface SetTotalUsersCountAction {
  type: UsersActionTypes.SET_TOTAL_USERS_COUNT
  totalUsersCount: number
}

export interface ToggleIsFetchingAction {
  type: UsersActionTypes.TOGGLE_IS_FETCHING
  isFetching: boolean
}

export interface ToggleFollowingProgressAction {
  type: UsersActionTypes.TOGGLE_IS_FOLLOWING_PROGRESS
  isFetching: boolean
  userId: number
}

export interface SetCurrentPageAction {
  type: UsersActionTypes.SET_CURRENT_PAGE
  currentPage: number
}

export interface IUser {
  id: number
  name: string
  status: string
  photos: IPhotos
}

export type UsersAction =
  SetFollowAction
  | SetUnfollowAction
  | SetUsersAction
  | SetTotalUsersCountAction
  | ToggleIsFetchingAction
  | ToggleFollowingProgressAction
  | SetCurrentPageAction
