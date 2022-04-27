import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Users.module.css'
import userAvatar from '../../assets/images/userAvatar.png'
import { usersAPI } from '../../api/api'

let Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <section>
      <div className={ classes.pageNumbers }>
        {
          pages.map(pageNumber => {
            return (
              <span className={
                      `${ props.currentPage === pageNumber && classes.selectedPage} ${ classes.pageNumber }`
                    }
                    onClick={() => { props.onPageChange(pageNumber) }}>
                { pageNumber }
              </span>
            )
          })
        }
      </div>
      {
        props.users.map(user => <div key={ user.id }>
          <div className={ classes.user }>
            <div className={ classes.userImage }>
              <NavLink to={`/profile/${ user.id }`} >
                <img src={ user.photos.small != null ? user.photos.small : userAvatar } alt="" className={ classes.avatar } />
              </NavLink>
              <div>
                {
                  user.followed
                    ? <button onClick={ () => {

                      usersAPI.follow(user.id)
                        .then( data => {
                          if (data.resultCode === 0) {
                            props.follow(user.id)
                          }
                        } )

                    } } className={ classes.blueButton }>
                      Follow
                    </button>
                    : <button onClick={ () => {

                      usersAPI.unfollow(user.id)
                        .then( data => {
                          if (data.resultCode === 0) {
                            props.unfollow(user.id)
                          }
                        } )

                      } } className={ classes.whiteButton }>
                      Unfollow
                    </button>
                }
              </div>
            </div>
            <NavLink to={`/profile/${ user.id }`} className={ classes.userInfo }>
              <div className={ classes.name }>{ user.name }</div>
              <div>{ user.status }</div>
              {/*<div>
                <div>{ user.location.country },</div>
                <div>{ user.location.city }</div>
              </div>*/}
            </NavLink>
          </div>
          <div className={ classes.separator } />
        </div>)
      }
    </section>
  )
}

export default Users