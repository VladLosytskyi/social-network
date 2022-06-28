import { FC } from 'react'
import Paginator from '../common/Paginator/Paginator'
import User from './User'
// @ts-ignore
import classes from './Users.module.css'
import { IUser } from '../../types/reducers-types/users-types'

interface UsersProps {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  users: IUser[]
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  followingInProgress: number[]
  onPageChange: (pageNumber: number) => void
}

const Users: FC<UsersProps> = props => {
  return (
    <section className={ classes.users }>
      <Paginator totalItemsCount={ props.totalUsersCount }
                 pageSize={ props.pageSize }
                 currentPage={ props.currentPage }
                 onPageChange={ props.onPageChange } />

      { props.users.map(user => <User key={ user.id }
                                      user={ user }
                                      follow={ props.follow }
                                      unfollow={ props.unfollow }
                                      followingInProgress={ props.followingInProgress } />)
      }
    </section>
  )
}

export default Users