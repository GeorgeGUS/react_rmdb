import React from 'react';
import ErrorBoundary from '../../ErrorBoundary';
import styles from './grid.module.css';

const Grid = ({ children, title }) => (
  <ErrorBoundary>
    <section className='rmdb-grid'>
      <div className='rmdb-container'>
        <h2>{title}</h2>
        <div className={styles.content}>
          {children.map((el, i) => (
            <div key={i} className={styles.element}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </section>
  </ErrorBoundary>
);

export default Grid;
