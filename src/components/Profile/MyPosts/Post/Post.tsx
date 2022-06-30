import { FC } from 'react'
// @ts-ignore
import classes from './Post.module.css'

interface PostProps {
  message: string
  likesCount: number
}

const Post: FC<PostProps> = ({ message, likesCount }) => {
  return (
    <div className={ classes.post }>
      <img
        className={ classes.profileImage }
        src="https://cdn-icons-png.flaticon.com/512/1464/1464795.png"
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