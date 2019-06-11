import React from 'react';
import FontAwesome from 'react-fontawesome';
import { getAge } from '../../../helpers';
import './MovieInfoBar.css';

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
    <div className='rmdb-movieinfobar'>
      <div className='rmdb-movieinfobar-content'>
        {birthday && (
          <div className='rmdb-movieinfobar-col'>
            <FontAwesome className='fa-time' name='calendar' size='2x' />
            <span className='rmdb-movieinfobar-info'>
              Age: {birthday} – {deathday ? deathday : 'now'} ({age} years old)
            </span>
          </div>
        )}
        <div className='rmdb-movieinfobar-col'>
          <FontAwesome className={icon} name='gender' size='2x' />
          <span className='rmdb-movieinfobar-info'>Gender: {gen}</span>
        </div>
        {place_of_birth && (
          <div className='rmdb-movieinfobar-col'>
            <FontAwesome className='fa-globe' name='globe' size='2x' />
            <span className='rmdb-movieinfobar-info'>
              Place of birth: {place_of_birth}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActorInfoBar;
