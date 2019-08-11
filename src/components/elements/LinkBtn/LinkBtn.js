import React from 'react';
import styles from './linkbtn.module.css';

const LinkBtn = ({ children, onClick }) => {
  return (
    <button type='button' className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default LinkBtn;
