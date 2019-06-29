import React from 'react';
import './LoadMoreBtn.css';

const LoadMoreBtn = ({ text, onClick }) => (
  <button
    type='button'
    className='rmdb-loadmorebtn'
    onClick={() => onClick(true)}
  >
    {text}
  </button>
);

export default LoadMoreBtn;
