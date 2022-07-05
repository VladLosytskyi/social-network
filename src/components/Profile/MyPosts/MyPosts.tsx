import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// @ts-ignore
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import MyPostsForm from './MyPostsForm'
import { addPostAC } from '../../../redux/profile-reducer'
import { getAvatarSelector, getPostsSelector } from '../../../redux/profile-selectors'


const MyPosts: FC = React.memo(() => {

  const posts = useSelector(getPostsSelector)
  const avatar = useSelector(getAvatarSelector)


  const dispatch = useDispatch()
  const addPost = values => {
    dispatch(addPostAC(values.newPostText))
  }

  const postsElements =
    [...posts]
      .reverse()
      .map(post => <Post avatar={ avatar } message={ post.message } likesCount={ post.likesCount } key={ post.id } />)

  return (
    <div className={ classes.postsBlock }>
      <h3>My posts</h3>
      <MyPostsForm onSubmit={ addPost } />
      <div className={ classes.posts }>
        { postsElements }
      </div>
    </div>
  )
})

export default MyPosts
