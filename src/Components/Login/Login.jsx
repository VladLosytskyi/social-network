import LoginForm from './LoginForm'

const Login = () => {
  const onSubmit = formData => {
    console.log(formData)
  }

  return (
    <section>
      <h1>Login</h1>
      <LoginForm onSubmit={ onSubmit } />
    </section>
  )
}

export default Login