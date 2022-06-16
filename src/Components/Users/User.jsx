import { NavLink } from 'react-router-dom'
import classes from './Users.module.css'
import userAvatar from '../../assets/images/userAvatar.png'

let Users = ({ user, follow, unfollow, followingInProgress }) => {
  return (
    <>
      <div className={ classes.user }>
        <div className={ classes.userImage }>
          <NavLink to={ `/profile/${ user.id }` }>
            <img src={ user.photos.small != null ? user.photos.small : userAvatar } alt="User Avatar"
                 className={ classes.avatar } />
          </NavLink>
          <div>
            {
              !user.followed
                ? <button disabled={ followingInProgress.some(id => id === user.id) }
                          onClick={ () => follow(user.id) }
                          className={ classes.blueButton }
                >
                  Follow
                </button>
                : <button disabled={ followingInProgress.some(id => id === user.id) }
                          onClick={ () => unfollow(user.id) }
                          className={ classes.whiteButton }
                >
                  Unfollow
                </button>
            }
          </div>
        </div>
        <NavLink to={ `/profile/${ user.id }` } className={ classes.userInfo }>
          <div className={ classes.name }>{ user.name }</div>
          <div>{ user.status }</div>
        </NavLink>
      </div>
      <div className={ classes.separator } />
    </>
  )
}

export default Users