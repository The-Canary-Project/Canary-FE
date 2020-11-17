import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
  const userRole = useSelector(state => state.userRole)

  

  return (
    <div>
      <img src="src/assets/canary-blk-blue-no-txt.png" alt="canary black and blue logo" height="70px" width="150" />
      <nav>
        <li><Link to={`/${userRole}`}>Dashboard</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/">Logout</Link></li>
      </nav>
    </div>
  )
}
