import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { getUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer'
import Profile from './Profile'

class ProfileContainer extends React.Component{

  componentDidMount() {
    let userId = this.props.router.params.userId
    if(!userId) {
      userId = 23367
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  render() {
    return (
      <Profile { ...this.props }
               profile={ this.props.profile }
               status={ this.props.status }
               updateStatus={ this.props.updateStatus }
      />
    )
  }
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    )
  }
  return ComponentWithRouterProp
}

const mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status
  }
}
const mapDispatchToProps = { getUserProfile, getStatus, updateStatus }

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(ProfileContainer)