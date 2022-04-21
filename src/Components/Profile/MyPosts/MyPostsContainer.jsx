import MyPosts from './MyPosts'
import { addPost, updateNewPostText } from '../../../redux/profile-reducer'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = { updateNewPostText, addPost }

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)
