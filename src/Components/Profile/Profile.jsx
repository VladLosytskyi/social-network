import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = props => {

  return (
    <section className={ classes.profile }>
      <ProfileInfo />
      <MyPosts
        posts={ props.profilePage.posts }
        newPostText={ props.profilePage.newPostText }
        dispatch={ props.dispatch }
      />
    </section>
  )
}

export default Profile