import { Navigate } from 'react-router-dom'
import classes from './Messages.module.css'
import Chats from './Chats/Chats'
import Message from './Message/Message'

const Messages = props => {

  let state = props.messagesPage

  let chatsElements = state.chats.map(chat => <Chats name={ chat.name } nickname={ chat.nickname } key={ chat.id } />)
  let messagesElements = state.messages.map(message => <Message message={ message.message } key={ message.id } />)
  let newMessageText = state.newMessageText

  let onSendMessageClick = () => {
    props.sendMessage()
  }

  let onNewMessageChange = event => {
    let text = event.target.value
    props.updateNewMessageText(text)
  }

  if(!props.isAuth) return <Navigate to='/login' />

  return (
    <div className={ classes.chats }>
      <div className={ classes.chatsItems }>
        { chatsElements }
      </div>
      <div className={ classes.messages }>
        <div>{ messagesElements }</div>
        <div>
          <div>
            <textarea
              value={ newMessageText }
              onChange={ onNewMessageChange }
              placeholder="Enter your message..."
            />
          </div>
          <div>
            <button onClick={ onSendMessageClick } className={ classes.button }>Send message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages