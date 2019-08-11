import React from 'react';
import ErrorBoundary from '../../ErrorBoundary';
import styles from './grid.module.css';

const Grid = ({ children, title }) => (
  <ErrorBoundary>
    <div className={styles.block}>
      <div className='container'>
        <h2>{title}</h2>
        <div className={styles.content}>
          {children.map((el, i) => (
            <div key={i} className={styles.element}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  </ErrorBoundary>
);

export default Grid;
