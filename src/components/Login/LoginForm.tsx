import { FC } from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
// @ts-ignore
import classes from './Login.module.css'
import { Input } from '../common/FormsControls/FormsControls'
import { required, maxLengthCreator } from '../../utillities/validators/validators'

const validate = [
  required,
  maxLengthCreator(50)
]

interface LoginFormValues {
  email: string
  password: string
  rememberMe: boolean
  captcha: string | null
}

interface LoginFormOwnProps {
  captchaUrl: string | null
}

type LoginFormProps = InjectedFormProps<LoginFormValues, LoginFormOwnProps> & LoginFormOwnProps

const LoginForm: FC<LoginFormProps> = ({
                                         handleSubmit,
                                         error,
                                         captchaUrl
                                       }) => {
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <Field component={ Input }
               name="email"
               type="text"
               placeholder="Email"
               validate={ validate }
               className={ classes.input } />
      </div>
      <div className={ classes.mt10 }>
        <Field component={ Input }
               name="password"
               type="password"
               placeholder="Password"
               validate={ validate }
               className={ classes.input } />
      </div>
      <div className={ `${ classes.rememberMe } ${ classes.mt10 }` }>
        <Field component={ Input }
               name="rememberMe"
               type="checkbox"
               id="rememberMe" />
        <label htmlFor="rememberMe">Remember me</label>
      </div>
      { error &&
        <div className={ classes.error }>
          { error }
        </div>
      }

      { captchaUrl &&
        <div className={ classes.captcha }>
          <img src={ captchaUrl } alt="Captcha" />
          <Field component={ Input }
                 name="captcha"
                 type="text"
                 placeholder="Type symbols from the image"
                 validate={ validate } />
        </div>
      }
      <div className={ classes.mt10 }>
        <button className={ classes.button }>Login</button>
      </div>
    </form>
  )
}

export default reduxForm<LoginFormValues, LoginFormOwnProps>({ form: 'login' })(LoginForm)