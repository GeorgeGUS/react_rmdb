import React from 'react';

const NotFound = props => (
  <div>
    <h1>Whoooops. This page doesn't exist...</h1>
    <button onClick={props.history.goBack}>Go to previous page</button>
  </div>
);

export default NotFound;
