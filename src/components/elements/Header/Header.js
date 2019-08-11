import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.content}>
        <Link to='/'>
          <img
            className={styles.logo}
            src={`${process.env.PUBLIC_URL}/images/reactMovie_logo.png`}
            alt='site-logo'
          />
        </Link>
        <a
          href='https://www.themoviedb.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className={styles.tmdbLogo}
            src={`${process.env.PUBLIC_URL}/images/movie-db-logo.svg`}
            alt='tmdb-logo'
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
