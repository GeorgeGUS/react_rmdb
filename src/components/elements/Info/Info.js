import React from 'react';
import { InfoThumb } from '../Thumbs';
import styles from './info.module.css';

export const Section = ({ title, children }) =>
  children && (
    <div className={styles.section}>
      <h2 className={styles.subtitle}>{title}</h2>
      {typeof children === 'string' ? <p>{children}</p> : children}
    </div>
  );

export const Footer = ({ children }) => (
  <div className={styles.footer}>{children}</div>
);

const Info = ({ style, thumb, title, children }) => (
  <div className={styles.block} style={style}>
    <div className={styles.content}>
      <div className={styles.thumb}>
        <InfoThumb imagePath={thumb} alt={title} />
      </div>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        {children}
      </div>
    </div>
  </div>
);

export default Info;
