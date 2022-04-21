import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  let className = ({ isActive }) => isActive ? classes.active : ''
  return (
    <nav className={ classes.nav }>
      <div className={ `${ classes.item } ${ classes.active }` }>
        <NavLink to="/profile" className={ className }>Profile</NavLink>
      </div>
      <div className={ classes.item }>
        <NavLink to="/messages" className={ className }>Messages</NavLink>
      </div>
      <div className={ classes.item }>
        <NavLink to="/users" className={ className }>Users</NavLink>
      </div>
      <div className={ classes.item }>
        <NavLink to="/news" className={ className }>News</NavLink>
      </div>
      <div className={ classes.item }>
        <NavLink to="/music" className={ className }>Music</NavLink>
      </div>
      <div className={ classes.item }>
        <NavLink to="/settings" className={ className }>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar