import React from 'react'
import { connect } from 'react-redux'
import { setAuthUserData } from '../../redux/auth-reducer'
import { authAPI } from '../../api/api'
import Header from './Header'

class HeaderContainer extends React.Component {

  componentDidMount() {
    authAPI.login()
      .then( data => {
        if (data.resultCode === 0) {
          let { id, email, login } = data.data
          this.props.setAuthUserData(id, email, login)
        }
      } )
  }

  render() {
    return <Header { ...this.props } />
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}
const mapDispatchToProps = { setAuthUserData }

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)