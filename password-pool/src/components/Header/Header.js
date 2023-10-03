import React from 'react';

import logo from "../../assets/+POOL.png"
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <div className='header-wrapper'>
      <div className='header-inner'>
        <div className='header-logo'>
          <Link to="/"> 
        <img src={logo} alt='this is a logo' width="400" height="50"></img>
          
          </Link>
        </div>

        <div className='header-links'>
          <Link to="/login" className='header-login-link'><span>Login</span>  </Link>
          <Link to="/register" className='header-register-link'><span>Register</span> </Link>
        </div>

      </div>
      </div>
      
    </div>
  )
}

export default Header;
