import { IUser } from '../reducers-types/users'

export interface GetUsersResponse {
  items: IUser[]
  totalCount: number
  error: string | null
}
