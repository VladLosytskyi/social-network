import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { login } from '../../redux/auth-reducer'
import { Navigate } from 'react-router-dom'

const Login = ({ login, isAuth, captchaUrl }) => {
  const onSubmit = formData => {
    login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if (isAuth) {
    return <Navigate to="/profile" />
  }

  return (
    <section>
      <h1>Login</h1>
      <LoginForm onSubmit={ onSubmit } captchaUrl={ captchaUrl } />
    </section>
  )
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
})
const mapDispatchToProps = { login }

export default connect(mapStateToProps, mapDispatchToProps)(Login)