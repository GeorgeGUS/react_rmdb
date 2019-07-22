import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className='rmdb-header'>
      <div className='rmdb-header-content rmdb-container'>
        <Link to='/'>
          <img
            className='rmdb-logo'
            src={`${process.env.PUBLIC_URL}/images/reactMovie_logo.png`}
            alt='rmdb-logo'
          />
        </Link>
        <a
          href='https://www.themoviedb.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className='rmdb-tmdb-logo'
            src={`${process.env.PUBLIC_URL}/images/movie-db-logo.svg`}
            alt='tmdb-logo'
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
