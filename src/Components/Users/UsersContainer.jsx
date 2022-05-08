import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import {
  follow,
  unfollow,
  setCurrentPage,
  getUsers
} from '../../redux/users-reducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChange = pageNumber => {
    this.props.setCurrentPage(pageNumber)
    this.props.getUsers(pageNumber, this.props.pageSize)
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
  setCurrentPage,
  getUsers
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(UsersContainer)