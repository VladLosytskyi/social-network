import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
// @ts-ignore
import classes from './Header.module.css'
// @ts-ignore
import logo from '../../assets/images/logo.svg'
import { getAuthUserDataThunk, logoutThunk } from '../../redux/auth-reducer'
import { getIsAuthSelector, getLoginSelector } from '../../redux/auth-selectors'


const Header: FC = () => {

  const isAuth = useSelector(getIsAuthSelector)
  const login = useSelector(getLoginSelector)

  const dispatch = useDispatch()
  const logout = () => {
    dispatch(logoutThunk())
  }

    
  useEffect(() => {
    dispatch(getAuthUserDataThunk())
  }, [])

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