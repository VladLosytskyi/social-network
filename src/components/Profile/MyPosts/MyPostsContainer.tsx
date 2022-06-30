import { connect } from 'react-redux'
import MyPosts from './MyPosts'
import { RootState } from '../../../redux/store'
import { addPost } from '../../../redux/profile-reducer'
import { IPost } from '../../../types/reducers-types/profile-types'

interface IMapStateToProps {
  posts: IPost[]
}

interface IMapDispatchToProps {
  addPost: (newPostText: string) => void
}

const mapStateToProps = (state: RootState) => ({
  posts: state.profilePage.posts
})
const mapDispatchToProps = { addPost }

export default connect<IMapStateToProps, IMapDispatchToProps>(mapStateToProps, mapDispatchToProps)(MyPosts)
