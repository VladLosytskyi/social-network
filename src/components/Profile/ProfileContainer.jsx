import { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getUserProfile, getStatus, updateProfile, updateStatus, postUserAvatar } from '../../redux/profile-reducer'
import Profile from './Profile'

const ProfileContainer = props => {
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    let userId = params.userId
    if (!userId) {
      userId = props.authorisedUserId
      if (!userId) {
        navigate('/login')
      }
    }
    props.getUserProfile(userId)
    props.getStatus(userId)
  }, [params.userId])

  return (
    <Profile profile={ props.profile }
             status={ props.status }
             updateProfile={ props.updateProfile }
             updateStatus={ props.updateStatus }
             postUserAvatar={ props.postUserAvatar }
             isOwner={ !params.userId }
    />
  )
}

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})
const mapDispatchToProps = { getUserProfile, getStatus, updateProfile, updateStatus, postUserAvatar }

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ProfileContainer)