import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="routers">
        <Link to="/eip-3085">eip-3085</Link>
        <Link to="/eip-3326">eip-3326</Link>
        <Link to="/eth-approve">eth-approve</Link>
        <Link to="/tron-approve">tron-approve</Link>
      </div>
    </div>
  )
}

export default App
