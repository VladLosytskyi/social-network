import classes from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = ({ profile, authorisedUserId, status, updateStatus, postUserAvatar }) => {
  return (
    <section className={ classes.profile }>
      <ProfileInfo profile={ profile }
                   authorisedUserId={ authorisedUserId }
                   status={ status }
                   updateStatus={ updateStatus }
                   postUserAvatar={ postUserAvatar }/>
      <MyPostsContainer />
    </section>
  )
}

export default Profile