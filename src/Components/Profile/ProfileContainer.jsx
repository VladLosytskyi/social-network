import { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { getUserProfile, getStatus, updateStatus, postUserAvatar } from '../../redux/profile-reducer'
import Profile from './Profile'

const ProfileContainer = props => {
  useEffect(() => {
    let userId = props.router.params.userId
    if (!userId) {
      userId = props.authorisedUserId
      if (!userId) {
        props.history.push('/login')
      }
    }
    props.getUserProfile(userId)
    props.getStatus(userId)
  }, [props.router.params.userId])

  return (
    <Profile profile={ props.profile }
             authorisedUserId={ props.authorisedUserId }
             status={ props.status }
             updateStatus={ props.updateStatus }
             postUserAvatar={ props.postUserAvatar }
    />
  )
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()
    return (
      <Component
        { ...props }
        router={ { location, navigate, params } }
      />
    )
  }

  return ComponentWithRouterProp
}

const mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
  }
}
const mapDispatchToProps = { getUserProfile, getStatus, updateStatus, postUserAvatar }

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(ProfileContainer)