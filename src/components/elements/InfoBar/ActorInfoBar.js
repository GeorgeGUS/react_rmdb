import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAge } from '../../../helpers';
import './InfoBar.css';

const genders = [
  { gen: 'n/a', icon: 'genderless' },
  { gen: 'Female', icon: 'venus' },
  { gen: 'Male', icon: 'mars' }
];

const ActorInfoBar = ({
  actor: { gender, birthday, deathday, place_of_birth }
}) => {
  const age = getAge(birthday, deathday);
  const ageStr = `${birthday} – ${
    deathday ? deathday : 'now'
  } (${age} years old)`;
  const { gen, icon } = genders[gender];
  return (
    <div className='rmdb-infobar'>
      <ul className='rmdb-infobar-list rmdb-container'>
        <li className='rmdb-infobar-item'>
          <FontAwesomeIcon icon={['far', 'calendar-alt']} size='2x' />
          <span className='rmdb-infobar-info'>
            Age: {birthday ? ageStr : 'n/a'}
          </span>
        </li>
        <li className='rmdb-infobar-item'>
          <FontAwesomeIcon icon={icon} size='2x' />
          <span className='rmdb-infobar-info'>Gender: {gen}</span>
        </li>
        <li className='rmdb-infobar-item'>
          <FontAwesomeIcon icon='globe' size='2x' />
          <span className='rmdb-infobar-info'>
            Place of birth: {place_of_birth ? place_of_birth : 'n/a'}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ActorInfoBar;
