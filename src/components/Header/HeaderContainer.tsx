import { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { RootState } from '../../redux/store'
import { getAuthUserData, logout } from '../../redux/auth-reducer'


interface IMapStateToProps {
  isAuth: boolean
  login: string | null
}

interface IMapDispatchToProps {
  getAuthUserData: () => void
  logout: () => void
}

interface OwnProps {}

type HeaderContainerProps = IMapStateToProps & IMapDispatchToProps & OwnProps

const HeaderContainer: FC<HeaderContainerProps> = ({ getAuthUserData, ...props }) => {
  useEffect(() => {
    getAuthUserData()
  }, [])

  return <Header { ...props } />
}

const mapStateToProps = (state: RootState) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})
const mapDispatchToProps = { getAuthUserData, logout }

export default connect<IMapStateToProps, IMapDispatchToProps>(mapStateToProps, mapDispatchToProps)(HeaderContainer)