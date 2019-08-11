import React from 'react';
import styles from './page.module.css';

const Page = ({ children }) => {
  return <main className={styles.block}>{children}</main>;
};

export default Page;
