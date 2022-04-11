import React from 'react'
import classes from './Users.module.css'
import userAvatar from '../../assets/images/userAvatar.png'
import axios from 'axios'

class Users extends React.Component {

  constructor(props) {
    super(props)

    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then( response => {
        debugger
        this.props.setUsers(response.data.items)
      } )
  }

  render() {
    return (
      <section>
        {
          this.props.users.map(user => <div key={ user.id }>
            <div className={ classes.user }>
              <div className={ classes.userImage }>
                <div>
                  <img src={ user.photos.small != null ? user.photos.small : userAvatar } alt="" className={ classes.avatar } />
                </div>
                <div>
                  {
                    user.followed
                      ? <button onClick={ () => this.props.unfollow(user.id) } className={ classes.whiteButton }>
                          Unfollow
                        </button>
                      : <button onClick={ () => this.props.follow(user.id) } className={ classes.blueButton }>
                          Follow
                        </button>
                  }
                </div>
              </div>
              <div className={ classes.userInfo }>
                <div className={ classes.name }>{ user.name }</div>
                {/*<div>
                  <div>{ user.location.country },</div>
                  <div>{ user.location.city }</div>
                </div>*/}
              </div>
            </div>
            <div className={ classes.separator } />
          </div>)
        }
      </section>
    )
  }
}

export default Users