import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_BASE_URL, NO_IMAGE_URL } from '../../../config';
import './Actor.css';

const POSTER_SIZE = 'w154';
const Actor = ({ actor }) => (
  <div className='rmdb-actor'>
    <Link to={`/actor/${actor.id}`}>
      <img
        src={
          actor.profile_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
            : NO_IMAGE_URL
        }
        alt={actor.name}
      />
      <span className='rmdb-actor-name'>{actor.name}</span>
      <span className='rmdb-actor-character'>{actor.character}</span>
    </Link>
  </div>
);

export default Actor;
