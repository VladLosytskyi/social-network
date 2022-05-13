import React from 'react'
import classes from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status)
  }

  discardChanges = () => {
    this.setState({
      editMode: false
    })
  }

  onStatusChange = event => {
    this.setState({
      status: event.currentTarget.value
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <div>
        { this.state.editMode
            ? <div className={ classes.status }>
                <div>
                  <span className={ classes.blueText }>Status: </span>
                  <input onChange={ this.onStatusChange }
                       value={ this.state.status }
                       autoFocus={ true }
                       className={ classes.statusInput }
                  />
                </div>
                <div>
                  <button onClick={ this.deactivateEditMode } className={ classes.blueButton }>Save Changes</button>
                  <button onClick={ this.discardChanges } className={ classes.blueButton }>Discard Changes</button>
                </div>
              </div>
            : <div className={ classes.status }>
                <div>
                  <span className={ classes.blueText }>Status: </span>
                  <span>{ this.props.status || 'No status' }</span>
                </div>
                { this.props.profile.userId === 23367
                  ? <button onClick={ this.activateEditMode } className={ classes.blueButton }>
                      Change Status
                    </button>
                  : <></>
                }
              </div>
        }
      </div>
    )
  }
}

export default ProfileStatus