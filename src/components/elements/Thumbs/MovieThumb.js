import React from 'react';
import { getThumbUrl } from '../../../config';
import { Link } from 'react-router-dom';
import styles from './moviethumb.module.css';

const MovieThumb = ({ movie }) => {
  const { id, title, poster_path, character, release_date } = movie;
  const year = release_date && new Date(release_date).getFullYear();
  return (
    <Link to={`/movie/${id}`} className={styles.block}>
      <img
        className={styles.image}
        src={getThumbUrl(poster_path)}
        alt={title}
      />
      <p className={styles.title}>
        “{title}”{year ? `, ${year}` : ''}
        {character && <span className={styles.character}>{character}</span>}
      </p>
    </Link>
  );
};

export default MovieThumb;
