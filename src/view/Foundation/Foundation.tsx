/* eslint-disable react/no-unescaped-entities */
import { BaseContainer, BaseIcon, BaseText, BaseTitle } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { BlockNumber } from '@content/index';
import React from 'react';
import styles from './Foundation.module.scss';

const Foundation = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <div
          className={styles.Background}
          style={{ backgroundImage: 'url(/images/image/dust.jpg)' }}
        ></div>

        <BaseIcon
          viewBox="0 0 586 316"
          icon={ALL_ICONS.DECOR_3}
          className={styles.DecorIcon}
        />

        <BaseContainer>
          <div className={styles.Foundation}>
            <BlockNumber number="f1" className={styles.NumberIcon} />

            <BaseTitle className={styles.Foundation_Title}>
              Foundation
            </BaseTitle>

            <div className={styles.Foundation_Content}>
              <div className={styles.Foundation_Content_About}>
                <BaseTitle
                  type="h2"
                  className={styles.Foundation_Content_About_Title}
                >
                  Spacefex Development Foundation
                </BaseTitle>

                <BaseText
                  className={styles.Foundation_Content_About_Description}
                >
                  The Spacefex Development Foundation (SDF) is a non-profit
                  organisation founded in 2022 to support the development and
                  growth of the open-source Spacefex network. SDF and Spacefex
                  (Canadian licensed Money Service Business company) seek to
                  unlock the world’s economic potential by making money more
                  fluid, markets more open, and people more empowered. The
                  Foundation helps maintain Spacefex’s codebase, supports the
                  technical and business communities around Stellar, and is a
                  speaking partner to regulators and institutions.
                </BaseText>
              </div>

              <div className={styles.Foundation_Content_Info}>
                <div className={styles.Foundation_Content_Info_Item}>
                  <BaseTitle
                    type="h2"
                    className={styles.Foundation_Content_Info_Item_Title}
                  >
                    What we're building?
                  </BaseTitle>
                  <BaseText
                    className={styles.Foundation_Content_Info_Item_Description}
                  >
                    We’re building a new stack for digital assets. Though
                    Spacefex is open source and decentralised, SDF leads the
                    development of the network. The Foundation supports both the
                    codebase and the people building on it.
                  </BaseText>
                </div>

                <div className={styles.Foundation_Content_Info_Item}>
                  <BaseTitle
                    type="h2"
                    className={styles.Foundation_Content_Info_Item_Title}
                  >
                    Platform
                  </BaseTitle>
                  <BaseText
                    className={styles.Foundation_Content_Info_Item_Description}
                  >
                    A suite of tools and services for building financial
                    services using the Spacefex system.
                  </BaseText>
                </div>

                <div className={styles.Foundation_Content_Info_Item}>
                  <BaseTitle
                    type="h2"
                    className={styles.Foundation_Content_Info_Item_Title}
                  >
                    Ecosystem
                  </BaseTitle>
                  <BaseText
                    className={styles.Foundation_Content_Info_Item_Description}
                  >
                    The space finance ecosystem uses modern technologies and
                    communication channels with green energy.
                  </BaseText>
                </div>

                <div className={styles.Foundation_Content_Info_Item}>
                  <BaseTitle
                    type="h2"
                    className={styles.Foundation_Content_Info_Item_Title}
                  >
                    Infrastructure
                  </BaseTitle>
                  <BaseText
                    className={styles.Foundation_Content_Info_Item_Description}
                  >
                    Sattelites network and the SDK to launch your satellite and
                    join the Spacefex onboard. The open-source backend for
                    storing and moving money.
                  </BaseText>
                </div>
              </div>
            </div>

            <div
              className={styles.Foundation_Image}
              style={{
                backgroundImage: 'url(/images/image/foundation_image.jpg)',
              }}
            >
              <div className={styles.Foundation_Image_Id}>
                <span>002x8ii03h</span>
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default Foundation;
