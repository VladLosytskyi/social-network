import { instance } from './api'
import { GetUsersResponse } from '../types/api-types/users-api-types'
import { Response } from '../types/api-types/api-types'

export const usersAPI = {
  getUsers: (currentPage: number, pageSize: number) => {
    return instance.get<GetUsersResponse>(`users?page=${ currentPage }&count=${ pageSize }`)
      .then(response => response.data)
  },
  follow: (userId: number) => {
    return instance.post<Response>(`follow/${ userId }`)
      .then(response => response.data)
  },
  unfollow: (userId: number) => {
    return instance.delete<Response>(`follow/${ userId }`)
      .then(response => response.data)
  }
}