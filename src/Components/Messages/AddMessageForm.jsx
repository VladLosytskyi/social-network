import { Field, reduxForm } from 'redux-form'
import classes from './Messages.module.css'
import { Textarea } from '../common/FormsControls/FormsControls'
import { required, maxLengthCreator } from '../../utillities/validators/validators'

const validate = [
  required,
  maxLengthCreator(100)
]

const AddMessageForm = props => {
  return (
    <form onSubmit={ props.handleSubmit } className={ classes.addMessageForm }>
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

export default reduxForm({form: "messagesAddMessageForm"})(AddMessageForm)