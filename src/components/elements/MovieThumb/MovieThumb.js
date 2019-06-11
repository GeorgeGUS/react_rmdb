import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MovieThumb.css';

const MovieThumb = ({ clickable, image, title, year, movieId }) => {
  return (
    <div className='rmdb-moviethumb'>
      {clickable ? (
        <Link to={`/movie/${movieId}`}>
          <img src={image} alt='moviethumb' />
          <p className='rmdb-moviethumb-title'>
            “{title}”{year ? `, ${year}` : ''}
          </p>
        </Link>
      ) : (
        <img src={image} alt='moviethumb' />
      )}
    </div>
  );
};

MovieThumb.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool
};

export default MovieThumb;
