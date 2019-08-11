import React from 'react';
import styles from './heroimage.module.css';

const HeroImage = ({ image, title, text }) => {
  const bgImage = {
    backgroundImage: `url('${image}')`
  };
  return (
    <div className={styles.wrapper} style={bgImage}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
