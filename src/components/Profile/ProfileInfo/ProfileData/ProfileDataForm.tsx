import { FC } from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
// @ts-ignore
import classes from '../ProfileInfo.module.css'
import { Input, Textarea } from '../../../common/FormsControls/FormsControls'
import { IContacts, IProfile } from '../../../../types/reducers-types/profile-types'

interface ProfileDataFormOwnProps {
  contacts: IContacts
  discardChanges: () => void
}

type ProfileDataFormProps = InjectedFormProps<IProfile, ProfileDataFormOwnProps> & ProfileDataFormOwnProps

const ProfileDataForm: FC<ProfileDataFormProps> = ({ contacts, discardChanges, handleSubmit, error }) => {
  return (
    <form className={ classes.profileData } onSubmit={ handleSubmit }>
      <div className={ classes.fieldsContainer }>
        <div className={ classes.fieldContainer }>
          <label htmlFor="fullName" className={ classes.blueText }>Full Name:</label>
          <Field component={ Input }
                 name="fullName"
                 id="fullName"
                 type="text"
                 placeholder="Your full name" />
        </div>
        <div className={ classes.fieldContainer }>
          <label htmlFor="aboutMe" className={ classes.blueText }>About Me:</label>
          <Field component={ Textarea }
                 name="aboutMe"
                 id="aboutMe"
                 type="text"
                 placeholder="Tell about yourself" />
        </div>
        <div className={ classes.fieldContainer }>
          <label htmlFor="lookingForAJob" className={ classes.blueText }>Looking For a Job:</label>
          <Field component={ Input }
                 name="lookingForAJob"
                 id="lookingForAJob"
                 type="checkbox" />
        </div>
        <div className={ classes.fieldContainer }>
          <label htmlFor="lookingForAJobDescription" className={ classes.blueText }>My Professional Skills:</label>
          <Field component={ Textarea }
                 name="lookingForAJobDescription"
                 id="lookingForAJobDescription"
                 type="text"
                 placeholder="Your professional skills" />
        </div>
        <div className={ classes.fieldContainer }>
          <span className={ classes.blueText }>Contacts:</span>
          { Object.keys(contacts)
            .map(key => {
              return (
                <div className={ classes.contact } key={ key }>
                  <label className={ classes.blueText }>{ key }: </label>
                  <Field component={ Input }
                         name={ `contacts.${ key }` }
                         id={ key }
                         type="url"
                         placeholder={ key } />
                </div>
              )
            }) }
        </div>
      </div>
      { error &&
        <div className={ classes.error }>
          { error }
        </div>
      }
      <div className={ classes.buttonsContainer }>
        <button className={ classes.blueButton } style={ { marginRight: '10px' } }>
          Save Changes
        </button>
        <button className={ classes.blueButton } onClick={ discardChanges }>
          Discard Changes
        </button>
      </div>
    </form>
  )
}

export default reduxForm<IProfile, ProfileDataFormOwnProps>({ form: 'editProfileData' })(ProfileDataForm)