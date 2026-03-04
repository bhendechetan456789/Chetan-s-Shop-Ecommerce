import React from 'react'
import { useNavigate } from 'react-router-dom';
import image from "../assets/fashion-girl-image.png";
import "./Adv.css";

function Adv() {
  const navigate = useNavigate();

  return (
    <section className="Advertise-shop">
      <div className="adv-shop-text">
        <h1>
          <span className="first-text">LET'S </span> <br/>
          EXPLORE <br/>
          <span className="yellow-text">UNIQUE</span> <br/>
          CLOTHES.
        </h1>
        <p>Live for Influential and Innovative fashion!</p>
        <button className="shop-btn" onClick={() => navigate('/products')}>Shop Now</button>
      </div>
      <div className="adv-image">
        <img src={image} alt="fashion-girl"/>
      </div>
    </section>
  )
};

export default Adv