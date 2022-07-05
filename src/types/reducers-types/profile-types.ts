export interface IProfileState {
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

export interface IAddPostAC {
  type: ProfileActionTypes.ADD_POST
  newPostText: string
}

export interface ISetUserProfileAC {
  type: ProfileActionTypes.SET_USER_PROFILE
  profile: IProfile
}

export interface ISetStatusAC {
  type: ProfileActionTypes.SET_STATUS
  status: string
}

export interface ISetUserAvatarAC {
  type: ProfileActionTypes.SET_USER_AVATAR
  userAvatar: IAvatar
}

export interface IPost {
  id: number
  message: string
  likesCount: number
}

export interface IContacts {
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
  aboutMe: string
  contacts: IContacts
  photos: IAvatar
}

export type ProfileActions =
  IAddPostAC
  | ISetUserProfileAC
  | ISetStatusAC
  | ISetUserAvatarAC
