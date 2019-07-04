import React from 'react';
import { getPosterUrl } from '../../../config';
import MovieThumb from '../MovieThumb/MovieThumb';
import './Info.css';

const ActorInfo = ({ actor: { profile_path, name, biography } }) => (
  <div className='rmdb-info'>
    <div className='rmdb-info-content rmdb-container clearfix'>
      <div className='rmdb-info-thumb'>
        <MovieThumb image={getPosterUrl(profile_path)} />
      </div>
      <div className='rmdb-info-text'>
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
