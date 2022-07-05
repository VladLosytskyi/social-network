import { FC } from 'react'
// @ts-ignore
import classes from './Messages.module.css'
import Chats from './Chats/Chats'
import Message from './Message/Message'
import MessagesForm from './MessagesForm'
import { IMessagesState } from '../../types/reducers-types/messages-types'

interface MessagesProps {
  messagesPage: IMessagesState
  sendMessage: (newMessageText: string) => void
}

const Messages: FC<MessagesProps> = ({ messagesPage, sendMessage }) => {
  const chatsElements = messagesPage.chats.map(chat => <Chats name={ chat.name } nickname={ chat.nickname }
                                                              key={ chat.id } />)
  const messagesElements = messagesPage.messages.map(message => <Message message={ message.message }
                                                                         key={ message.id } />)

  const addNewMessage = values => {
    sendMessage(values.newMessageText)
  }

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