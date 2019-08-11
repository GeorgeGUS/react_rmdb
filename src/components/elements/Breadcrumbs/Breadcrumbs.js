import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './breadcrumbs.module.css';

const Breadcrumbs = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to='/'>Home</Link>
        </li>
        <li className={styles.item}>{title}</li>
      </ul>
    </div>
  );
};

Breadcrumbs.propTypes = {
  title: PropTypes.string.isRequired
};

export default Breadcrumbs;
