import classes from './Header.module.css'
import logo from '../../assets/images/logo.svg'

const Header = () => {
  return (
    <header className={ classes.header }>
      <div className={ classes.logo }>
        <img src={ logo } alt='Logo' />
        <span>React Social Network</span>
      </div>
    </header>
  )
}

export default Header