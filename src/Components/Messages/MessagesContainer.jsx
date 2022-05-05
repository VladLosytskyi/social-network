import { sendMessage, updateNewMessageText } from '../../redux/messages-reducer'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import Messages from './Messages'

let AuthRedirectComponent = withAuthRedirect(Messages)

const mapStateToProps = state => {
  return {
    messagesPage: state.messagesPage
  }
}
const mapDispatchToProps = { sendMessage, updateNewMessageText }

export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)