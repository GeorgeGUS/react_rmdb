import React from 'react';
import './HeroImage.css';

const HeroImage = ({ image, title, text }) => (
  <div
    className='rmdb-heroimage'
    style={{
      backgroundImage: `linear-gradient(to bottom, #0000 39%, #0000 41%, #000a 100%), url('${image}')`
    }}
  >
    <div className='rmdb-heroimage-content'>
      <div className='rmdb-heroimage-text'>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  </div>
);

export default HeroImage;
