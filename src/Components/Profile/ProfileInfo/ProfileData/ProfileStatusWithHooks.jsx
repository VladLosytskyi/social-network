import React, { useEffect, useState } from 'react'
import classes from '../ProfileInfo.module.css'

const ProfileStatusWithHooks = props => {

  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }

  const saveChanges = () => {
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
      { props.isOwner
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
              <span className={ classes.blueText }>Status: </span>
              <span>{ props.status || 'No status' }</span>
            </div>
            <button onClick={ activateEditMode } className={ classes.blueButton }>
              <span>Change Status</span>
            </button>
          </div>
        }</>
        : <div className={ classes.status }>
          <div>
            <span className={ classes.blueText }>Status: </span>
            <span>{ props.status || 'No status' }</span>
          </div>
        </div> }
    </div>
  )
}

export default ProfileStatusWithHooks