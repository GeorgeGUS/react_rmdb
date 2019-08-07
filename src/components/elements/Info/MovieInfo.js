import React, { useState } from 'react';
import { VIDEO_URL, getBackdropUrl, getPosterUrl } from '../../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MovieThumb from '../MovieThumb/MovieThumb';
import Modal from '../Modal/Modal';
import Trailer from '../Trailer/Trailer';
import LinkBtn from '../LinkBtn/LinkBtn';
import Rating from '../Rating/Rating';

import './Info.css';

const MovieInfo = ({ movie }) => {
  const {
    backdrop_path,
    poster_path,
    title,
    genres,
    overview,
    vote_average,
    credits,
    videos
  } = movie;
  const bgImage = {
    backgroundImage: `url(${getBackdropUrl(backdrop_path)})`
  };
  const trailerId = videos.results.filter(({ type }) => type === 'Trailer')[0]
    .key;
  const trailerURL = `${VIDEO_URL}${trailerId}`;
  const directors = credits.crew.filter(crew => crew.job === 'Director');
  const genresNames = genres.map(g => g.name).join(', ');
  const [modalOpen, setModalOpen] = useState(false);
  const changeModalOpen = bool => () => {
    setModalOpen(bool);
  };
  return (
    <div className='rmdb-info' style={bgImage}>
      <div className='rmdb-info-content rmdb-container clearfix'>
        <div className='rmdb-info-thumb'>
          <MovieThumb image={getPosterUrl(poster_path)} />
        </div>
        <div className='rmdb-info-text'>
          <h1>{title}</h1>
          <LinkBtn onClick={changeModalOpen(true)}>
            <FontAwesomeIcon icon='play' size='1x' /> Play trailer
          </LinkBtn>
          <Modal
            title={'Play Trailer'}
            show={modalOpen}
            onClose={changeModalOpen(false)}
          >
            <Trailer trailerURL={modalOpen ? trailerURL : null} title={title} />
          </Modal>
          <div className='rmdb-info-section'>
            <h2>Overview</h2>
            <p>{overview}</p>
          </div>
          <div className='rmdb-info-footer'>
            <div className='rmdb-info-section'>
              <h2>Genres</h2>
              <p>{genresNames}</p>
            </div>
            <div className='rmdb-info-section'>
              <h2>IMDB rating</h2>
              <Rating value={vote_average} />
            </div>
            <div className='rmdb-info-section'>
              <h2>{directors.length > 1 ? 'Directors' : 'Director'}</h2>
              <p>{directors.map(({ name }) => name).join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
