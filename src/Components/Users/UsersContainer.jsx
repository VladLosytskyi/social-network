import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching
} from '../../redux/users-reducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.setIsFetching(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&count=${ this.props.pageSize }`
      )
      .then( response => {
        this.props.setIsFetching(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      } )
  }

  onPageChange = pageNumber => {
    this.props.setCurrentPage(pageNumber)
    this.props.setIsFetching(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${ pageNumber }&count=${ this.props.pageSize }`
      )
      .then( response => {
        this.props.setIsFetching(false)
        this.props.setUsers(response.data.items)
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
    isFetching: state.usersPage.isFetching
  }
}

const mapDispatchToProps = {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)