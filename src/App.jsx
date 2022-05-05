import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HeaderContainer from './Components/Header/HeaderContainer'
import Navbar from './Components/Navbar/Navbar'
import ProfileContainer from './Components/Profile/ProfileContainer'
import MessagesContainer from './Components/Messages/MessagesContainer'
import UsersContainer from './Components/Users/UsersContainer'
import Login from './Components/Login/Login'

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <div className="app-wrapper-main">
        <Navbar />
        <div className="app-wrapper-container">
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

export default App