import React from 'react'
import { connect } from 'react-redux'
import { getAuthUserData } from '../../redux/auth-reducer'
import Header from './Header'

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.getAuthUserData()
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
const mapDispatchToProps = { getAuthUserData }

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)