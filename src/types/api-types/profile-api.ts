import { IAvatar } from '../reducers-types/profile'
import { ResultCodes } from './api'

export interface PostUserAvatarResponse {
  data: {
    photos: IAvatar
  }
  resultCode: ResultCodes
  messages: string[]
}
