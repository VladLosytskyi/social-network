import { FC } from 'react'
import { Navigate } from 'react-router-dom'
// @ts-ignore
import classes from './Messages.module.css'
import Chats from './Chats/Chats'
import Message from './Message/Message'
import MessagesForm from './MessagesForm'
import { MessagesState } from '../../types/reducers-types/messages-types'

interface MessagesProps {
  messagesPage: MessagesState
  sendMessage: (newMessageText: string) => void
  isAuth: boolean
}

const Messages: FC<MessagesProps> = ({ messagesPage, sendMessage, isAuth }) => {
  const chatsElements = messagesPage.chats.map(chat => <Chats name={ chat.name } nickname={ chat.nickname }
                                                              key={ chat.id } />)
  const messagesElements = messagesPage.messages.map(message => <Message message={ message.message }
                                                                         key={ message.id } />)

  const addNewMessage = values => {
    sendMessage(values.newMessageText)
  }

  if (!isAuth) return <Navigate to="/login" />

  return (
    <div className={ classes.chats }>
      <div className={ classes.chatsItems }>
        { chatsElements }
      </div>
      <div className={ classes.messages }>
        <div>{ messagesElements }</div>
        <MessagesForm onSubmit={ addNewMessage } />
      </div>
    </div>
  )
}

export default Messages