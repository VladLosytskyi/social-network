import classes from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = props => {

  return (
    <section className={ classes.profile }>
      <ProfileInfo profile={ props.profile } status={ props.status } updateStatus={ props.updateStatus } />
      <MyPostsContainer />
    </section>
  )
}

export default Profile