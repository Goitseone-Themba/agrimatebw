import React, {useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg'
import './Navigation.css'

export const Navigation = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        // Navigate to the dashboard when the logo is clicked
        navigate('/appRouter/dashboard');
    };
    
    const location = useLocation();

    console.log(location.pathname)
    return  (
    <>
        
        <div className='Header'>
            <div className='logo-container' >
                <img className='logo' src={ logo } onClick={handleLogoClick} />
            </div>

            <div className='nav'>
                <ul className='nav-items'>
                    <li><Link to='/appRouter/dashboard' >Dashboard</Link></li>
                    <li><Link to='/appRouter/inventoryManagement'>Inventory</Link></li>
                    <li><Link to='/appRouter/animalTracking'>Animal Tracking</Link></li>
                    <li><Link to='/appRouter/cropMonitoring'>Crop Monitoring</Link></li>
                </ul>
            </div>

            <div className='button-container'>

            </div>
        </div>
    </>)
    
    // return  (<>
    //     <div className='Header' >
    //   <div className='logo-container'>
    //     <img className='logo' src={logo} alt="Agrimate logo" />
    //   </div>
      
    //   <div className='nav'>
    //   <ul className='nav-items'>
    //     <li>About</li>
    //     <li>FAQ</li>
    //     <li>Contacts</li>
    //   </ul>
    //   </div>

    //   <div className='button-container'>
    //     <Link to='/login'><button className='btn-login'>Login</button></Link>
    //     <Link to='/sign'><button className='btn-signup'>Signup</button></Link>
    //   </div>
    // </div>
    // </>)
    
}