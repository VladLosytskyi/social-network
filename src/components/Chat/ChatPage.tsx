import { FC, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// @ts-ignore
import classes from './Chat.module.css'
import AddMessageForm from './AddMessageForm'
import Message from './Message'
import { startMessagesListeningThunk, stopMessagesListeningThunk } from '../../redux/chat-reducer'
import { getChatMessagesSelector, getWebSocketStatusSelector } from '../../redux/chat-selectors'
import { IChatMessage } from '../../types/reducers-types/chat-types'

const ChatPage: FC = () => {
  const [isAutoScrollActive, setIsAutoScrollActive] = useState(true)
  const messages: IChatMessage[] = useSelector(getChatMessagesSelector)
  const webSocketStatus = useSelector(getWebSocketStatusSelector)
  const messagesEndRef = useRef(null)
  const dispatch = useDispatch()

  const onScroll = event => {
    const element = event.currentTarget
    Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300
      ? !isAutoScrollActive && setIsAutoScrollActive(true)
      : isAutoScrollActive && setIsAutoScrollActive(false)
  }

  // @ts-ignore
  useEffect(() => {
    dispatch(startMessagesListeningThunk())
    return () => dispatch(stopMessagesListeningThunk())
  }, [])

  useEffect(() => {
    isAutoScrollActive && messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <>
      { webSocketStatus === 'error'
        && <div className={ classes.chatPage }>
          <div className={ classes.error }>Some Error Occurred. Please, refresh the page</div>
        </div> }

      <section className={ classes.chatPage }>
        <div className={ classes.messages } onScroll={ onScroll }>
          { messages.map((message) => <Message message={ message } key={ message.id } />) }
          <div ref={ messagesEndRef } />
        </div>
        <div className={ classes.addMessageFormContainer }>
          <AddMessageForm webSocketStatus={ webSocketStatus } />
        </div>
      </section>
    </>
  )
}

export default ChatPage