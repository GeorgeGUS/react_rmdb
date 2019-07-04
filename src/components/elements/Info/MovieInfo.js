import React from 'react';
import { getBackdropUrl, getPosterUrl } from '../../../config';
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
    backgroundImage: `url(${getBackdropUrl(backdrop_path)})`
  };
  const genresNames = genres.map(g => g.name).join(', ');
  return (
    <div className='rmdb-info' style={bgImage}>
      <div className='rmdb-info-content rmdb-container clearfix'>
        <div className='rmdb-info-thumb'>
          <MovieThumb image={getPosterUrl(poster_path)} />
        </div>
        <div className='rmdb-info-text'>
          <h1>{title}</h1>
          <h3>Plot</h3>
          <p>{overview}</p>
          <div className='rmdb-info-sections'>
            <div className='rmdb-info-section'>
              <h3>Genres</h3>
              <p>{genresNames}</p>
            </div>
            <div className='rmdb-info-section'>
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
            <div className='rmdb-info-section'>
              {directors.length > 1 ? <h3>Directors</h3> : <h3>Director</h3>}
              <p>{directors.map(({ name }) => name).join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
