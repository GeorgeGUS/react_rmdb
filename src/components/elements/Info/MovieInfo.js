import React from 'react';
import {
  IMAGE_BASE_URL,
  NO_IMAGE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE
} from '../../../config';
import MovieThumb from '../MovieThumb/MovieThumb';
import './Info.css';

const MovieInfo = ({ movie, directors = [] }) => {
  const {
    backdrop_path,
    poster_path,
    title,
    genres,
    overview,
    vote_average
  } = movie;
  const bgImage = {
    backgroundImage: `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop_path}')`
  };
  const poster = poster_path
    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}`
    : NO_IMAGE_URL;
  const genresNames = genres.map(g => g.name).join(', ');
  return (
    <div className='rmdb-movieinfo' style={bgImage}>
      <div className='rmdb-movieinfo-content rmdb-container clearfix'>
        <div className='rmdb-movieinfo-thumb'>
          <MovieThumb image={poster} />
        </div>
        <div className='rmdb-movieinfo-text'>
          <h1>{title}</h1>
          <h3>Plot</h3>
          <p>{overview}</p>
          <div className='rmdb-movieinfo-sections'>
            <div className='rmdb-movieinfo-section'>
              <h3>Genres</h3>
              <p>{genresNames}</p>
            </div>
            <div className='rmdb-movieinfo-section'>
              <h3>IMDB rating</h3>
              <div className='rmdb-rating'>
                <meter
                  className='rmdb-rating-scale'
                  min='0'
                  max='100'
                  optimum='100'
                  low='40'
                  high='70'
                  value={vote_average * 10}
                />
                <p className='rmdb-rating-score'>{vote_average}</p>
              </div>
            </div>
            <div className='rmdb-movieinfo-section'>
              {directors.length > 1 ? <h3>Directors</h3> : <h3>Director</h3>}
              {directors.map(({ name }) => (
                <p key={name} className='rmdb-director'>
                  {name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
