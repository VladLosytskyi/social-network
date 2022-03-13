import classes from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {

  return (
    <section className={ classes.profile }>
      <ProfileInfo />
      <MyPostsContainer />
    </section>
  )
}

export default Profile