import { FC } from 'react'
import { NavLink } from 'react-router-dom'
// @ts-ignore
import classes from './Header.module.css'
// @ts-ignore
import logo from '../../assets/images/logo.svg'

interface HeaderProps {
  isAuth: boolean
  login: string | null
  logout: () => void
}

const Header: FC<HeaderProps> = ({ isAuth, login, logout }) => {
  return (
    <header className={ classes.header }>
      <NavLink to={'/'} className={ classes.logo }>
        <img src={ logo } alt='Logo' />
        <span>React Social Network</span>
      </NavLink>
      <div className={ classes.login }>
        {
          isAuth
            ? <div className={ classes.loggedIn }>
                <div className={ classes.userName }>{ login }</div>
                <a className={ classes.button } onClick={ logout }>Log Out</a>
              </div>
            : <NavLink to={'/login'}>Log In</NavLink> }
      </div>
    </header>
  )
}

export default Header