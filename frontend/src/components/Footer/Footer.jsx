import React from 'react'
import './Footer.css';
import { assets } from '../../assets/food images/asset';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-content">
            <div className="footer-left">
                <img src={assets.logo} alt="logo" className="logo"></img>
                <p>About FOODZONE </p>
                <ul>
                    <li>Who We Are</li>
                    <li>Blog</li>
                    <li>Work With Us</li>
                    <li>Investor Relations</li>
                    <li>Report Fraud</li>
                    <li>Contact Us</li>
                    
                </ul>
                <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2025 © FOODZONE™ Ltd. All rights reserved.</p>
            </div>
            <div className="footer-center"></div>
            <div className="footer-right"></div>
        </div>
    </div>
  )
}

export default Footer;