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
        { props.isAuth ? props.login :<NavLink to={'/login'}>Login</NavLink> }
      </div>
    </header>
  )
}

export default Header