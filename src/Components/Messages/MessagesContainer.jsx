import Messages from './Messages'
import { sendMessage, updateNewMessageText } from '../../redux/messages-reducer'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    messagesPage: state.messagesPage,
    isAuth: state.auth.isAuth
  }
}
const mapDispatchToProps = { sendMessage, updateNewMessageText }

export default connect(mapStateToProps, mapDispatchToProps)(Messages)