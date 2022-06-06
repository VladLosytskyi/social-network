import React from 'react'
import { compose } from 'redux'
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom'
import classes from './App.module.css'
import HeaderContainer from './Components/Header/HeaderContainer'
import Navbar from './Components/Navbar/Navbar'
import ProfileContainer from './Components/Profile/ProfileContainer'
import MessagesContainer from './Components/Messages/MessagesContainer'
import UsersContainer from './Components/Users/UsersContainer'
import Login from './Components/Login/Login'
import Preloader from './Components/common/Preloader/Preloader'
import { connect } from 'react-redux'
import { initializeApp } from './redux/app-reducer'

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if(!this.props.initialized){
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
            <Routes>
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
          </div>
        </div>
      </div>
    )
  }
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    )
  }
  return ComponentWithRouterProp
}

const mapStateToProps = state => ({
  initialized: state.app.initialized
})
const mapDispatchToProps = { initializeApp }

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(App)