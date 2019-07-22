import React from 'react';
import './Page.css';

const Page = ({ children }) => {
  return <main className='rmdb-page'>{children}</main>;
};

export default Page;
