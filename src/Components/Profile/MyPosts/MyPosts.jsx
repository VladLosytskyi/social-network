import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'


const MyPosts = props => {
  let postsElements =
    props.posts.map(post => <Post message={ post.message } likesCount={ post.likesCount } />)

  let newPostElement = React.createRef()

  let addPost = () => {
    props.dispatch(addPostActionCreator())
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    let action = updateNewPostTextActionCreator(text)
    props.dispatch(action)
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
          <button onClick={ addPost } className={ classes.button }>Add post</button>
        </div>
      </div>
      <div className={ classes.posts }>
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts
