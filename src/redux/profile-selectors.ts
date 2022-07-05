import { RootState } from './store'

export const getProfileSelector = (state: RootState) => {
  return state.profilePage.profile
}

export const getAvatarSelector = (state: RootState) => {
  return state.profilePage.profile?.photos
}

export const getStatusSelector = (state: RootState) => {
  return state.profilePage.status
}

export const getPostsSelector = (state: RootState) => {
  return state.profilePage.posts
}
