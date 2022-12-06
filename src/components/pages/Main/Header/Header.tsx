import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <>
      <div
        className={styles.Header}
        style={{ backgroundImage: 'url(/images/image/cover.jpg)' }}
      ></div>
    </>
  );
};

export default Header;
