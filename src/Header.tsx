import React from 'react'
import {Link} from "react-router-dom"
import './App.css'

const Header = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/myorders">My Orders</Link>
        <Link to="/blog">Blog</Link>
    </nav>
  )
}

export default Header
