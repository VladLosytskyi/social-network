import Messages from './Messages'
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/messages-reducer'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    messagesPage: state.messagesPage
  }
}
const mapDispatchToProps = dispatch => {
  return {
    updateNewMessageText: text => {
      dispatch(updateNewMessageTextCreator(text))
    },
    sendMessage: () => {
      dispatch(sendMessageCreator())
    }
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer