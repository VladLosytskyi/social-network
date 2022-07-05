import { ComponentType } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Messages from './Messages'
import { RootState } from '../../redux/store'
import { sendMessage } from '../../redux/messages-reducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { IMessagesState } from '../../types/reducers-types/messages-types'

interface IMapStateToProps {
    messagesPage: IMessagesState
}
interface IMapDispatchToProps {
    sendMessage: (newMessageText: string) => void
}

const mapStateToProps = (state: RootState) => ({
    messagesPage: state.messagesPage
})
const mapDispatchToProps = { sendMessage }

export default compose<ComponentType>(
  connect<IMapStateToProps, IMapDispatchToProps>(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Messages)

