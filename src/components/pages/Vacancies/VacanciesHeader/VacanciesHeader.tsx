/* eslint-disable react/no-unescaped-entities */
import { BaseButton, BaseContainer, BaseIcon, BaseTitle } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { BlockNumber } from '@content/index';
import React from 'react';
import styles from './VacanciesHeader.module.scss';

const VacanciesHeader = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseIcon
          viewBox="0 0 668 78"
          icon={ALL_ICONS.DECOR_2}
          className={styles.VacanciesHeader_Content_Image_Decor1}
        />

        <BaseIcon
          viewBox="0 0 670 257"
          icon={ALL_ICONS.DECOR_2}
          className={styles.VacanciesHeader_Content_Image_Decor2}
        />

        <BaseContainer>
          <div className={styles.VacanciesHeader}>
            <BlockNumber number="v1" className={styles.VacanciesHeader_Icon} />

            <BaseTitle className={styles.VacanciesHeader_Title}>
              Vacancies
            </BaseTitle>

            <div className={styles.VacanciesHeader_Content}>
              <div className={styles.VacanciesHeader_Content_About}>
                <div className="Header_animated animate__animated animate__fadeInLeft">
                  <div className={styles.VacanciesHeader_Content_About_Title}>
                    <h2>Working at the Spacefex Development Foundation</h2>
                  </div>

                  <div
                    className={styles.VacanciesHeader_Content_About_Description}
                  >
                    <p>
                      Our team is awesome. Our work is fulfilling. Our snacks
                      are relatively fresh. We'd love to talk to you if you can
                      contribute to our mission.
                    </p>
                  </div>
                </div>

                <BaseButton
                  title="See open positions"
                  type="danger"
                  className={styles.VacanciesHeader_Content_About_Button}
                />
              </div>

              <div className={styles.VacanciesHeader_Content_Image}>
                <div
                  className={styles.VacanciesHeader_Content_Image_CurrentImage}
                  style={{
                    backgroundImage: 'url(/images/image/vacancies-image.jpg)',
                  }}
                >
                  <div className={styles.VacanciesHeader_Content_Image_Text}>
                    <p>
                      Why work at Spacefex? We're building the first world Space
                      currency and financial infrastructure; don’t you want to
                      stay in history?
                    </p>
                  </div>

                  <div className={styles.VacanciesHeader_Content_Image_Id}>
                    <span>0041z00hi8</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={styles.VacanciesHeader_Image}
              style={{
                backgroundImage: 'url(/images/image/vacancies-image2.png)',
              }}
            ></div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default VacanciesHeader;
