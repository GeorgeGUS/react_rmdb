import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from '../elements/Header/Header';
import NotFound from '../elements/NotFound/NotFound';
import Home from '../pages/Home';
import Movie from '../pages/Movie';
import Search from '../pages/Search';
import Actor from '../pages/Actor';

const App = () => {
  return (
    <HashRouter>
      <React.Fragment>
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
