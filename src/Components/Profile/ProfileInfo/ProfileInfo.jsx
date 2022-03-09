import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div className={ classes.profileWallpaper }>
        <img src="https://wallpapercave.com/wp/wp8316481.jpg" alt="Profile wallpaper" />
      </div>
      <div className={ classes.profileDescription }>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo