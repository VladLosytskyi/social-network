import { Field, reduxForm } from 'redux-form'
import classes from './Messages.module.css'

const AddMessageForm = props => {
  return (
    <form onSubmit={ props.handleSubmit }>
      <div>
        <Field component="textarea"
               name="newMessageText"
               placeholder="Enter your message..."
        />
      </div>
      <div>
        <button className={ classes.button }>Send message</button>
      </div>
    </form>
  )
}

export default reduxForm({form: "messagesAddMessageForm"})(AddMessageForm)