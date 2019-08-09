import React from 'react';
import { getThumbUrl } from '../../../config';
import styles from './moviethumb.module.css';

const InfoThumb = ({ alt, imagePath }) => (
  <div className={styles.wrapper}>
    <img className={styles.image} src={getThumbUrl(imagePath)} alt={alt} />
  </div>
);

export default InfoThumb;
