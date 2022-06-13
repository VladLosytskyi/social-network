import classes from './../Messages.module.css'
import { NavLink } from 'react-router-dom'

const Chats = ({ nickname, name }) => {
  let path = '/messages/' + nickname

  return (
    <NavLink to={ path } className={ ({ isActive }) => isActive ? classes.active : '' }>{ name }</NavLink>
  )
}

export default Chats