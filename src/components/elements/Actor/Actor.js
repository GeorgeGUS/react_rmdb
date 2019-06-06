import React from 'react';
import { IMAGE_BASE_URL, NO_IMAGE_URL } from '../../../config';
import './Actor.css';

const POSTER_SIZE = 'w154';
const Actor = ({ actor }) => (
  <div className='rmdb-actor'>
    <img
      src={
        actor.profile_path
          ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
          : NO_IMAGE_URL
      }
      alt='actorthumb'
    />
    <span className='rmdb-actor-name'>{actor.name}</span>
    <span className='rmdb-actor-character'>{actor.character}</span>
  </div>
);

export default Actor;
