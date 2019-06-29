import React from 'react';
import FontAwesome from 'react-fontawesome';
import { getAge } from '../../../helpers';
import './InfoBar.css';

const genderMap = {
  0: { gen: 'unavailable', icon: 'fa-genderless' },
  1: { gen: 'woman', icon: 'fa-venus' },
  2: { gen: 'man', icon: 'fa-mars' }
};

const ActorInfoBar = ({
  actor: { gender, birthday, deathday, place_of_birth }
}) => {
  const age = getAge(birthday, deathday);
  const { gen, icon } = genderMap[gender];
  return (
    <div className='rmdb-infobar'>
      <ul className='rmdb-infobar-list rmdb-container'>
        {birthday && (
          <li className='rmdb-infobar-item'>
            <FontAwesome className='fa-time' name='calendar' size='2x' />
            <span className='rmdb-infobar-info'>
              Age: {birthday} – {deathday ? deathday : 'now'} ({age} years old)
            </span>
          </li>
        )}
        <li className='rmdb-infobar-item'>
          <FontAwesome className={icon} name='gender' size='2x' />
          <span className='rmdb-infobar-info'>Gender: {gen}</span>
        </li>
        {place_of_birth && (
          <li className='rmdb-infobar-item'>
            <FontAwesome className='fa-globe' name='globe' size='2x' />
            <span className='rmdb-infobar-info'>
              Place of birth: {place_of_birth}
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ActorInfoBar;
