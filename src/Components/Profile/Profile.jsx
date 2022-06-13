import classes from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = ({ profile, status, updateStatus }) => {
  return (
    <section className={ classes.profile }>
      <ProfileInfo profile={ profile } status={ status } updateStatus={ updateStatus } />
      <MyPostsContainer />
    </section>
  )
}

export default Profile