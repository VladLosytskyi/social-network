import classes from './ProfileInfo.module.css'
import userAvatar from '../../../assets/images/userAvatar.png'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = ({ profile, authorisedUserId, status, updateStatus, postUserAvatar }) => {
  const onUserAvatarSelected = event => {
    if (event.target.files.length) {
      postUserAvatar(event.target.files[0])
    }
  }

  return (
    <>
      {
        !profile
          ? <Preloader />
          : <div className={ classes.profileInfo }>
            <div className={ classes.userAvatarContainer }>
              <img src={ profile.photos.large || userAvatar } className={ classes.userAvatar } alt="Profile photo" />
              { profile.userId === authorisedUserId &&
                <label className={ `${classes.setUserAvatar} ${classes.blueButton}` } onChange={ onUserAvatarSelected }>
                  <input type="file"
                         accept="image/png, image/jpg, image/gif, image/jpeg"
                         onChange={ onUserAvatarSelected } />Change Avatar
                </label> }
            </div>
            <div className={ classes.profileData }>
              <span className={ classes.blueText }>Nickname: </span><span>{ profile.fullName }</span>
              <ProfileStatusWithHooks status={ status }
                                      updateStatus={ updateStatus }
                                      userId={ profile.userId }
                                      authorisedUserId={ authorisedUserId } />
            </div>
          </div>
      }
    </>
  )
}

export default ProfileInfo