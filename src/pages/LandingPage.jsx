import React from 'react'
import logo from "../assets/logo.svg"
import "./CSS/LandingPage.css"
import { Link } from 'react-router-dom'
import { Signup } from './Signup'
import { Footer } from '../components/Footer'

export const LandingPage = () => {

  return  (<>

    <div className='Header' >
      <div className='logo-container'>
        <img className='logo' src={logo} alt="Agrimate logo" />
      </div>
      
      <div className='nav'>
      <ul className='nav-items'>
        <li>About</li>
        <li>FAQ</li>
        <li>Contacts</li>
      </ul>
      </div>

      <div className='button-container'>
        <Link to='/login'><button className='btn-login'>Login</button></Link>
        <Link to='/sign'><button className='btn-signup'>Signup</button></Link>
      </div>
    </div>
    <Footer />
  </>)
}