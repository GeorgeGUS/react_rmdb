import React from 'react';
import { player } from './trailer.module.css';

const Trailer = ({ title, trailerURL }) => {
  return (
    <iframe
      className={player}
      title={`${title} - Official Trailer`}
      width='560'
      height='315'
      src={trailerURL}
      frameBorder='0'
      allow='accelerometer; autoplay; encrypted-media; gyroscope'
      allowFullScreen
    />
  );
};

export default Trailer;
