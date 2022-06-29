export interface ProfileState {
  posts: IPost[]
  profile: null | IProfile
  status: string
}

export enum ProfileActionTypes {
  ADD_POST = 'ADD_POST',
  SET_USER_PROFILE = 'SET_USER_PROFILE',
  SET_STATUS = 'SET_STATUS',
  SET_USER_AVATAR = 'SET_USER_AVATAR'
}

export interface AddPostAction {
  type: ProfileActionTypes.ADD_POST
  newPostText: string
}

export interface SetUserProfileAction {
  type: ProfileActionTypes.SET_USER_PROFILE
  profile: IProfile
}

export interface SetStatusAction {
  type: ProfileActionTypes.SET_STATUS
  status: string
}

export interface SetUserAvatarAction {
  type: ProfileActionTypes.SET_USER_AVATAR
  userAvatar: IAvatar
}

interface IPost {
  id: number
  message: string
  likesCount: number
}

interface IContacts {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}

export interface IAvatar {
  small: string | null
  large: string | null
}

export interface IProfile {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: IContacts
  photos: IAvatar
}

export type ProfileActions =
  AddPostAction
  | SetUserProfileAction
  | SetStatusAction
  | SetUserAvatarAction
