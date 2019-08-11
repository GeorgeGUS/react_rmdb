import React from 'react';
import styles from './loadmorebtn.module.css';

const LoadMoreBtn = ({ text, onClick }) => (
  <div className={styles.block}>
    <button type='button' className={styles.btn} onClick={onClick}>
      {text}
    </button>
  </div>
);

export default LoadMoreBtn;
