import Paginator from '../common/Paginator/Paginator'
import User from './User'
import classes from './Users.module.css'

const Users = props => {
  return (
    <section className={ classes.users }>
      <Paginator totalItemsCount={ props.totalUsersCount }
                 pageSize={ props.pageSize }
                 currentPage={ props.currentPage }
                 onPageChange={ props.onPageChange } />

      { props.users.map(user => <User key={ user.id }
                                user={ user }
                                follow={ props.follow }
                                unfollow={ props.unfollow }
                                followingInProgress={ props.followingInProgress } />)
      }
    </section>
  )
}

export default Users