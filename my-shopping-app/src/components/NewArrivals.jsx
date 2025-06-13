import React from 'react';
import hoodie from '../assets/hoodie.png';
import coat from '../assets/coat.png';
import tshirt from '../assets/T-shirt.png';
import './NewArrivals.css';

function NewArrivals() {
  return (
    <div className="arrivals">
      <h2>New Arrivals</h2>

      <div className="items">
        <div className="card">
          <img src={hoodie} alt="Hoodie" />
          <p>Hoodies & Sweatshirt</p>
          <span>Explore Now!</span>
        </div>

        <div className="card">
          <img src={coat} alt="Coat" />
          <p>Coats & Parkas</p>
          <span>Explore Now!</span>
        </div>

        <div className="card">
          <img src={tshirt} alt="T-Shirt" />
          <p>Tees & T-Shirt</p>
          <span>Explore Now!</span>
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;
