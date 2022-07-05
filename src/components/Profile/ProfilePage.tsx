import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
// @ts-ignore
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import {
  getStatusThunk,
  getUserProfileThunk,
  postUserAvatarThunk,
  updateProfileThunk,
  updateStatusThunk
} from '../../redux/profile-reducer'
import { getProfileSelector, getStatusSelector } from '../../redux/profile-selectors'
import { getAuthorisedUserIdSelector } from '../../redux/auth-selectors'
import { IProfile } from '../../types/reducers-types/profile-types'


const ProfilePage: FC = () => {

  const profile = useSelector(getProfileSelector)
  const status = useSelector(getStatusSelector)
  const authorisedUserId = useSelector(getAuthorisedUserIdSelector)


  const dispatch = useDispatch()
  const updateProfile = (profile: IProfile) => {
    dispatch(updateProfileThunk(profile))
  }
  const updateStatus = (status: string) => {
    dispatch(updateStatusThunk(status))
  }
  const postUserAvatar = (userAvatar: File) => {
    dispatch(postUserAvatarThunk(userAvatar))
  }


  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    let userId = +params.userId
    if (!userId){
      userId = authorisedUserId
      if (!userId){
        navigate('/login')
      }
    }
    dispatch(getUserProfileThunk(userId))
    dispatch(getStatusThunk(userId))
  }, [params.userId])

  return (
    <section className={ classes.profile }>
      <ProfileInfo profile={ profile }
                   status={ status }
                   updateProfile={ updateProfile }
                   updateStatus={ updateStatus }
                   postUserAvatar={ postUserAvatar }
                   isOwner={ !params.userId }
      />
      <MyPosts />
    </section>
  )
}

export default ProfilePage