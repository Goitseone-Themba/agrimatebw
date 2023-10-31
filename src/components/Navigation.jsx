import React, {useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'
import './Navigation.css'

export const Navigation = () => {

    return  (<>
        <div className='Header'>
            <div className='logo-container'>
                <img className='logo' src={ logo } />
            </div>

            <div className='nav'>
                <ul className='nav-items'>
                    <li><Link to='/dashboard' >Dashboard</Link></li>
                    <li><Link to='/inventoryManagement'>Inventory</Link></li>
                    <li><Link to='/animalTracking'>Animal Tracking</Link></li>
                    <li><Link to=' cropMonitoring'>Crop Monitoring</Link></li>
                </ul>
            </div>

            <div className='button-container'>

            </div>
        </div>
    </>)
}