
import React from "react";
import logo2 from '../assets/logo2.svg'
import "./CSS/About.css";
import { Link } from 'react-router-dom'
import { Signup } from './Signup'
import { Footer } from '../components/Footer'

export const About = () => {
    return (<>

      <div class="about">
         <div class="logo">
            <img src={logo2} alt="agrimate logo"/>
                <div class="logo-name">AGRIMATE</div>
           </div>
        <div className='nav'>
      <ul className='nav-items'>
      <li>
          <Link to="/">Home</Link>
        </li>
        
        <li>About</li>
     

        
      </ul>
      </div>

     
        </div>
      
      <div class="mission">
        <h4> Our Mission </h4>
        </div>
        <div className="stress">
        <p> 
At Agrimate,our mission is to empower farmers and agriculturalists with innovative tools to enhance farm management,
 increase <br/>productivity, and sustainably grow their operations. We are committed to making farming smarter, easier, and more 
efficient.</p>


</div>
     <div className="progress">
     <h4>Meet the Team </h4>
        </div>
      <div className="check">
<p> <li>Refilwe Boammaruri </li>
<li>Joy Mwezi </li>
<li>Natalie Lecage </li>
<li>Kagelelo Kgosimpe </li>
<li>Otsebe Modirwagale </li>
<li> Goitseone Themba</li>
</p>

      </div>
      <div className="values"> 
      <h4>Our Values</h4>
      </div>
      <div className="our" style={{ marginLeft: '1em', textAlign: 'left' }}>
  <ul>
    <li>
      <span style={{ marginLeft: '-1em', marginRight: '0.5em' }}>•</span> Empowerment: We believe in empowering farmers with the information and tools they need to thrive.
    </li>
    <li>
      <span style={{ marginLeft: '-1em', marginRight: '0.5em' }}>•</span> Sustainability: Our commitment to sustainable farming practices is at the core of everything we do.
    </li>
    <li>
      <span style={{ marginLeft: '-1em', marginRight: '0.5em' }}>•</span> Innovation: We continuously innovate to stay on the cutting edge of agricultural technology.
    </li>
  </ul>
</div>




      
      <div className="customer"> 
      <h4>Customer Centric Approach</h4>
      </div>
      <div className="approach">  
      <p> 
Understanding the unique needs of farmers drives us. We are dedicated to delivering solutions that simplify farm management and improve farm profitability.</p>
      </div>

    <div className="data"> 
    <h4>Data Privacy and Security</h4>
    </div>
    <div className="security">  
      <p> 
Rest assured, we take data privacy and security seriously. Your information is safe with u.</p>
      </div>
      <div className="future"> 
    <h4>Future Plans</h4>
    </div>
    <div className="plans">  
      <p> 
      We have exciting plans for the future, including new features, expanded support, and partnerships to better serve our farming
 community. At Agrimate, we are passionate about farming, and we are committed to helping you succeed in your agricultural endeavors.
</p>
      </div>
      <div className="contact"> 
    <h4>Contact Us</h4>
    </div>
    <div className="us">  
      <p> 
      Have questions or feedback? We'd love to hear from you. Reach out to us here:<br/>
Email: agrimate@gmail.com<br/>
Phone: +267 345 1234<br/>
Address: Private Bag 124,Boseja,Palape<br/>
</p>
      </div>
      <Footer />
        
        </>);
};

