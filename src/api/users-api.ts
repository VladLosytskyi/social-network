import { instance } from './api'
import { GetUsersResponse } from '../types/api-types/users-api-types'
import { Response } from '../types/api-types/api-types'
import { IFilter } from '../types/reducers-types/users-types'

export const usersAPI = {
  getUsers: (currentPage: number, pageSize: number, filter: IFilter = { term: '', friend: null }) => {
    return instance.get<GetUsersResponse>(`users?page=${ currentPage }&count=${ pageSize }&term=${ filter.term }${ filter.friend === null ? '' : `&friend=${ filter.friend }` }`)
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