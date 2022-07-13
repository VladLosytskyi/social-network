import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
// @ts-ignore
import classes from './Chat.module.css'
import { sendMessageThunk } from '../../redux/chat-reducer'
import { webSocketStatusType } from '../../types/api-types/chat-types'


interface AddMessageFormProps {
  webSocketStatus: webSocketStatusType
}

const AddMessageForm: FC<AddMessageFormProps> = ({ webSocketStatus }) => {
  const [message, setMessage] = useState('')
  const dispatch = useDispatch()

  const onSendMessage = () => {
    if (!message){
      return
    }
    dispatch(sendMessageThunk(message))
    setMessage('')
  }

  return (
    <div className={ classes.addMessageForm }>
      <textarea onChange={ event => setMessage(event.currentTarget.value) } value={ message } />
      <button disabled={ webSocketStatus !== 'ready' } onClick={ onSendMessage } className={ classes.blueButton }>Send
      </button>
    </div>
  )
}

export default AddMessageForm