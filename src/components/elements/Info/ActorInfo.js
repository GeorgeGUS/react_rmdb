import React from 'react';
import { InfoThumb } from '../Thumbs';
import './Info.css';

const ActorInfo = ({ actor: { profile_path, name, biography } }) => (
  <div className='rmdb-info'>
    <div className='rmdb-info-content rmdb-container clearfix'>
      <div className='rmdb-info-thumb'>
        <InfoThumb imagePath={profile_path} alt={name} />
      </div>
      <div className='rmdb-info-text'>
        <h1>{name}</h1>
        {biography && (
          <div className='rmdb-info-section'>
            <h2>Biography</h2>
            <p>{biography}</p>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default ActorInfo;
