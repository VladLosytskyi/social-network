import { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Profile from './Profile'
import { RootState } from '../../redux/store'
import { getUserProfile, getStatus, updateProfile, updateStatus, postUserAvatar } from '../../redux/profile-reducer'
import { IProfile } from '../../types/reducers-types/profile-types'


interface IMapStateToProps {
  profile: null | IProfile
  status: string
  authorisedUserId: number | null
  isAuth: boolean
}

interface IMapDispatchToProps {
  getUserProfile: (userId: number) => void
  getStatus: (userId: number) => void
  updateProfile: (profile: IProfile) => void
  updateStatus: (status: string) => void
  postUserAvatar: (userAvatar: File) => void
}
interface OwnProps {}
type ProfileContainerProps = IMapStateToProps & IMapDispatchToProps & OwnProps


const ProfileContainer: FC<ProfileContainerProps> = props => {
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    let userId = +params.userId
    if (!userId){
      userId = props.authorisedUserId
      if (!userId){
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

const mapStateToProps = (state: RootState) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorisedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})
const mapDispatchToProps = { getUserProfile, getStatus, updateProfile, updateStatus, postUserAvatar }

export default connect<IMapStateToProps, IMapDispatchToProps, OwnProps>(mapStateToProps, mapDispatchToProps)(ProfileContainer)