import React from 'react';
import Insta from '../assets/insta.png';
import under from '../assets/under.png';
import './young.css';

function Young() {
  return (
    <div className="youngs">
      <h2>Young’s Favourite</h2>
      <div className="youngs-cards">
        <div className="young-card">
          <img src={Insta} alt="Trending on Instagram" className="young-img" />
          <div className="young-footer">
            <div>
              <p className="young-title">Trending on instagram</p>
              <p className="young-sub">Explore Now!</p>
            </div>
            <span className="arrow">→</span>
          </div>
        </div>

        <div className="young-card">
          <img src={under} alt="All Under $40" className="young-img" />
          <div className="young-footer">
            <div>
              <p className="young-title">All Under $40</p>
              <p className="young-sub">Explore Now!</p>
            </div>
            <span className="arrow">→</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Young;
