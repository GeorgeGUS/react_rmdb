import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import ErrorBoundary from '../../ErrorBoundary';
import './Grid.css';

const Grid = ({ children, header, loading, isActors }) => {
  const renderElements = () =>
    children &&
    children.map((el, i) => (
      <div key={i} className='rmdb-grid-element'>
        {el}
      </div>
    ));
  const contentClasses = cn({
    'rmdb-grid-content': true,
    'rmdb-grid-content-actor': isActors
  });

  return (
    <ErrorBoundary>
      {!loading && (
        <div className='rmdb-grid'>
          <div className='rmdb-container'>
            {header && <h2>{header}</h2>}
            <div className={contentClasses}>{renderElements()}</div>
          </div>
        </div>
      )}
    </ErrorBoundary>
  );
};

Grid.propTypes = {
  header: PropTypes.string,
  loading: PropTypes.bool,
  isActors: PropTypes.bool
};

export default Grid;
