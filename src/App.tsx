import React, { FC, useEffect, Suspense } from 'react'
import { connect } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
// @ts-ignore
import classes from './App.module.css'
import HeaderContainer from './components/Header/HeaderContainer'
import Navbar from './components/Navbar/Navbar'
import UsersPage from './components/Users/UsersPage'
import Login from './components/Login/Login'
import Preloader from './components/common/Preloader/Preloader'
import Welcome from './components/Welcome/Welcome'
import { RootState } from './redux/store'
import { initializeApp } from './redux/app-reducer'


const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const MessagesContainer = React.lazy(() => import('./components/Messages/MessagesContainer'))


interface IMapStateToProps {
  initialized: boolean
}
interface IMapDispatchToProps {
  initializeApp: () => void
}
type AppProps = IMapStateToProps & IMapDispatchToProps


const App: FC<AppProps> = ({ initializeApp, initialized }) => {

  useEffect(() => {
    initializeApp()
    window.addEventListener('unhandledrejection', promiseRejectionEvent => alert(promiseRejectionEvent))
    return () => {
      window.removeEventListener('unhandledrejection', promiseRejectionEvent => alert(promiseRejectionEvent))
    }
  }, [])

  if (!initialized){
    return (
      <div className={ classes.preloaderContainer }>
        <Preloader />
      </div>
    )
  }

  return (
    <div className={ classes.appWrapper }>
      <HeaderContainer />
      <div className={ classes.appWrapperMain }>
        <Navbar />
        <div className={ classes.appWrapperContainer }>
          <Suspense fallback={ <Preloader /> }>
            <Routes>
              <Route path="/"
                     element={ <Welcome /> }
              />
              <Route path="/profile"
                     element={ <ProfileContainer /> }
              />
              <Route path="/profile/:userId"
                     element={ <ProfileContainer /> }
              />
              <Route path="/messages/*"
                     element={ <MessagesContainer /> }
              />
              <Route path="/users/"
                     element={ <UsersPage /> }
              />
              <Route path="/login"
                     element={ <Login /> }
              />
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = (state: RootState) => ({
  initialized: state.app.initialized
})
const mapDispatchToProps = { initializeApp }


export default connect<IMapStateToProps, IMapDispatchToProps>(mapStateToProps, mapDispatchToProps)(App)