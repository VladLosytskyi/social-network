import { FC } from 'react'
// @ts-ignore
import classes from './Post.module.css'
// @ts-ignore
import userAvatar from '../../../../assets/images/userAvatar.png'
import { IAvatar } from '../../../../types/reducers-types/profile-types'

interface PostProps {
  avatar: undefined | null | IAvatar
  message: string
  likesCount: number
}

const Post: FC<PostProps> = ({ avatar, message, likesCount }) => {
  debugger
  return (
    <div className={ classes.post }>
      <img
        className={ classes.profileImage }
        src={ avatar ? avatar.small : userAvatar }
        alt="Profile avatar"
      />
      <div>
        <div className={ classes.postText }>
          { message }
        </div>
        <div className={ classes.likes }>
          { likesCount }<span> likes</span>
        </div>
      </div>
    </div>
  )
}

export default Post