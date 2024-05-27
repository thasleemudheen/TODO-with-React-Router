import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
export default function header() {
  return (
    <header>
      <Link to='/'>home</Link>
      <Link to='/about'>about</Link>
    </header>
  )
}
