/* eslint-disable react/no-unescaped-entities */
import { BaseContainer, BaseIcon, BaseTitle } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import styles from './UsfMission.module.scss';

const UsfMission = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.UsfMission}>
            <BaseTitle className={styles.UsfMission_Title}>
              What is the mission of USF
            </BaseTitle>

            <div className={styles.UsfMission_Content}>
              <div className={styles.UsfMission_Content_About}>
                <div className={styles.UsfMission_Content_About_Paragraph}>
                  <p>
                    To make the world free from discrimination or abuse, and
                    <br className={styles.Br} />
                    yes, precisely the financial abuse.
                  </p>
                </div>

                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce>
                  <div className={styles.UsfMission_Content_About_Quote}>
                    <p>
                      Any human has the right to live financially free and
                      decide how to act with his finance.
                    </p>
                  </div>
                </AnimationOnScroll>

                <div className={styles.UsfMission_Content_About_Paragraph}>
                  <p>
                    Nobody can dictate the rules. We want to build the battered
                    <br className={styles.Br} />
                    world in space to show humanity how many things we have
                    <br className={styles.Br} /> to explore and to explain that
                    we need to stop wars and <br className={styles.Br} />{' '}
                    conflicts and make a united world.
                  </p>
                </div>

                <div className={styles.UsfMission_Content_About_Decor}>
                  <BaseIcon
                    viewBox="0 0 668 78"
                    icon={ALL_ICONS.DECOR_1}
                    className={styles.DecorIcon}
                  />
                </div>

                <div className={styles.UsfMission_Content_About_Paragraph}>
                  <p>
                    USF — United Space Finance has the constant average rate of
                    the world's main currencies: USD, EUR, CNY, JPY, GBP, and
                    INR.
                  </p>
                </div>

                <div className={styles.UsfMission_Content_About_Paragraph}>
                  <p>
                    Why such currencies? Because, in total, it forms the
                    majority of people who use these currencies daily. By using
                    the average rate of these world currencies, allow us to
                    unite all of them under one in USF.
                  </p>
                </div>
              </div>

              <div
                className={styles.UsfMission_Content_Image}
                style={{
                  backgroundImage: 'url(/images/image/usf-mission-image.png)',
                }}
              ></div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default UsfMission;
