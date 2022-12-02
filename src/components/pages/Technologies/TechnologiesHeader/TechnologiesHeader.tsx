import { BaseContainer, BaseIcon, BaseTitle } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { BlockNumber } from '@content/index';
import React from 'react';
import styles from './TechnologiesHeader.module.scss';

const TechnologiesHeader = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.TechnologiesHeader}>
            <BlockNumber
              number="t1"
              className={styles.TechnologiesHeader_Icon}
            />

            <div
              className={styles.TechnologiesHeader_Image}
              style={{
                backgroundImage:
                  'url(/images/image/technologies-header-image.jpg)',
              }}
            ></div>

            <BaseIcon
              viewBox="0 0 670 257"
              icon={ALL_ICONS.DECOR_2}
              className={styles.TechnologiesHeader_DecorIcon}
            />

            <div className={styles.TechnologiesHeader_Id}>
              <span>1x0023HI01</span>
            </div>

            <BaseTitle className={styles.TechnologiesHeader_Title}>
              Technologies
            </BaseTitle>
            <div className="Header_animated animate__animated animate__fadeInLeft">
              <div className={styles.TechnologiesHeader_Description}>
                <p>
                  Spacefex uses the entire stack of technologies combining the
                  financial world, economy and space science. The unique
                  combination of technologies and economics allows us to build a
                  new world for future generations.
                </p>
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default TechnologiesHeader;
