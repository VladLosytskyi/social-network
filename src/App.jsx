import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import ProfileContainer from './Components/Profile/ProfileContainer'
import MessagesContainer from './Components/Messages/MessagesContainer'
import UsersContainer from './Components/Users/UsersContainer'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-wrapper-main">
        <Navbar />
        <div className="app-wrapper-container">
          <Routes>
            <Route path="/profile/*"
                   element={ <ProfileContainer /> }
            />
            <Route path="/messages/*"
                   element={ <MessagesContainer /> }
            />
            <Route path="/users/"
                   element={ <UsersContainer /> }
            />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App