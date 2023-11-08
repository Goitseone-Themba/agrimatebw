import React from 'react'
import logo from "../assets/logo.svg"
import "./CSS/LandingPage.css"
import { Link } from 'react-router-dom'
import { Signup } from './Signup'
import { Footer } from '../components/Footer'
import tractor from '../assets/tractor.png';

export const LandingPage = () => {

  return  (<>

    <div className='Header' >
      <div className='logo-container'>
        <img className='logo' src={logo} alt="Agrimate logo" />
      </div>
      <div className="nav">
      <ul className="nav-items">
        <li>
          <Link to="/about">About</Link>
        </li>
       
      </ul>
    </div>

      <div className='button-container'>
        <Link to='/login'><button className='btn-login'>Login</button></Link>
        <Link to='/sign'><button className='btn-signup'>Signup</button></Link>
      </div>
    </div>

    <h1>Manage your farm from <br/>anywhere in the world</h1><br/>
    
    <div style={{ position: 'relative' }}>
  <img src={tractor} alt="tractor" style={{ width: '100%' }} />
  <div style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
   color: 'white',
   fontSize:'30px',
    padding: '10px',
    borderRadius: '5px',
  }}>
    Farming  made simple,yields made bountiful
  </div>
</div><br/>

<div>
  <h2>What is Agrimate?</h2><br/>
  <p>Agrimate is a farm management application that helps farmers to understand how well their operations are running and what improvements need to be <br/>made.The application provides  farmers with a central location to store and access their farm data including  tracking their inventory,crops and<br/> animals. The application also provide farmers with a variety  of tools to help them analyze their data and make better decisions about their <br/>operations.</p>
</div><br/><br/><br/>

    <Footer />
  </>)
}
