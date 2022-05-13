import classes from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = props => {

  if(!props.profile) {
    return <Preloader />
  }
  // debugger
  return (
    <div className={ classes.profileDescription }>
      <img src={ props.profile.photos.large } alt="" />
      <div>
        <span className={ classes.blueText }>Nickname: </span><span>{ props.profile.fullName }</span>
      </div>
      <ProfileStatus status={ props.status } updateStatus={ props.updateStatus } profile={ props.profile } />
    </div>
  )
}

export default ProfileInfo