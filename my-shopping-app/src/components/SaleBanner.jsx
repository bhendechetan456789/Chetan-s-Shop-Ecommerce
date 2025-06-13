import React from 'react';
// import './SaleBanner.css';
import salegirl from '../assets/sale girl.png'; 

function SaleBanner() {
  return (
    <div className="sale-banner">
      <div className="sale-left">
        <img src={salegirl} alt="Sale Girl" />
      </div>
      <div className="sale-right">
        <h1><span className="tag">PAYDAY</span><br />SALE NOW</h1>
        <p>Spend minimal $100 get 30% off<br />voucher code for your next purchase</p>
        <h3>1 June – 10 June 2021</h3>
        <p>*Terms & Conditions apply</p>
        <button>SHOP NOW</button>
      </div>
    </div>
  );
}

export default SaleBanner;
