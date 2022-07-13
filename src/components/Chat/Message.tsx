import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
// @ts-ignore
import classes from './Chat.module.css'
// @ts-ignore
import userAvatar from '../../assets/images/userAvatar.png'
import { IChatMessage } from '../../types/reducers-types/chat-types'


interface IMessageProps {
  message: IChatMessage
}

const Message: FC<IMessageProps> = React.memo(({ message: { userId, photo, userName, message } }) => {
  return (
    <div className={ classes.message }>
      <NavLink to={ `/profile/${ userId }` } className={ classes.avatar }>
        <img src={ photo || userAvatar } alt={ userAvatar } />
      </NavLink>
      <div className={ classes.body }>
        <div className={ classes.userName }>{ userName }</div>
        <div className={ classes.message }>{ message }</div>
      </div>
    </div>
  )
})

export default Message