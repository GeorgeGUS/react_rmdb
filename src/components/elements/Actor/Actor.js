import React from 'react';
import { Link } from 'react-router-dom';
import { getProfileUrl } from '../../../config';
import './Actor.css';

const Actor = ({ actor }) => (
  <div className='rmdb-actor'>
    <Link to={`/actor/${actor.id}`} className='rmdb-actor-image'>
      <img src={getProfileUrl(actor.profile_path)} alt={actor.name} />
    </Link>
    <div className='rmdb-actor-info'>
      <Link to={`/actor/${actor.id}`}>
        <p className='rmdb-actor-name'>{actor.name}</p>
      </Link>
      <p className='rmdb-actor-character'>{actor.character}</p>
    </div>
  </div>
);

export default Actor;
