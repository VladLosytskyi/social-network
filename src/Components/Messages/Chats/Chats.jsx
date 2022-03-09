import classes from './../Messages.module.css'
import { NavLink } from 'react-router-dom'

const Chats = props => {
  let path = '/messages/' + props.nickname

  return (
    <NavLink to={ path } className={ ({ isActive }) => isActive ? classes.active : '' }>{ props.name }</NavLink>
  )
}

export default Chats