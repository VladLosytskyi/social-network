import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAuthUserData, logout } from '../../redux/auth-reducer'
import Header from './Header'

const HeaderContainer = ({ getAuthUserData, ...props }) => {
  useEffect(() => {
    getAuthUserData()
  }, [])

  return <Header { ...props } />
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})
const mapDispatchToProps = { getAuthUserData, logout }

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)