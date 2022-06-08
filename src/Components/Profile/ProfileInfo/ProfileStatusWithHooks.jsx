import React, { useEffect, useState } from 'react'
import classes from './ProfileInfo.module.css'

const ProfileStatusWithHooks = props => {
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const discardChanges = () => {
    setEditMode(false)
  }

  const onStatusChange = event => {
    setStatus(event.currentTarget.value)
  }

  return (
    <div>
      { editMode
        ? <div className={ classes.status }>
          <div>
            <span className={ classes.blueText }>Status:</span>
            <input onChange={ onStatusChange }
                   value={ status }
                   autoFocus={ true }
                   className={ classes.statusInput }
            />
          </div>
          <div>
            <button onClick={ deactivateEditMode } className={ classes.blueButton }>Save Changes</button>
            <button onClick={ discardChanges } className={ classes.blueButton }>Discard Changes</button>
          </div>
        </div>
        : <div className={ classes.status }>
          <div>
            <span className={ classes.blueText }>Status: </span>
            <span>{ props.status || 'No status' }</span>
          </div>
          <button onClick={ activateEditMode } className={ classes.blueButton }>
            Change Status
          </button>
        </div>
      }
    </div>
  )

}

export default ProfileStatusWithHooks