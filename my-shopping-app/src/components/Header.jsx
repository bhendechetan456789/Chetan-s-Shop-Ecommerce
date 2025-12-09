import React from "react";
import { Link } from "react-router-dom"; 
import "./Header.css";
import "./Adv.css";
import "./Brand.css";
import "./NewArrivals.css";
import "./SaleBanner.css";
import "./young.css";
import "./Promo.css";
import "./Footer.css";
import "../pages/ApiCalling.css";
import "../pages/ProductDetail.css"
import logo from "../assets/Vector.png";

function Header() {
  return (
    <header className="header">
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo-img" />
        <span className="logo-text">FASHION</span>
      </div>

      <nav className="nav-links">
        <Link to="/home">HOME</Link>
        <Link to="/products">PRODUCTS</Link>
        <Link to="#">CATEGORY</Link>
        <Link to="#">CART</Link>
      </nav>

      <button className="signup-btn">SIGN UP</button>
    </header>
  );
}

export default Header;
