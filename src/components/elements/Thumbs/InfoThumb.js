import React from 'react';
import { getThumbUrl } from '../../../config';
import styles from './moviethumb.module.css';

const InfoThumb = ({ alt, imagePath }) => (
  <img className={styles.image} src={getThumbUrl(imagePath)} alt={alt} />
);

export default InfoThumb;
