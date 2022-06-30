import React, { FC } from 'react'
// @ts-ignore
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import MyPostsForm from './MyPostsForm'
import { IPost } from '../../../types/reducers-types/profile-types'

interface MyPostsProps {
  posts: IPost[]
  addPost: (newPostText: string) => void
}

const MyPosts: FC<MyPostsProps> = React.memo(props => {
  const postsElements =
    [...props.posts]
      .reverse()
      .map(post => <Post message={ post.message } likesCount={ post.likesCount } key={ post.id } />)

  const addPost = values => {
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
})

export default MyPosts
