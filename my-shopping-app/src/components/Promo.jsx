import React from 'react';
import './Promo.css';

function Promo() {
  return (
    <div className="promo-section">
      <h2>JOIN SHOPPING COMMUNITY TO<br />GET MONTHLY PROMO</h2>
      <p>Type your email down below and be young wild generation</p>

      <div className="promo-box">
        <input type="email" placeholder="Add your email here" />
        <button>SEND</button>
      </div>
    </div>
  );
}

export default Promo;
