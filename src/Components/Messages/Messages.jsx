import { Navigate } from 'react-router-dom'
import classes from './Messages.module.css'
import Chats from './Chats/Chats'
import Message from './Message/Message'
import AddMessageForm from './AddMessageForm'

const Messages = props => {

  let state = props.messagesPage

  let chatsElements = state.chats.map(chat => <Chats name={ chat.name } nickname={ chat.nickname } key={ chat.id } />)
  let messagesElements = state.messages.map(message => <Message message={ message.message } key={ message.id } />)

  let addNewMessage = values => {
    props.sendMessage(values.newMessageText)
  }

  if(!props.isAuth) return <Navigate to='/login' />

  return (
    <div className={ classes.chats }>
      <div className={ classes.chatsItems }>
        { chatsElements }
      </div>
      <div className={ classes.messages }>
        <div>{ messagesElements }</div>
        <AddMessageForm onSubmit={ addNewMessage } />
      </div>
    </div>
  )
}

export default Messages