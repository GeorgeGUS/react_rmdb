import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './infobar.module.css';

export const Item = ({ icon, children }) => (
  <li className={styles.item}>
    <FontAwesomeIcon icon={icon} size='2x' />
    <span className={styles.text}>{children}</span>
  </li>
);

const InfoBar = ({ children }) => (
  <div className={styles.wrapper}>
    <ul className={`${styles.list} rmdb-container`}>{children}</ul>
  </div>
);

export default InfoBar;
