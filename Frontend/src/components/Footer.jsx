import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa'; 
import './Footer.css'; 

export default function Footer() {
  return (
    <footer className="footer1">
      <div className="footer1-content">
        <div className="footer1-section contact-follow">
          <div className="contact-details">
            <h4>Contact Us</h4>
            <p style={{color:'grey',marginTop:'1rem'}}>Phone: 8688633162</p>
            <p  style={{color:'grey',marginTop:'1rem'}} >Email: campuscash@gmail.com</p>
          </div>
          <div className="social-media">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{color:'grey',marginTop:'1rem'}}>
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/harshita-pooja-ande-14b004287/" target="_blank" rel="noopener noreferrer" style={{color:'grey',marginTop:'1rem'}}>
                <FaLinkedin />
              </a> 
            </div>
          </div>
        </div>
        <div className="footer1-section help-terms">
          <div className="help">
            <h4>Help</h4>
            <ul>
              <li><a href="/help" style={{color:'grey'}}>Help Center</a></li>
              <li><a href="/faq" style={{color:'grey'}}>FAQ</a></li>
            </ul>
          </div>
          <div className="terms">
            <h4>Terms and Conditions</h4>
            <a href="/terms" style={{color:'grey',marginLeft:'20px',marginTop:'2rem'}}>Read Terms</a>
          </div>
        </div>
      </div>
      <div className="footer1-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
