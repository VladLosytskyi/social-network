import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import { loginThunk } from '../../redux/auth-reducer'
import { getCaptchaUrlSelector, getIsAuthSelector } from '../../redux/auth-selectors'


const Login: FC = () => {

  const isAuth = useSelector(getIsAuthSelector)
  const captchaUrl = useSelector(getCaptchaUrlSelector)

  const dispatch = useDispatch()


  const onSubmit = formData => {
    dispatch(loginThunk(formData.email, formData.password, formData.rememberMe, formData.captcha))
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

export default Login