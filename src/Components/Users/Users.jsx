import Paginator from '../common/Paginator/Paginator'
import User from './User'

const Users = props => {
  return (
    <section>
      <Paginator totalUsersCount={ props.totalUsersCount }
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