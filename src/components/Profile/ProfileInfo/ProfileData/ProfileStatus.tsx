import { FC, useEffect, useState } from 'react'
// @ts-ignore
import classes from '../ProfileInfo.module.css'


interface ProfileStatusProps {
  initialStatus: string
  updateStatus: (status: string) => void
  isOwner: boolean
}

const ProfileStatus: FC<ProfileStatusProps> = ({ initialStatus, updateStatus, isOwner }) => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(initialStatus)

  useEffect(() => {
    setStatus(initialStatus)
  }, [initialStatus])

  const activateEditMode = () => {
    setEditMode(true)
  }

  const saveChanges = () => {
    setEditMode(false)
    updateStatus(status)
  }

  const discardChanges = () => {
    setEditMode(false)
  }

  const onStatusChange = event => {
    setStatus(event.currentTarget.value)
  }

  return (
    <div>
      { isOwner
        ? <>{ editMode
          ? <div className={ classes.status }>
            <div>
              <span className={ classes.blueText }>Status:</span>
              <input type="text"
                     onChange={ onStatusChange }
                     value={ status }
                     autoFocus={ true }
                     className={ classes.statusInput }
              />
            </div>
            <div className={ classes.buttonsContainer }>
              <button onClick={ saveChanges } className={ classes.blueButton } style={ { marginRight: '10px' } }>Save Changes</button>
              <button onClick={ discardChanges } className={ classes.blueButton }>Discard Changes</button>
            </div>
          </div>
          : <div className={ classes.status }>
            <div>
              <span className={ classes.blueText }>Status: </span>{ status || 'No status' }
            </div>
            <button onClick={ activateEditMode } className={ classes.blueButton }>
              <span>Change Status</span>
            </button>
          </div>
        }</>
        : <div className={ classes.status }>
          <div>
            <span className={ classes.blueText }>Status: </span>
            <span>{ status || 'No status' }</span>
          </div>
        </div> }
    </div>
  )
}

export default ProfileStatus