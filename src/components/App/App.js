import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ErrorBoundary from '../elements/ErrorBoundary/ErrorBoundary';
import Header from '../elements/Header/Header';
import NotFound from '../elements/NotFound/NotFound';
import Home from '../pages/Home';
import Movie from '../pages/Movie';
import Search from '../pages/Search';
import Actor from '../pages/Actor';

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter basename='/react_rmdb'>
        <Header />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/search/:searchTerm' component={Search} exact />
          <Route path='/movie/:id' component={Movie} exact />
          <Route path='/actor/:id' component={Actor} exact />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
