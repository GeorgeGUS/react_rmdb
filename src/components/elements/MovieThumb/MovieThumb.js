import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MovieThumb.css';

const genders = ['Itself', 'Herself', 'Himself'];

const MovieThumb = ({
  clickable,
  image,
  title,
  year,
  movieId,
  gender,
  character
}) => {
  return (
    <div className='rmdb-moviethumb'>
      {clickable ? (
        <Link to={`/movie/${movieId}`}>
          <img src={image} alt={title} />
          <p className='rmdb-moviethumb-title'>
            “{title}”{year ? `, ${year}` : ''}
            <br />
            {gender && (
              <span>Character: {character ? character : genders[gender]}</span>
            )}
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
  gender: PropTypes.number,
  movieId: PropTypes.number,
  clickable: PropTypes.bool
};

export default MovieThumb;
