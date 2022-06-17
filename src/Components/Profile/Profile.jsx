import classes from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = ({ profile, status, updateProfile, updateStatus, postUserAvatar, isOwner }) => {
  return (
    <section className={ classes.profile }>
      <ProfileInfo profile={ profile }
                   status={ status }
                   updateProfile={ updateProfile }
                   updateStatus={ updateStatus }
                   postUserAvatar={ postUserAvatar }
                   isOwner={ isOwner }/>
      <MyPostsContainer />
    </section>
  )
}

export default Profile