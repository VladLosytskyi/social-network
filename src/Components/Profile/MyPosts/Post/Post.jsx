import classes from './Post.module.css'

const Post = props => {
  return (
    <div className={ classes.post }>
      <img
        className={ classes.profileImage }
        src="https://cdn-icons-png.flaticon.com/512/1464/1464795.png"
        alt="Profile avatar"
      />
      <div>
        <div className={ classes.postText }>
          { props.message }
        </div>
        <div className={ classes.likes }>
          { props.likesCount }<span> likes</span>
        </div>
      </div>
    </div>
  )
}

export default Post