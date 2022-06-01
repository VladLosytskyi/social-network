import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { login } from '../../redux/auth-reducer'
import { Navigate } from 'react-router-dom'

const Login = props => {
  const onSubmit = formData => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Navigate to="/profile" />
  }

  return (
    <section>
      <h1>Login</h1>
      <LoginForm onSubmit={ onSubmit } />
    </section>
  )
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
})
const mapDispatchToProps = { login }

export default connect(mapStateToProps, mapDispatchToProps)(Login)