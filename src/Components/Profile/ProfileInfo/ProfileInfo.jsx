import classes from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'

const ProfileInfo = props => {

  if(!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className={ classes.profileWallpaper }>
        <img src="https://wallpapercave.com/wp/wp8316481.jpg" alt="Profile wallpaper" />
      </div>
      <div className={ classes.profileDescription }>
        <img src={ props.profile.photos.large } alt="" />

      </div>
    </div>
  )
}

export default ProfileInfo