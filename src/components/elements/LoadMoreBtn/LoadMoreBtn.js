import React from 'react';
import './LoadMoreBtn.css';

const LoadMoreBtn = ({ text, onClick }) => (
  <div className='rmdb-container'>
    <button
      type='button'
      className='rmdb-loadmorebtn'
      onClick={() => onClick(true)}
    >
      {text}
    </button>
  </div>
);

export default LoadMoreBtn;
