import { Field, reduxForm } from 'redux-form'
import classes from './Login.module.css'

const LoginForm = props => {
  return (
    <form onSubmit={ props.handleSubmit }>
      <div>
        <Field component="input" name="login" type="text" placeholder="Login" />
      </div>
      <div>
        <Field component="input" name="password" type="text" placeholder="Password" />
      </div>
      <div>
        <Field component="input" name="rememberMe" type="checkbox" />
        <span>Remember me</span>
      </div>
      <div>
        <button className={ classes.button }>Login</button>
      </div>
    </form>
  )
}

export default reduxForm({ form: 'login' })(LoginForm)