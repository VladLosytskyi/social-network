import { ComponentType, FC } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootState } from '../redux/store'


interface IMapStateToProps {
  isAuth: boolean
}

const mapStateToProps = (state: RootState) => ({
  isAuth: state.auth.isAuth
})

export function withAuthRedirect<CP>(Component: ComponentType<CP>) {
  const RedirectComponent: FC<IMapStateToProps> = ({ isAuth, ...props }) => {
    return isAuth
      ? <Component { ...props as CP } />
      : <Navigate to="/login" />
  }
  return connect<IMapStateToProps>(mapStateToProps)(RedirectComponent)
}
