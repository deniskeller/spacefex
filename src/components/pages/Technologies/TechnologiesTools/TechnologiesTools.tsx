/* eslint-disable react/no-unescaped-entities */
import { BaseContainer } from '@base/index';
import React from 'react';
import styles from './TechnologiesTools.module.scss';

const TechnologiesTools = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.Technologies}>
            <ul className={styles.TechnologiesTools}>
              <li className={styles.TechnologiesTools_Item}>
                <div className={styles.TechnologiesTools_Item_Number}>
                  <span>01</span>
                </div>
                <div className={styles.TechnologiesTools_Item_Description}>
                  <p>
                    Spacefex uses the entire stack of technologies combining the
                    financial world, economy and space science. The unique
                    combination of technologies and economics allows us to build
                    a new world for future generations.
                  </p>
                </div>
              </li>

              <li className={styles.TechnologiesTools_Item}>
                <div className={styles.TechnologiesTools_Item_Number}>
                  <span>02</span>
                </div>
                <div className={styles.TechnologiesTools_Item_Description}>
                  <p>
                    Server Infrastructure, here, we use the servers based in
                    North America, the United States in Canada to support our
                    space infrastructure from the earth.
                  </p>
                </div>
              </li>

              <li className={styles.TechnologiesTools_Item}>
                <div className={styles.TechnologiesTools_Item_Number}>
                  <span>03</span>
                </div>
                <div className={styles.TechnologiesTools_Item_Description}>
                  <p>
                    Satellites, here we are working with our team to reach out
                    the NASA and receive the allowance from launching our first
                    satellites with all required permissions under their
                    supervision.
                  </p>
                </div>
              </li>

              <li className={styles.TechnologiesTools_Item}>
                <div className={styles.TechnologiesTools_Item_Number}>
                  <span>04</span>
                </div>
                <div className={styles.TechnologiesTools_Item_Description}>
                  <p>
                    Linux-based blockchain applications. We are developing
                    applications to help manage your blockchain finance using
                    the USF cryptocurrency. It would be done complementary by
                    our developer's team, allowing you to access them on your
                    own, from your phone, laptop or any other device that the
                    community would support. The main point is that it would be
                    only the interface to interact with the space infrastructure
                    because all the data and transactions would be performed out
                    of space.
                  </p>
                </div>
              </li>

              <li className={styles.TechnologiesTools_Item}>
                <div className={styles.TechnologiesTools_Item_Number}>
                  <span>05</span>
                </div>
                <div className={styles.TechnologiesTools_Item_Description}>
                  <p>
                    Mining, the Spacefex show an entirely new way to join the
                    network and help the community grow and decentralise its
                    payment network by launching yourself from any country in
                    the world where it is allowed your satellite with the
                    preinstalled and configured Spacefex software.
                  </p>
                </div>
              </li>

              <li className={styles.TechnologiesTools_Item}>
                <div className={styles.TechnologiesTools_Item_Number}>
                  <span>06</span>
                </div>
                <div className={styles.TechnologiesTools_Item_Description}>
                  <p>
                    Decentralisation is based on the satellites network.
                    Spacefex uses the principles of a satellite network that
                    covers the global earth orbit to communicate with the earth
                    services and process the transactions. The satellite network
                    is entirely independent and secure as it gets the energy
                    from the sun on its batteries and allows to secure the
                    constant payment flow.
                  </p>
                </div>
              </li>
            </ul>

            <div
              className={`${styles.TechnologiesTools_Image} ${styles.Desktop}`}
              style={{
                backgroundImage: 'url(/images/image/astro2.png)',
              }}
            ></div>
          </div>
        </BaseContainer>
      </div>

      <div
        className={`${styles.TechnologiesTools_Image} ${styles.Tablet}`}
        style={{
          backgroundImage: 'url(/images/image/astro2.png)',
        }}
      ></div>
    </>
  );
};

export default TechnologiesTools;
