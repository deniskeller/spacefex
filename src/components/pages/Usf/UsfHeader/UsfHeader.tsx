import { BaseContainer, BaseTitle } from '@base/index';
import { BlockNumber } from '@content/index';
import React from 'react';
import styles from './UsfHeader.module.scss';

const UsfHeader = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.UsfHeader}>
            <BlockNumber number="usf" className={styles.UsfHeader_Icon} />

            <BaseTitle className={styles.UsfHeader_Title}>USF</BaseTitle>

            <div className="Header_animated animate__animated animate__fadeInLeft">
              <div className={styles.UsfHeader_Paragraph}>
                <p>
                  is the abbreviation for United Space Finance, which means the
                  united international finance in space.
                </p>
              </div>
            </div>
            <div className="Header_animated animate__animated animate__fadeInLeft">
              <div className={styles.UsfHeader_Paragraph}>
                <p>
                  The first world space currency was launched by the foundation
                  of people who wanted to change the world.
                </p>
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default UsfHeader;
