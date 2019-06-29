import React from 'react';
import FontAwesome from 'react-fontawesome';
import { calcTime, convertMoney } from '../../../helpers';
import './InfoBar.css';

const MovieInfoBar = ({
  movie: { runtime, budget, revenue, release_date }
}) => (
  <div className='rmdb-infobar'>
    <ul className='rmdb-infobar-list rmdb-container'>
      <li className='rmdb-infobar-item'>
        <FontAwesome className='fa-date' name='calendar' size='2x' />
        <span className='rmdb-infobar-info'>Release date: {release_date}</span>
      </li>
      <li className='rmdb-infobar-item'>
        <FontAwesome className='fa-time' name='clock-o' size='2x' />
        <span className='rmdb-infobar-info'>
          Running time: {calcTime(runtime)}
        </span>
      </li>
      <li className='rmdb-infobar-item'>
        <FontAwesome className='fa-budget' name='money' size='2x' />
        <span className='rmdb-infobar-info'>
          Budget: {convertMoney(budget)}
        </span>
      </li>
      <li className='rmdb-infobar-item'>
        <FontAwesome className='fa-revenue' name='ticket' size='2x' />
        <span className='rmdb-infobar-info'>
          Revenue: {convertMoney(revenue)}
        </span>
      </li>
    </ul>
  </div>
);

export default MovieInfoBar;
