import React, { useEffect, Suspense } from 'react'
import { compose } from 'redux'
import { connect, Provider } from 'react-redux'
import { HashRouter, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom'
import store from './redux/redux-store'
import classes from './App.module.css'
import HeaderContainer from './Components/Header/HeaderContainer'
import Navbar from './Components/Navbar/Navbar'
import UsersContainer from './Components/Users/UsersContainer'
import Login from './Components/Login/Login'
import Preloader from './Components/common/Preloader/Preloader'
import { initializeApp } from './redux/app-reducer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import Welcome from './Components/Welcome/Welcome'

library.add(faArrowLeftLong, faArrowRightLong)

const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'))
const MessagesContainer = React.lazy(() => import('./Components/Messages/MessagesContainer'))

const App = ({ initializeApp, initialized }) => {

  useEffect(() => {
    initializeApp()
  }, [])

  if (!initialized) {
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
                     element={ <UsersContainer /> }
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

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()
    return (
      <Component
        { ...props }
        router={ { location, navigate, params } }
      />
    )
  }

  return ComponentWithRouterProp
}

const mapStateToProps = state => ({
  initialized: state.app.initialized
})
const mapDispatchToProps = { initializeApp }

const AppWithRouter = compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(App)

const AppContainer = () => {
  return (
    <HashRouter>
      <Provider store={ store }>
        <AppWithRouter />
      </Provider>
    </HashRouter>
  )
}

export default AppContainer
