import React from 'react';
import styles from './Usf.module.scss';
import { UsfForm, UsfHeader, UsfMission } from 'components/pages/Usf';

const Usf = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <div
          className={styles.BackgroundTop}
          style={{ backgroundImage: 'url(/images/image/usf-header-bg.png)' }}
        ></div>
        <div
          className={styles.BackgroundBottom}
          style={{ backgroundImage: 'url(/images/image/dust.jpg)' }}
        ></div>
        <UsfHeader />
        <UsfMission />
        <UsfForm />
      </div>
    </>
  );
};

export default Usf;
