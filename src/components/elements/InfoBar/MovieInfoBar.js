import React from 'react';
import Infobar, { Item } from './InfoBar';
import { calcTime, convertMoney } from '../../../helpers';

const MovieInfoBar = ({
  movie: { runtime, budget, revenue, release_date }
}) => (
  <Infobar>
    <Item icon={['far', 'calendar-alt']}>Release date: {release_date}</Item>
    <Item icon={['far', 'clock']}>Running time: {calcTime(runtime)}</Item>
    <Item icon={['far', 'money-bill-alt']}>Budget: {convertMoney(budget)}</Item>
    <Item icon='ticket-alt'>Revenue: {convertMoney(revenue)}</Item>
  </Infobar>
);

export default MovieInfoBar;
