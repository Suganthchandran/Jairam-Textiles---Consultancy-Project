import React from 'react';
import '../styles/Footer.css';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-section footer-about">
          <img src={assets.new_logo} className="footer-logo" alt="Company Logo" />
          <p className="footer-description">
          At Diago, we bring you a seamless shopping experience with curated collections, timeless styles, and effortless luxury. From trendsetting fashion to everyday essentials, we redefine online shopping with elegance, quality, and trust.   </p>
        </div>

        <div className="footer-section">
          <p className="footer-title">COMPANY</p>
          <ul className="footer-list">
            <li>Home</li>
            <li>Shop</li>
            <li>New Arrivals</li>
            <li>Best Sellers</li>
            <li>Exclusive Deals</li>
            <li>Gift Cards</li>
            <li>LookBook</li>
          </ul>
        </div>
        

        <div className="footer-section">
          <p className="footer-title">CUSTOMER CARE</p>
          <ul className="footer-list">
            <li>Shipping & Returns</li>
            <li>Order Tracking</li>
            <li>Payment Methods</li>
            <li>Size Guide</li>
            <li>Affliate Program</li>
            <li>Report an Issue</li>
            <li>Live Chat Support</li>
          </ul>
        </div>

        <div className="footer-section">
          <p className="footer-title">GET IN TOUCH</p>
          <ul className="footer-list">
            <li>+91 9042482004</li>
            <li>suganthchandran07@gmail.com</li>
          </ul>
        </div>

        {/* <div className="footer-section footer-subscribe">
          <p className="footer-title">Subscribe Here</p>
          <form className="subscribe-form">
            <input type="text" placeholder="Enter your email..." className="subscribe-input" />
            <input type="submit" value="Submit" className="subscribe-button" />
          </form>
        </div> */}
      </div>
      <div>
        <hr/>
        <p className='footer-copyrights'>Copyright 2025@ Diago.com - All Right Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
