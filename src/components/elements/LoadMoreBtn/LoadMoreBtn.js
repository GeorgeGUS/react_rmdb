import React from 'react';
import styles from './loadmorebtn.module.css';

const LoadMoreBtn = ({ text, onClick }) => (
  <div className={styles.wrapper}>
    <button type='button' className={styles.btn} onClick={() => onClick(true)}>
      {text}
    </button>
  </div>
);

export default LoadMoreBtn;
