import classes from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = ({ profile, status, updateStatus }) => {
  return (
    <>
      {
        !profile
        ? <Preloader />
        : <div className={ classes.profileDescription }>
            <img src={ profile.photos.large } alt="Profile photo" />
            <div>
              <span className={ classes.blueText }>Nickname: </span><span>{ profile.fullName }</span>
            </div>
            <ProfileStatusWithHooks status={ status } updateStatus={ updateStatus } profile={ profile } />
          </div>
      }
    </>
  )
}

export default ProfileInfo