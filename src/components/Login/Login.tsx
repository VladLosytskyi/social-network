import { FC } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import { RootState } from '../../redux/store'
import { login } from '../../redux/auth-reducer'


interface StateProps {
  isAuth: boolean
  captchaUrl: string | null
}

interface DispatchProps {
  login: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void
}

interface OwnProps {}
type LoginProps = StateProps & DispatchProps & OwnProps


const Login: FC<LoginProps> = ({ login, isAuth, captchaUrl }) => {
  const onSubmit = formData => {
    login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if (isAuth){
    return <Navigate to="/profile" />
  }

  return (
    <section>
      <h1>Login</h1>
      <LoginForm onSubmit={ onSubmit } captchaUrl={ captchaUrl } />
    </section>
  )
}

const mapStateToProps = (state: RootState) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
})
const mapDispatchToProps = { login }

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(Login)