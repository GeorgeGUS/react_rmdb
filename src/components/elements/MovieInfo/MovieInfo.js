import React from 'react';
import {
  IMAGE_BASE_URL,
  NO_IMAGE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE
} from '../../../config';
import FontAwesome from 'react-fontawesome';
import MovieThumb from '../MovieThumb/MovieThumb';
import './MovieInfo.css';

const MovieInfo = ({ movie, directors = [] }) => {
  return (
    <div
      className='rmdb-movieinfo'
      style={{
        backgroundImage: `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${
          movie.backdrop_path
        }')`
      }}
    >
      <div className='rmdb-movieinfo-content'>
        <div className='rmdb-movieinfo-thumb'>
          <MovieThumb
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NO_IMAGE_URL
            }
          />
        </div>
        <div className='rmdb-movieinfo-text'>
          <h1>{movie.title}</h1>
          <h3>Plot</h3>
          <p>{movie.overview}</p>
          <h3>IMDB rating</h3>
          <div className='rmdb-rating'>
            <meter
              min='0'
              max='100'
              optimum='100'
              low='40'
              high='70'
              value={movie.vote_average * 10}
            />
            <p className='rmdb-score'>{movie.vote_average}</p>
          </div>
          {directors.length > 1 ? <h3>Directors</h3> : <h3>Director</h3>}
          {directors.map(({ name }) => (
            <p key={name} className='rmdb-director'>
              {name}
            </p>
          ))}
        </div>
        <FontAwesome className='fa-film' name='film' size='5x' />
      </div>
    </div>
  );
};

export default MovieInfo;
