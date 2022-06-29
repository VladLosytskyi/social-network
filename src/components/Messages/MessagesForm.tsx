import { FC } from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
// @ts-ignore
import classes from './Messages.module.css'
import { Textarea } from '../common/FormsControls/FormsControls'
import { required, maxLengthCreator } from '../../utillities/validators/validators'

const validate = [
  required,
  maxLengthCreator(100)
]

interface MessagesFormValues {
  newMessageText: string
}

const MessagesForm: FC<InjectedFormProps<MessagesFormValues>> = ({
                                                                   handleSubmit
                                                                 }) => {
  return (
    <form onSubmit={ handleSubmit } className={ classes.addMessageForm }>
      <div>
        <Field component={ Textarea }
               name="newMessageText"
               placeholder="Enter your message..."
               validate={ validate }
        />
      </div>
      <div>
        <button className={ classes.button }>Send message</button>
      </div>
    </form>
  )
}

export default reduxForm<MessagesFormValues>({ form: 'messagesAddMessageForm' })(MessagesForm)