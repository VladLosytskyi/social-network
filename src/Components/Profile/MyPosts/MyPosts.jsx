import classes from './MyPosts.module.css'
import Post from './Post/Post'
import MyPostsForm from './MyPostsForm'

const MyPosts = props => {
  let postsElements = props.posts.map(post => <Post message={ post.message } likesCount={ post.likesCount } />)

  let addPost = values => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={ classes.postsBlock }>
      <h3>My posts</h3>
      <MyPostsForm onSubmit={ addPost } />
      <div className={ classes.posts }>
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts
