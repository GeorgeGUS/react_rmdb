import React from 'react';
import './HeroImage.css';

const HeroImage = ({ image, title, text }) => (
  <div
    className='rmdb-heroimage'
    style={{
      backgroundImage: `linear-gradient(#0000 40%, #000a), url('${image}')`
    }}
  >
    <div className='rmdb-heroimage-content rmdb-container'>
      <div className='rmdb-heroimage-text'>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  </div>
);

export default HeroImage;
