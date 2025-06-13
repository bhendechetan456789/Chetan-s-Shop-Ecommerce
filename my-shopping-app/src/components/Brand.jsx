import React from 'react';
import hm from "../assets/hm.png";
import obey from '../assets/obey.png';
import shopify from '../assets/shopify.jpg';
import lacoste from '../assets/lacoste.png';
import levis from '../assets/Levis.jpg';
import amazon from '../assets/amazon.jpg';


function Brand() {
  return (
    <section className="brand-section">
      <div className="brand-logos">
        <img src={hm} alt="hm" className="hm-img" />
        <img src={obey} alt="obey" className="obey-img" />
        <img src={shopify} alt="shopify" className="shopify-img" />
        <img src={lacoste} alt="lacoste" className="lacoste-img" />
        <img src={levis} alt="levis" className="levis-img" />
        <img src={amazon} alt="amazon" className="amazon-img" />
      </div>
    </section>
  );
}

export default Brand;
