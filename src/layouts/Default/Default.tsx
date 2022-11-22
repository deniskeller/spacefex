import React from 'react';
import styles from './Default.module.scss';
import { Navbar } from '@nav/index';
import { Footer } from 'components/footer';

interface Props {
  children: JSX.Element;
}

const Default: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Navbar />
      <div className={styles.Content}>{children}</div>
      <Footer />
    </div>
  );
};

export default Default;
