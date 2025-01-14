import { BaseText, BaseTitle } from '@base/index';
import { BlockNumber } from '@content/index';
import React from 'react';
import styles from './ForHumanity.module.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Image from 'next/image';

const ForHumanity = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BlockNumber number="2" className={styles.NumberIcon} />
        <div
          className={styles.Wrapper_Bg}
          style={{ backgroundImage: 'url(/images/image/space.jpg)' }}
        >
          <div className={styles.Moon}>
            <Image
              src="/images/image/moon.png"
              alt={'Image'}
              fill
              sizes="(max-width: 456px)"
            />
          </div>
          <div className={styles.ForHumanity_Container}>
            <div className={styles.ForHumanity}>
              <BaseTitle className={styles.ForHumanity_Title}>
                The blockchain for humanity in Space
              </BaseTitle>

              <div className={styles.ForHumanity_Description}>
                <BaseText>
                  Spacefex gives people an open platform to reimagine systems
                  and solutions as a network designed for speed, affordability,
                  and utility outside the earth without any borders and
                  limitations.
                </BaseText>
              </div>

              <div className={styles.ForHumanity_Score}>
                <div className={styles.ForHumanity_Score_Title}>
                  <h1>
                    Mission in space till <span>2025</span>:
                  </h1>
                </div>

                <div className={styles.ForHumanity_Score_Item}>
                  <AnimationOnScroll
                    animateIn="animate__fadeInLeft"
                    animateOnce
                  >
                    <div className={styles.ForHumanity_Score_Item_Value}>
                      <span>1bln</span>
                    </div>
                  </AnimationOnScroll>

                  <AnimationOnScroll
                    animateIn="animate__fadeInLeft"
                    animateOnce
                  >
                    <div className={styles.ForHumanity_Score_Item_Description}>
                      space accounts
                    </div>
                  </AnimationOnScroll>
                </div>

                <div className={styles.ForHumanity_Score_Item}>
                  <AnimationOnScroll
                    animateIn="animate__fadeInLeft animate__delay-1s"
                    animateOnce
                  >
                    <div className={styles.ForHumanity_Score_Item_Value}>
                      <span>3bln</span>
                    </div>
                  </AnimationOnScroll>

                  <AnimationOnScroll
                    animateIn="animate__fadeInLeft animate__delay-1s"
                    animateOnce
                  >
                    <div className={styles.ForHumanity_Score_Item_Description}>
                      space transactions
                    </div>
                  </AnimationOnScroll>
                </div>

                <div className={styles.ForHumanity_Score_Item}>
                  <AnimationOnScroll
                    animateIn="animate__fadeInLeft animate__delay-2s"
                    animateOnce
                  >
                    <div className={styles.ForHumanity_Score_Item_Value}>
                      <span>1K</span>
                    </div>
                  </AnimationOnScroll>

                  <AnimationOnScroll
                    animateIn="animate__fadeInLeft animate__delay-2s"
                    animateOnce
                  >
                    <div className={styles.ForHumanity_Score_Item_Description}>
                      satellite networks
                    </div>
                  </AnimationOnScroll>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.Container}>
          <div className={styles.ForHumanity_About}>
            <AnimationOnScroll
              animateIn="animate__fadeInLeft animate__delay-1s"
              animateOnce
            >
              <div className={styles.ForHumanity_About_Text}>
                <p>
                  The power of the USF helps people who need it the most to live
                  free and without any infringement. We would like to unite the
                  world as we are one.
                </p>
              </div>
            </AnimationOnScroll>

            <AnimationOnScroll
              animateIn="animate__fadeInLeft animate__delay-1s"
              animateOnce
            >
              <div className={styles.ForHumanity_About_Text}>
                <p>
                  The USF philosophy is that the world is one, and there are no
                  differences between the nations, people and countries. We want
                  to show that there is a whole space to explore and live in
                  peace and harmony.
                </p>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForHumanity;
