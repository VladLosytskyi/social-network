import classes from '../ProfileInfo.module.css'

const ProfileData = ({ profile, isOwner, activateEditMode }) => {
  return (
    <div className={ classes.profileData }>
      <div className={ classes.fieldsContainer }>
        <div>
          <span className={ `${ classes.blueText } ${ classes.mr5 }` }>Full Name:</span>{ profile.fullName }
        </div>
        <div>
          <span className={ `${ classes.blueText } ${ classes.mr5 }` }>About Me:</span>
          { profile.aboutMe || 'No info' }
        </div>
        <div>
          <span className={ `${ classes.blueText } ${ classes.mr5 }` }>Looking for a job:</span>
          { profile.lookingForAJob ? 'Yes' : 'No' }
        </div>
        { profile.lookingForAJob &&
          <div>
            <span className={ `${ classes.blueText } ${ classes.mr5 }` }>My Professional Skills:</span>
            { profile.lookingForAJobDescription || 'No Skills' }
          </div> }
        <div>
          <span className={ classes.blueText }>Contacts:</span>
          { Object.keys(profile.contacts)
            .filter(key => profile.contacts[key])
            .map(key => {
              return (
                <div className={ classes.contact } key={ key }>
                  <a href={ profile.contacts[key] } target="_blank">{ key }</a>
                </div>
              )
            }) }
        </div>
      </div>
      { isOwner &&
        <div className={ classes.buttonsContainer }>
          <button className={ classes.blueButton } onClick={ activateEditMode }>Edit Info</button>
        </div>
      }
    </div>
  )
}

export default ProfileData