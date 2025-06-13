import React from 'react';
import './footer.css';
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
            <li>About</li>
            <li>Contact us</li>
            <li>Support</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h4>Quick Link</h4>
          <ul>
            <li>Share Location</li>
            <li>Orders Tracking</li>
            <li>Size Guide</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div>
          <h4>Legal</h4>
          <ul>
            <li>Terms & conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
