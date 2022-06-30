import { FC } from 'react'
// @ts-ignore
import classes from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { IProfile } from '../../types/reducers-types/profile-types'

interface ProfileProps {
  profile: IProfile
  status: string
  updateProfile: (profile: IProfile) => void
  updateStatus: (status: string) => void
  postUserAvatar: (userAvatar: File) => void
  isOwner: boolean
}

const Profile: FC<ProfileProps> = props => {
  return (
    <section className={ classes.profile }>
      <ProfileInfo { ...props } />
      <MyPostsContainer />
    </section>
  )
}

export default Profile