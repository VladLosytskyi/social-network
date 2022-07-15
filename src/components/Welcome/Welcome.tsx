import { FC } from 'react'
// @ts-ignore
import classes from './Welcome.module.css'
import { NavLink } from 'react-router-dom'

const Welcome: FC = () => {
  return (
    <section className={ classes.welcome }>
      <h1>Welcome to my 1st <a className={ classes.blueText }
                               href="https://reactjs.org/"
                               target="_blanc">ReactJS</a> project</h1>
      <div>
        <p>To test the functionality of this Web Application, please
          <NavLink to='/login' className={ classes.blueText }> log in </NavLink>using this test data:</p>
        <p><span className={ classes.blueText }>Email:</span> free@samuraijs.com</p>
        <p><span className={ classes.blueText }>Password:</span> free</p>
      </div>
    </section>
  )
}

export default Welcome