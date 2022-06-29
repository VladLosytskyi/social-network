import { FC } from 'react'
// @ts-ignore
import classes from './../Messages.module.css'
import { NavLink } from 'react-router-dom'

interface ChatsProps {
  nickname: string
  name: string
}

const Chats: FC<ChatsProps> = ({ nickname, name }) => {
  const path = '/messages/' + nickname

  return (
    <NavLink to={ path } className={ ({ isActive }) => isActive ? classes.active : '' }>{ name }</NavLink>
  )
}

export default Chats