import React from 'react';
import styles from './page.module.css';

const Page = ({ children }) => {
  return <main className={styles.wrapper}>{children}</main>;
};

export default Page;
