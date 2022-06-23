import { compose } from 'redux'
import { connect } from 'react-redux'
import { sendMessage } from '../../redux/messages-reducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import Messages from './Messages'

const mapStateToProps = state => ({
    messagesPage: state.messagesPage
})
const mapDispatchToProps = { sendMessage }

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Messages)
