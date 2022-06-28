import { instance } from './api'
import { IProfile } from '../types/reducers-types/profile-types'
import { Response } from '../types/api-types/api-types'
import { PostUserAvatarResponseData } from '../types/api-types/profile-api-types'

export const profileAPI = {
  getProfile: (userId: number) => {
    return instance.get<IProfile>(`profile/${ userId }`)
      .then(response => response.data)
  },
  getStatus: (userId: number) => {
    return instance.get<string>(`profile/status/${ userId }`)
      .then(response => response.data)
  },
  updateProfile: (profile: IProfile) => {
    return instance.put<Response>(`profile`, profile)
      .then(response => response.data)
  },
  updateStatus: (status: string) => {
    return instance.put<Response>(`profile/status`, { status })
      .then(response => response.data)
  },
  postUserAvatar: (userAvatar: File) => {
    const formData = new FormData()
    formData.append('image', userAvatar)
    return instance.put<Response<PostUserAvatarResponseData>>(`profile/photo`, formData, {
      headers: {
        'Content-type': 'multipart/form-data'
      }
    })
      .then(response => response.data)
  }
}