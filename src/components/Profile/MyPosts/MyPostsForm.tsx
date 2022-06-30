import { FC } from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
// @ts-ignore
import classes from './MyPosts.module.css'
import { Textarea } from '../../common/FormsControls/FormsControls'
import { maxLengthCreator, required } from '../../../utillities/validators/validators'


const validate = [
  required,
  maxLengthCreator(50)
]

interface MyPostsFormValues {
  newPostText: string
}

interface MyPostsFormOwnProps {
}

type MyPostsFormProps = InjectedFormProps<MyPostsFormValues, MyPostsFormOwnProps> & MyPostsFormOwnProps

const MyPostsForm: FC<MyPostsFormProps> = ({ handleSubmit }) => {
  return (
    <form onSubmit={ handleSubmit }>
      <div className={ classes.newPostForm }>
        <Field component={ Textarea }
               name="newPostText"
               placeholder="Enter your post text..."
               validate={ validate } />
      </div>
      <div>
        <button className={ classes.blueButton }>Add post</button>
      </div>
    </form>
  )
}

export default reduxForm<MyPostsFormValues, MyPostsFormOwnProps>({ form: 'profileMyPostsForm' })(MyPostsForm)