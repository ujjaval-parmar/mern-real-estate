import React, { useContext, useState } from 'react'
import './navbar.scss';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {

  const [showNav, setShowNav] = useState(false);

  const { currentUser } = useContext(AuthContext);

  return (
    <nav>

      <div className="left">
        <Link to="/" className='logo'>
          <img src="./logo.png" alt="logo" />
          <span>Real-Estate</span>
        </Link>
        <Link to="/">Home</Link>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>

      <div className="right">
        {currentUser ? (<div className='user'>
            <img src={currentUser.avatar || './noavatar.jpg'} alt="user" />
            <span>{currentUser.username}</span>
            <Link to='/profile' className='profileBtn'><div className="notification">3</div>
            <span>Profile</span>
            </Link>
        </div>) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register" className='register'>Sign up</Link>
          </>
        )}

        <div className="menuIcon" onClick={() => setShowNav(!showNav)}>
          <img src="./menu.png" alt="menu" />
        </div>

        <div className={`menu ${showNav ? 'showNav' : ''}`}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign In</a>
          <a href="/">Sign Up</a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar