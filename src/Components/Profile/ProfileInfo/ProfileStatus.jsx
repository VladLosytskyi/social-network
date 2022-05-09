import React from 'react'

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    title: 'Yo'
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
  }

  render() {
    return (
      <div>
        { this.state.editMode
            ? <input onBlur={ this.deactivateEditMode } value={ this.props.status } autoFocus={true} />
            : <span onDoubleClick={ this.activateEditMode }>{ this.props.status }</span> }
      </div>
    )
  }
}

export default ProfileStatus