import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
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
            <Route path="/"
                   element={ <Profile /> }
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