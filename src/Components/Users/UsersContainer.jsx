import React from 'react'
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
  getFollowingInProgressSelector } from '../../redux/users-selectors'
import {
  follow,
  unfollow,
  setCurrentPage,
  getUsers
} from '../../redux/users-reducer'


class UsersContainer extends React.Component {

  componentDidMount() {
    const { getUsers, currentPage, pageSize } = this.props
    getUsers(currentPage, pageSize)
  }

  onPageChange = pageNumber => {
    const { setCurrentPage, getUsers, pageSize } = this.props
    setCurrentPage(pageNumber)
    getUsers(pageNumber, pageSize)
  }

  render() {
    return (
      <>
        { this.props.isFetching
          ? <Preloader />
          : <Users totalUsersCount={ this.props.totalUsersCount }
                   pageSize={ this.props.pageSize }
                   currentPage={ this.props.currentPage }
                   onPageChange={ this.onPageChange }
                   users={ this.props.users }
                   follow={ this.props.follow }
                   unfollow={ this.props.unfollow }
                   followingInProgress={ this.props.followingInProgress }
            />
        }
      </>
    )
  }
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