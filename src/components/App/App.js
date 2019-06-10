import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from '../elements/Header/Header';
import NotFound from '../elements/NotFound/NotFound';
import Home from '../Home/Home';
import Movie from '../Movie/Movie';
import Search from '../Search/Search';

const App = () => {
  return (
    <HashRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/search/:searchTerm' component={Search} exact />
          <Route path='/movie/:movieId' component={Movie} exact />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    </HashRouter>
  );
};

export default App;
