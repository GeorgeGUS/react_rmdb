import React from 'react';
import styles from './rating.module.css';

const Rating = ({ value }) => {
  return (
    <div className={styles.block}>
      <meter
        className={styles.scale}
        min='0'
        max='100'
        optimum='100'
        low='40'
        high='70'
        value={value * 10}
      />
      <p className={styles.value}>{value}</p>
    </div>
  );
};

export default Rating;
