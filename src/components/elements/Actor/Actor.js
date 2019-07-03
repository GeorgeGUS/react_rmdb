import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_BASE_URL, NO_IMAGE_URL } from '../../../config';
import './Actor.css';

const POSTER_SIZE = 'w154';
const Actor = ({ actor }) => (
  <div className='rmdb-actor'>
    <Link to={`/actor/${actor.id}`} className='rmdb-actor-image'>
      <img
        src={
          actor.profile_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
            : NO_IMAGE_URL
        }
        alt={actor.name}
      />
    </Link>
    <Link to={`/actor/${actor.id}`} className='rmdb-actor-info'>
      <p className='rmdb-actor-name'>{actor.name}</p>
      <p className='rmdb-actor-character'>{actor.character}</p>
    </Link>
  </div>
);

export default Actor;
