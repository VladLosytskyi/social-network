import classes from './Welcome.module.css'
import { NavLink } from 'react-router-dom'

const Welcome = () => {
  return (
    <section className={ classes.welcome }>
      <h1>Welcome to my 1st <a className={ classes.blueText }
                               href="https://reactjs.org/"
                               target="_blanc">ReactJS</a> project</h1>
      <div>
        <p>Unfortunately, the <a className={ classes.blueText }
                                 href="https://en.wikipedia.org/wiki/API"
                                 target="_blanc">API</a> that my project uses does not support sign up functionality.
        </p>
        <p>Therefore, I have to ask you to visit <a className={ classes.blueText }
                                                    href="https://social-network.samuraijs.com/signUp"
                                                    target="_blanc">API's Website</a> to register.
        </p>
        <p>After registration, please close the sign up tab and go on <NavLink to="/login"
                                                                               className={ classes.blueText }>Login
          Page</NavLink> and login there.</p>
        <p>Then the functionality of the site will be available to you as a registered user.</p>
        <p>I am sorry for the inconvenience.</p>
      </div>
    </section>
  )
}

export default Welcome