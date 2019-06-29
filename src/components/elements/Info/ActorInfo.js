import React from 'react';
import { IMAGE_BASE_URL, NO_IMAGE_URL, POSTER_SIZE } from '../../../config';
import MovieThumb from '../MovieThumb/MovieThumb';
import './Info.css';

const ActorInfo = ({ actor: { profile_path, name, biography } }) => (
  <div className='rmdb-movieinfo'>
    <div className='rmdb-movieinfo-content rmdb-container clearfix'>
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
    </div>
  </div>
);

export default ActorInfo;
