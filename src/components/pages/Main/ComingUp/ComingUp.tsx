import { BlockNumber } from '@content/index';
import React from 'react';
import styles from './ComingUp.module.scss';

const ComingUp = () => {
  return (
    <>
      <div className={styles.ComingUp}>
        <BlockNumber />
      </div>
    </>
  );
};

export default ComingUp;
