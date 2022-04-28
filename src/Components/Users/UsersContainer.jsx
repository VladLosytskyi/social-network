import React from 'react'
import { connect } from 'react-redux'
import { usersAPI } from '../../api/api'
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress
} from '../../redux/users-reducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true)
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then( data => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)
        this.props.setTotalUsersCount(data.totalCount)
      } )
  }

  onPageChange = pageNumber => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then( data => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)
      } )
  }

  render() {
    return (
      <>
        { this.props.isFetching ? <Preloader /> : null }
        <Users totalUsersCount={ this.props.totalUsersCount }
               pageSize={ this.props.pageSize }
               currentPage={ this.props.currentPage }
               onPageChange={ this.onPageChange }
               users={ this.props.users }
               follow={ this.props.follow }
               unfollow={ this.props.unfollow }
               toggleFollowingProgress={ this.props.toggleFollowingProgress }
               followingInProgress={ this.props.followingInProgress }
        />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

const mapDispatchToProps = {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)