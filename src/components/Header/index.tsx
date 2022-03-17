import React from 'react'
import logo from '../../logo.png'
import './style.css'

const Header: React.FC<unknown> = () => {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="logo" />
    </header>
  )
}

export default Header
