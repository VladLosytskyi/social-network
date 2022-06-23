import React from 'react'
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToPropsForRedirect = state => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = Component => {
  const RedirectComponent = props => {
    return (
      <>{ props.isAuth ? <Component { ...props } /> :<Navigate to="/login" /> }</>
    )
  }
  return connect(mapStateToPropsForRedirect)(RedirectComponent)
}
