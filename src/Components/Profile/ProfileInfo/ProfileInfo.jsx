import { useState } from 'react'
import classes from './ProfileInfo.module.css'
import userAvatar from '../../../assets/images/userAvatar.png'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from './ProfileData/ProfileStatus'
import ProfileData from './ProfileData/ProfileData'
import ProfileDataForm from './ProfileData/ProfileDataForm'

const ProfileInfo = ({ profile, status, updateProfile, updateStatus, postUserAvatar, isOwner }) => {

  const [editMode, setEditMode] = useState(false)

  const onUserAvatarSelected = event => {
    if (event.target.files.length) {
      postUserAvatar(event.target.files[0])
    }
  }

  const onSubmit = formData => {
    updateProfile(formData).then(() => {
      setEditMode(false)
    })
  }

  return (
    <>
      {
        !profile
          ? <Preloader />
          : <div className={ classes.profileInfo }>
            <div className={ classes.userAvatarContainer }>
              <img src={ profile.photos.large || userAvatar } className={ classes.userAvatar } alt="Profile photo" />
              { isOwner &&
                <label className={ `${ classes.setUserAvatar } ${ classes.blueButton }` }>
                  <input type="file"
                         accept="image/png, image/jpg, image/gif, image/jpeg"
                         onChange={ onUserAvatarSelected } />
                  <span>Change Avatar</span>
                </label> }
            </div>
            <ProfileStatus status={ status }
                           updateStatus={ updateStatus }
                           isOwner={ isOwner } />
            { editMode
              ? <ProfileDataForm initialValues={ profile }
                                 contacts={ profile.contacts }
                                 discardChanges={ () => setEditMode(false) }
                                 onSubmit={ onSubmit } />
              : <ProfileData profile={ profile }
                             isOwner={ isOwner }
                             activateEditMode={ () => setEditMode(true) } />
            }
          </div>
      }
    </>
  )
}


export default ProfileInfo