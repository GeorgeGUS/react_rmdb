import React from 'react';
import PropTypes from 'prop-types';
import { getThumbUrl } from '../../../config';
import { Link } from 'react-router-dom';
import './MovieThumb.css';

const genders = ['Unknown', 'Herself', 'Himself'];

const MovieThumb = ({ clickable, gender, movie = {}, imagePath }) => {
  const { id, title, poster_path, character, release_date } = movie;
  const image = getThumbUrl(poster_path || imagePath);
  const year = release_date && release_date.slice(0, 4);
  return (
    <div className='rmdb-moviethumb'>
      {clickable ? (
        <Link to={`/movie/${id}`} className='rmdb-moviethumb-wrapper'>
          <img className='rmdb-moviethumb-image' src={image} alt={title} />
          <p className='rmdb-moviethumb-title'>
            “{title}”{year ? `, ${year}` : ''}
            <br />
            {gender && (
              <span>Character: {character ? character : genders[gender]}</span>
            )}
          </p>
        </Link>
      ) : (
        <img className='rmdb-moviethumb-image' src={image} alt='moviethumb' />
      )}
    </div>
  );
};

MovieThumb.propTypes = {
  movie: PropTypes.object,
  imagePath: PropTypes.string,
  gender: PropTypes.number,
  clickable: PropTypes.bool
};

export default MovieThumb;
