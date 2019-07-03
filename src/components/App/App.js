import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../elements/Header/Header';
import NotFound from '../elements/NotFound/NotFound';
import Home from '../pages/Home';
import Movie from '../pages/Movie';
import Search from '../pages/Search';
import Actor from '../pages/Actor';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faSearch,
  faTicketAlt,
  faGenderless,
  faMars,
  faVenus,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';

import {
  faCalendarAlt,
  faClock,
  faMoneyBillAlt
} from '@fortawesome/free-regular-svg-icons';

library.add(
  fab,
  faSearch,
  faCalendarAlt,
  faClock,
  faMoneyBillAlt,
  faTicketAlt,
  faGenderless,
  faMars,
  faVenus,
  faGlobe
);

const App = () => {
  return (
    <HashRouter>
      <React.Fragment>
        <Helmet defaultTitle='React Movie' />
        <Header />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/search/:searchTerm' component={Search} exact />
          <Route path='/movie/:movieId' component={Movie} exact />
          <Route path='/actor/:actorId' component={Actor} exact />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    </HashRouter>
  );
};

export default App;
