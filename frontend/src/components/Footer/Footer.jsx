import React from 'react'
import './Footer.css';
import { assets } from '../../assets/food images/asset';
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <img src={assets.logo} alt="logo" className="logo"></img>
        <div className="footer-content">
            
            <div className="footer-left">
                
                <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2025 © FOODZONE™ Ltd. All rights reserved.</p>
                <div className="footer-social-icons">
                  <div className='ibox'><FaFacebookSquare /></div>
                  <div className="ibox"><FaInstagramSquare /></div>
                  <div className="ibox"><FaTwitter /></div>
                  <div className="ibox"><FaLinkedin /></div>
                </div>
            </div>
            <div className="footer-center">
              <h3>COMPANY</h3>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="footer-right">
              <h3>GET IN TOUCH</h3>
              <ul>
                <li>Contact Us</li>
                <li>+1-213-456-7890</li>
              </ul>
            </div>
            
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2025 © FOODZONE.com</p>
    </div>
  )
}

export default Footer;