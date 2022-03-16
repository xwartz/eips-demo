import React from 'react'
import logo from './logo.png'
import { Link } from 'react-router-dom'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="routers">
        <Link to="/eip-3085">eip-3085</Link>
        <Link to="/eip-3326">eip-3326</Link>
      </div>
    </div>
  )
}

export default App
