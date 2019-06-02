import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MovieThumb.css';

const MovieThumb = ({ clickable, image, movieId, movieName }) => {
  return (
    <div className='rmdb-moviethumb'>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <img src={image} alt='moviethumb' />
        </Link>
      ) : (
        <img src={image} alt='moviethumb' />
      )}
    </div>
  );
};

MovieThumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  movieName: PropTypes.string,
  clickable: PropTypes.bool
};

export default MovieThumb;