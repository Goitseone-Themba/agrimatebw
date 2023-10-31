import React, {useRef, useState } from 'react';
import './Footer.css'

export const Footer = () => {

  const handleEmailClick = () => {
    const email = 'agrimatebw@gmail.com';
    window.open(`mailto:${email}`, '_blank');
  };

    return  (<>
        <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Copyright © 2023 Agrimate</h3>
          <p>All rights reserved.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Information</h3>
          <p className='email' onClick={handleEmailClick}>Email: agrimatebw@gmail.com</p>
          <p>Phone: +267 77 684 955</p>
          <p>Address: Private Bag 124, Boseja, Palapye</p>
        </div>
      </div>
    </footer>
    </>)
  }