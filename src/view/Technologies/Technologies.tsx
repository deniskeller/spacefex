import {
  TechnologiesHeader,
  TechnologiesIframe,
  TechnologiesTools,
} from 'components/pages/Technologies';
import React from 'react';
import styles from './Technologies.module.scss';

const Technologies = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <div
          className={styles.Background}
          style={{ backgroundImage: 'url(/images/image/dust.jpg)' }}
        ></div>
        <TechnologiesHeader />
        <TechnologiesTools />
        <TechnologiesIframe />
      </div>
    </>
  );
};

export default Technologies;
