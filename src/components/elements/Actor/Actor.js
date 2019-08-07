import React from 'react';
import { Link } from 'react-router-dom';
import { getProfileUrl } from '../../../config';
import styles from './actor.module.css';

const Actor = ({ actor }) => (
  <div className={styles.card}>
    <Link to={`/actor/${actor.id}`} className={styles.image}>
      <img src={getProfileUrl(actor.profile_path)} alt={actor.name} />
    </Link>
    <div className={styles.info}>
      <Link to={`/actor/${actor.id}`} className={styles.link}>
        <p className={styles.name}>{actor.name}</p>
      </Link>
      <p className={styles.character}>{actor.character}</p>
    </div>
  </div>
);

export default Actor;
