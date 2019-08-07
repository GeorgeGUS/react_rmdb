import React from 'react';
import './LinkBtn.css';

const LinkBtn = ({ children, onClick }) => {
  return (
    <button type='button' className='rmdb-link-btn' onClick={onClick}>
      {children}
    </button>
  );
};

export default LinkBtn;
