import React from 'react';
import styles from './heroimage.module.css';

const HeroImage = ({ image, title, text }) => {
  const bgImage = {
    backgroundImage: `url('${image}')`
  };
  return (
    <div className={styles.block} style={bgImage}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
