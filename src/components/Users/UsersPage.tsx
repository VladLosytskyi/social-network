import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// @ts-ignore
import classes from './Users.module.css'
import Preloader from '../common/Preloader/Preloader'
import Paginator from '../common/Paginator/Paginator'
import User from './User'
import UsersSearchForm from './UsersSearchForm'
import { followThunk, getUsersThunk, unfollowThunk } from '../../redux/users-reducer'
import {
  getCurrentPageSelector, getFilterSelector,
  getFollowingInProgressSelector,
  getIsFetchingSelector,
  getPageSizeSelector,
  getTotalUsersCountSelector,
  getUsersSelector
} from '../../redux/users-selectors'
import { IFilter } from '../../types/reducers-types/users-types'


const UsersPage: FC = () => {

  const users = useSelector(getUsersSelector)
  const pageSize = useSelector(getPageSizeSelector)
  const filter = useSelector(getFilterSelector)
  const totalUsersCount = useSelector(getTotalUsersCountSelector)
  const currentPage = useSelector(getCurrentPageSelector)
  const isFetching = useSelector(getIsFetchingSelector)
  const followingInProgress = useSelector(getFollowingInProgressSelector)


  const dispatch = useDispatch()
  const follow = (userId: number) => {
    dispatch(followThunk(userId))
  }
  const unfollow = (userId: number) => {
    dispatch(unfollowThunk(userId))
  }


  useEffect(() => {
    dispatch(getUsersThunk(currentPage, pageSize, filter))
  }, [])

  const onFilterChange = (filter: IFilter) => {
    dispatch(getUsersThunk(1, pageSize, filter))
  }

  const onPageChange = pageNumber => {
    dispatch(getUsersThunk(pageNumber, pageSize, filter))
  }

  return (
    <>
      { isFetching
        ? <Preloader />
        : <section className={ classes.users }>
            <div className={ classes.usersSearchFormContainer }>
              <UsersSearchForm onFilterChange={ onFilterChange } />
            </div>
            <Paginator totalItemsCount={ totalUsersCount }
                       pageSize={ pageSize }
                       currentPage={ currentPage }
                       onPageChange={ onPageChange } />

            <div className={ classes.usersContainer }>
              { users.map(user => <User key={ user.id }
                                        user={ user }
                                        follow={ follow }
                                        unfollow={ unfollow }
                                        followingInProgress={ followingInProgress } />)
              }
            </div>
          </section> }
    </>
  )
}

export default UsersPage