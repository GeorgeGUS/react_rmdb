import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Breadcrumbs.css';

const Breadcrumbs = ({ title }) => {
  return (
    <div className='rmdb-breadcrumbs'>
      <div className='rmdb-container'>
        <ul className='rmdb-breadcrumbs-list'>
          <li className='rmdb-breadcrumbs-item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='rmdb-breadcrumbs-item'>{title}</li>
        </ul>
      </div>
    </div>
  );
};

Breadcrumbs.propTypes = {
  title: PropTypes.string.isRequired
};

export default Breadcrumbs;
