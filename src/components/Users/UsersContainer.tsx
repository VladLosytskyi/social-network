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
  getFollowingInProgressSelector
} from '../../redux/users-selectors'
import {
  follow,
  unfollow,
  setCurrentPage,
  getUsers
} from '../../redux/users-reducer'
import { IUser } from '../../types/reducers-types/users-types'


interface IMapStateToProps {
  users: IUser[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: number[]
}
interface IMapDispatchToProps {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setCurrentPage: (currentPage: number) => void
  getUsers: (currentPage: number, pageSize: number) => void
}
interface OwnProps {}
type UsersContainerProps = IMapStateToProps & IMapDispatchToProps & OwnProps

const UsersContainer: FC<UsersContainerProps> = (props) => {

  useEffect(() => {
    props.getUsers(props.currentPage, props.pageSize)
  }, [])

  const onPageChange = pageNumber => {
    props.setCurrentPage(pageNumber)
    props.getUsers(pageNumber, props.pageSize)
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
  followingInProgress: getFollowingInProgressSelector(state)
})
const mapDispatchToProps = {
  follow,
  unfollow,
  setCurrentPage,
  getUsers
}

export default connect<IMapStateToProps, IMapDispatchToProps, OwnProps>(mapStateToProps, mapDispatchToProps)(UsersContainer)