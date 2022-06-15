import { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Users from './Users'
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


const UsersContainer = (props) => {

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
                 onPageChange={ onPageChange }
                 users={ props.users }
                 follow={ props.follow }
                 unfollow={ props.unfollow }
                 followingInProgress={ props.followingInProgress }
        />
      }
    </>
  )
}

const mapStateToProps = state => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSizeSelector(state),
    totalUsersCount: getTotalUsersCountSelector(state),
    currentPage: getCurrentPageSelector(state),
    isFetching: getIsFetchingSelector(state),
    followingInProgress: getFollowingInProgressSelector(state)
  }
}
const mapDispatchToProps = {
  follow,
  unfollow,
  setCurrentPage,
  getUsers
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(UsersContainer)