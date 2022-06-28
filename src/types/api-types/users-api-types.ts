import { IUser } from '../reducers-types/users-types'

export interface GetUsersResponse {
  items: IUser[]
  totalCount: number
  error: string | null
}
