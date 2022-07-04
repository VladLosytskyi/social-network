import { FC } from 'react'
// @ts-ignore
import classes from './Users.module.css'
import Paginator from '../common/Paginator/Paginator'
import User from './User'
import UsersSearchForm from './UsersSearchForm'
import { IFilter, IUser } from '../../types/reducers-types/users-types'

interface UsersProps {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  users: IUser[]
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  followingInProgress: number[]
  onPageChange: (pageNumber: number) => void
  onFilterChange: (filter: IFilter) => void
}

const Users: FC<UsersProps> = props => {
  return (
    <section className={ classes.users }>
      <div className={ classes.usersSearchFormContainer }>
        <UsersSearchForm onFilterChange={ props.onFilterChange } />
      </div>
      <Paginator totalItemsCount={ props.totalUsersCount }
                 pageSize={ props.pageSize }
                 currentPage={ props.currentPage }
                 onPageChange={ props.onPageChange } />

      <div className={ classes.usersContainer }>
        { props.users.map(user => <User key={ user.id }
                                        user={ user }
                                        follow={ props.follow }
                                        unfollow={ props.unfollow }
                                        followingInProgress={ props.followingInProgress } />)
        }
      </div>
    </section>
  )
}

export default Users