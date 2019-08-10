import React from 'react';
import Infobar, { Item } from './InfoBar';
import { getAge } from '../../../helpers';

const genders = [
  { gen: 'n/a', icon: 'genderless' },
  { gen: 'Female', icon: 'venus' },
  { gen: 'Male', icon: 'mars' }
];

const ActorInfoBar = ({
  actor: { gender, birthday, deathday, place_of_birth }
}) => {
  const age = getAge(birthday, deathday);
  const life = birthday
    ? `${birthday} – ${deathday || 'now'} (age ${age})`
    : 'n/a';
  const { gen, icon } = genders[gender];
  return (
    <Infobar>
      <Item icon={['far', 'calendar-alt']}>Life: {life}</Item>
      <Item icon={icon}>Gender: {gen}</Item>
      <Item icon='globe'>Place of birth: {place_of_birth || 'n/a'}</Item>
    </Infobar>
  );
};

export default ActorInfoBar;
