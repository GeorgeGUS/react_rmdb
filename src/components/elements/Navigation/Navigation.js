import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ title }) => {
  return (
    <div className='rmdb-navigation'>
      <div className='rmdb-navigation-content'>
        <Link to='/'>
          <p>Home</p>
        </Link>
        <p>/</p>
        <p>{title}</p>
      </div>
    </div>
  );
};

Navigation.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navigation;
