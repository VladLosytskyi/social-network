import { FC } from 'react'
// @ts-ignore
import classes from './../Messages.module.css'

interface MessageProps {
  message: string
}

const Message: FC<MessageProps> = ({ message }) => {
  return <div className={ classes.message }>{ message }</div>
}

export default Message