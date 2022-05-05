import React from 'react'
import { connect } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { getUserProfile } from '../../redux/profile-reducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import Profile from './Profile'

class ProfileContainer extends React.Component{

  componentDidMount() {
    let userId = this.props.router.params.userId
    if(!userId) {
      userId = 23367
    }
    this.props.getUserProfile(userId)
  }

  render() {
    return (
      <Profile { ...this.props } profile={ this.props.profile } />
    )
  }
}


let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
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
    profile: state.profilePage.profile
  }
}

const mapDispatchToProps = { getUserProfile }

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent)