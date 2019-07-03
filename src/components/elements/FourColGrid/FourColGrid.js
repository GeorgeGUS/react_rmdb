import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import './FourColGrid.css';

const FourColGrid = ({ children, header, loading, isActors }) => {
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
    <div className='rmdb-grid'>
      <div className='rmdb-container'>
        {header && !loading ? <h2>{header}</h2> : null}
        <div className={contentClasses}>{renderElements()}</div>
      </div>
    </div>
  );
};

FourColGrid.propTypes = {
  header: PropTypes.string,
  loading: PropTypes.bool,
  isActors: PropTypes.bool
};

export default FourColGrid;
