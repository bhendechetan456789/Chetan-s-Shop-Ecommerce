import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2>FASHION</h2>
        <p>Complete your style with awesome clothes from us.</p>
        <div className="social-icons">
          <span><FaFacebookF /></span>
          <span><FaInstagram /></span>
          <span><FaTwitter /></span>
          <span><FaLinkedinIn /></span>
        </div>
      </div>

      <div className="footer-links">
        <div>
          <h4>Company</h4>
          <ul>
             <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li><Link to="/home">Support</Link></li>
            <li><Link to="/home">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4>Quick Link</h4>
          <ul>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/cart">Orders Tracking</Link></li>
            <li><Link to="/category">Categories</Link></li>
            <li><Link to="/products">FAQs</Link></li>
          </ul>
        </div>

        <div>
          <h4>Legal</h4>
          <ul>
            <li><Link to="/home">Terms & conditions</Link></li>
            <li><Link to="/home">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;