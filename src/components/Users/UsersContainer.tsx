import { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import { RootState } from '../../redux/store'
import Preloader from '../common/Preloader/Preloader'
import {
  getUsersSelector,
  getPageSizeSelector,
  getTotalUsersCountSelector,
  getCurrentPageSelector,
  getIsFetchingSelector,
  getFollowingInProgressSelector, getFilter
} from '../../redux/users-selectors'
import {
  follow,
  unfollow,
  getUsers
} from '../../redux/users-reducer'
import { IFilter, IUser } from '../../types/reducers-types/users-types'


interface IMapStateToProps {
  users: IUser[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: number[]
  filter: IFilter
}
interface IMapDispatchToProps {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  getUsers: (currentPage: number, pageSize: number, filter: IFilter) => void
}
interface OwnProps {}
type UsersContainerProps = IMapStateToProps & IMapDispatchToProps & OwnProps


const UsersContainer: FC<UsersContainerProps> = (props) => {

  useEffect(() => {
    props.getUsers(props.currentPage, props.pageSize, props.filter)
  }, [])

  const onPageChange = pageNumber => {
    props.getUsers(pageNumber, props.pageSize, props.filter)
  }

  const onFilterChange = (filter: IFilter) => {
    props.getUsers(1, props.pageSize, filter)
  }

  return (
    <>
      { props.isFetching
        ? <Preloader />
        : <Users totalUsersCount={ props.totalUsersCount }
                 pageSize={ props.pageSize }
                 currentPage={ props.currentPage }
                 users={ props.users }
                 follow={ props.follow }
                 unfollow={ props.unfollow }
                 followingInProgress={ props.followingInProgress }
                 onPageChange={ onPageChange }
                 onFilterChange={ onFilterChange }
        />
      }
    </>
  )
}


const mapStateToProps = (state: RootState) => ({
  users: getUsersSelector(state),
  pageSize: getPageSizeSelector(state),
  totalUsersCount: getTotalUsersCountSelector(state),
  currentPage: getCurrentPageSelector(state),
  isFetching: getIsFetchingSelector(state),
  followingInProgress: getFollowingInProgressSelector(state),
  filter: getFilter(state)
})
const mapDispatchToProps = {
  follow,
  unfollow,
  getUsers
}

export default connect<IMapStateToProps, IMapDispatchToProps, OwnProps>(mapStateToProps, mapDispatchToProps)(UsersContainer)