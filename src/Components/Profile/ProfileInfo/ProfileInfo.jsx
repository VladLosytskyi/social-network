import classes from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = props => {
  return (
    <>
      {
        !props.profile
        ? <Preloader />
        : <div className={ classes.profileDescription }>
            <img src={ props.profile.photos.large } alt="" />
            <div>
              <span className={ classes.blueText }>Nickname: </span><span>{ props.profile.fullName }</span>
            </div>
            <ProfileStatusWithHooks status={ props.status } updateStatus={ props.updateStatus } profile={ props.profile } />
          </div>
      }
    </>
  )
}

export default ProfileInfo