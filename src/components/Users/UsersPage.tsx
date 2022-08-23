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
  getCurrentPageSelector,
  getFilterSelector,
  getFollowingInProgressSelector,
  getIsFetchingSelector,
  getPageSizeSelector,
  getTotalUsersCountSelector,
  getUsersSelector
} from '../../redux/users-selectors'
import { IFilter, IUsersQueryParams } from '../../types/reducers-types/users-types'
import { useLocation, useNavigate } from 'react-router-dom'


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


  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(location.search)

    const parsedPage = params.get('page')
    const parsedTerm = params.get('term')
    const parsedFriend = params.get('friend')

    const actualPage = parsedPage ? +parsedPage : currentPage
    const actualFilter = parsedTerm ? { ...filter, term: parsedTerm } :
      parsedFriend ? { ...filter, friend: parsedFriend === 'null' ? null : parsedFriend === 'true' } :
        filter

    dispatch(getUsersThunk(actualPage, pageSize, actualFilter))
  }, [])
  useEffect(() => {
    const queryParams: IUsersQueryParams | string = {}

    if(filter.term) queryParams.term = filter.term
    if(filter.friend !== null) queryParams.friend = String(filter.friend)
    if(currentPage !== 1) queryParams.page = String(currentPage)

    const queryString = '?' + Object.keys(queryParams)
      .map(key => `${ key }=${ encodeURIComponent(queryParams[key]) }`)
      .join('&')

    navigate({
      pathname: '/users',
      search: queryString
    })
  }, [filter, currentPage])


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
            <UsersSearchForm onFilterChange={ onFilterChange } filter={ filter } />
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