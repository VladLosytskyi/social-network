import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import Messages from './Components/Messages/Messages'
import { Routes, Route } from 'react-router-dom'

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-wrapper-main">
        <Navbar />
        <div className="app-wrapper-container">
          <Routes>
            <Route path="/"
                   element={ <Profile profilePage={ props.state.profilePage } dispatch={ props.dispatch } /> }
            />
            <Route path="/messages/*"
                   element={ <Messages store={ props.store } /> }
            />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App