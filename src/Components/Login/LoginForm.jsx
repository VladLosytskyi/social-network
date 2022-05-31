import { Field, reduxForm } from 'redux-form'
import classes from './Login.module.css'
import { Input } from '../common/FormsControls/FormsControls'
import { required, maxLengthCreator } from '../../utillities/validators/validators'

const validate = [
  required,
  maxLengthCreator(15)
]

const LoginForm = props => {
  return (
    <form onSubmit={ props.handleSubmit }>
      <div>
        <Field component={ Input } name="login" type="text" placeholder="Login" validate={ validate } />
      </div>
      <div className={ classes.mt10 }>
        <Field component={ Input } name="password" type="text" placeholder="Password" validate={ validate } />
      </div>
      <div className={ `${ classes.rememberMe } ${ classes.mt10 }` }>
        <Field component={ Input } name="rememberMe" type="checkbox" />
        <span>Remember me</span>
      </div>
      <div className={ classes.mt10 }>
        <button className={ classes.button }>Login</button>
      </div>
    </form>
  )
}

export default reduxForm({ form: 'login' })(LoginForm)