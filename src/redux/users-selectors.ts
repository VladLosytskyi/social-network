import { RootState } from './store'

export const getUsersSelector = (state: RootState) => {
  return state.usersPage.users
}

export const getPageSizeSelector = (state: RootState) => {
  return state.usersPage.pageSize
}

export const getTotalUsersCountSelector = (state: RootState) => {
  return state.usersPage.totalUsersCount
}

export const getCurrentPageSelector = (state: RootState) => {
  return state.usersPage.currentPage
}

export const getIsFetchingSelector = (state: RootState) => {
  return state.usersPage.isFetching
}

export const getFollowingInProgressSelector = (state: RootState) => {
  return state.usersPage.followingInProgress
}

export const getFilterSelector = (state: RootState) => {
  return state.usersPage.filter
}