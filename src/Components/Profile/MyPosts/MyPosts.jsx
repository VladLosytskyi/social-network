import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = props => {
  let postsElements = props.posts.map(post => <Post message={ post.message } likesCount={ post.likesCount } />)

  let newPostElement = React.createRef()

  let onAddPost = () => {
    props.addPost()
  }

  let onPostChange = () => {
    props.updateNewPostText(newPostElement.current.value)
  }

  return (
    <div className={ classes.postsBlock }>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={ onPostChange }
            ref={ newPostElement }
            value={ props.newPostText }
            placeholder="Enter your post text..."
          />
        </div>
        <div>
          <button onClick={ onAddPost } className={ classes.blueButton }>Add post</button>
        </div>
      </div>
      <div className={ classes.posts }>
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts
