import classes from './Messages.module.css'
import Chats from './Chats/Chats'
import Message from './Message/Message'
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/messages-reducer'

const Messages = props => {

  let state = props.store.getState().messagesPage

  let chatsElements = state.chats.map(chat => <Chats name={ chat.name } nickname={ chat.nickname } />)
  let messagesElements = state.messages.map(message => <Message message={ message.message } />)
  let newMessageText = state.newMessageText

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }

  let onNewMessageChange = event => {
    let text = event.target.value
    props.store.dispatch(updateNewMessageTextCreator(text))
  }

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