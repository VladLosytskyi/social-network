import classes from './Header.module.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'

const Header = props => {
  return (
    <header className={ classes.header }>
      <NavLink to={'/'} className={ classes.logo }>
        <img src={ logo } alt='Logo' />
        <span>React Social Network</span>
      </NavLink>
      <div className={ classes.login }>
        {
          props.isAuth
            ? <div className={ classes.loggedIn }>
                <div className={ classes.userName }>{ props.login }</div>
                <a className={ classes.button } onClick={ props.logout }>Log Out</a>
              </div>
            : <NavLink to={'/login'}>Log In</NavLink> }
      </div>
    </header>
  )
}

export default Header