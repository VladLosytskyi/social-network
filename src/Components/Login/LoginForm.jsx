import { Field, reduxForm } from 'redux-form'
import classes from './Login.module.css'
import { Input } from '../common/FormsControls/FormsControls'
import { required, maxLengthCreator } from '../../utillities/validators/validators'

const validate = [
  required,
  maxLengthCreator(50)
]

const LoginForm = props => {
  return (
    <form onSubmit={ props.handleSubmit }>
      <div>
        <Field component={ Input } name="email" type="text" placeholder="Email" validate={ validate } />
      </div>
      <div className={ classes.mt10 }>
        <Field component={ Input } name="password" type="password" placeholder="Password" validate={ validate } />
      </div>
      <div className={ `${ classes.rememberMe } ${ classes.mt10 }` }>
        <Field component={ Input } name="rememberMe" type="checkbox" id="rememberMe" />
        <label htmlFor="rememberMe">Remember me</label>
      </div>
      <div className={ classes.mt10 }>
        <button className={ classes.button }>Login</button>
      </div>
    </form>
  )
}

export default reduxForm({ form: 'login' })(LoginForm)