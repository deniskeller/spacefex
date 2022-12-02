/* eslint-disable react/no-unescaped-entities */
import { BaseContainer, BaseIcon, BaseTitle } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { BlockNumber } from '@content/index';
import React from 'react';
import styles from './Developers.module.scss';

const Developers = () => {
  return (
    <>
      <BaseIcon
        viewBox="0 0 670 257"
        icon={ALL_ICONS.DECOR_2}
        className={styles.DecorIcon}
      />

      <div className={styles.Wrapper}>
        <div
          className={styles.Background}
          style={{ backgroundImage: 'url(/images/image/dust.jpg)' }}
        ></div>

        <BaseContainer>
          <div className={styles.Developers}>
            <div className="Header_animated animate__animated animate__fadeInLeft">
              <BaseTitle className={styles.Developers_Title}>
                Developers
              </BaseTitle>
            </div>

            <div className={styles.Developers_Content}>
              <BlockNumber number="d1" className={styles.NumberIcon} />

              <div className={styles.Developers_Content_Programs}>
                <div className={styles.Program}>
                  <div className={styles.Program_Title}>
                    <span>Developer's resources</span>
                  </div>
                  <div className={styles.Program_Description}>
                    create the space for future payments
                  </div>
                  <div className={styles.Program_Icon}>
                    <BaseIcon
                      viewBox="0 0 38 73"
                      icon={ALL_ICONS.LOW_COST}
                      className={styles.IconArrow}
                    />
                  </div>
                </div>

                <div className={styles.Program}>
                  <div className={styles.Program_Title}>
                    <span>Documentation</span>
                  </div>
                  <div className={styles.Program_Description}>
                    start building on Spacefex today
                  </div>
                  <div className={styles.Program_Icon}>
                    <BaseIcon
                      viewBox="0 0 38 73"
                      icon={ALL_ICONS.LOW_COST}
                      className={styles.IconArrow}
                    />
                  </div>
                </div>

                <div className={styles.Program}>
                  <div className={styles.Program_Title}>
                    <span>API reference</span>
                  </div>
                  <div className={styles.Program_Description}>
                    interact with the network using the API
                  </div>
                  <div className={styles.Program_Icon}>
                    <BaseIcon
                      viewBox="0 0 38 73"
                      icon={ALL_ICONS.LOW_COST}
                      className={styles.IconArrow}
                    />
                  </div>
                </div>

                <div className={styles.Program}>
                  <div className={styles.Program_Title}>
                    <span>Developers Google Group</span>
                  </div>
                  <div className={styles.Program_Description}>
                    lorem ipsum dolor sit amet
                  </div>
                  <div className={styles.Program_Icon}>
                    <BaseIcon
                      viewBox="0 0 38 73"
                      icon={ALL_ICONS.LOW_COST}
                      className={styles.IconArrow}
                    />
                  </div>
                </div>
              </div>

              <div
                className={styles.Developers_Content_Image}
                style={{
                  backgroundImage: 'url(/images/image/developers-image.png)',
                }}
              >
                <div className={styles.Developers_Content_Image_Id}>
                  <span>1j4hh5i008</span>
                </div>
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default Developers;
