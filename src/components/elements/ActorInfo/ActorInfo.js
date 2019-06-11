import React from 'react';
import { IMAGE_BASE_URL, NO_IMAGE_URL, POSTER_SIZE } from '../../../config';
import FontAwesome from 'react-fontawesome';
import MovieThumb from '../MovieThumb/MovieThumb';
import './MovieInfo.css';

const ActorInfo = ({ actor: { profile_path, name, biography } }) => (
  <div className='rmdb-movieinfo'>
    <div className='rmdb-movieinfo-content'>
      <div className='rmdb-movieinfo-thumb'>
        <MovieThumb
          image={
            profile_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${profile_path}`
              : NO_IMAGE_URL
          }
        />
      </div>
      <div className='rmdb-movieinfo-text'>
        <h1>{name}</h1>
        {biography && (
          <>
            <h3>Biography</h3>
            <p>{biography}</p>
          </>
        )}
      </div>
      <FontAwesome className='fa-film' name='film' size='5x' />
    </div>
  </div>
);

export default ActorInfo;
