import { BaseContainer, BaseText, BaseTitle } from '@base/index';
import { BlockNumber } from '@content/index';
import Image from 'next/image';
import React from 'react';
import styles from './SpacefexFor.module.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const SpacefexFor = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.SpacefexFor}>
            <div className={styles.SpacefexFor_Image}>
              <Image
                src="/images/image/astro.png"
                fill
                alt={'Image'}
                sizes="(max-width: 564px)"
              />
            </div>

            <div className={styles.SpacefexFor_About}>
              <BlockNumber number="4" className={styles.NumberIcon} />

              <BaseTitle className={styles.SpacefexFor_About_Title}>
                Spacefex for
              </BaseTitle>

              <div className={styles.SpacefexFor_About_Item}>
                <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce>
                  <BaseTitle
                    type="h2"
                    className={styles.SpacefexFor_About_Item_Title}
                  >
                    International Finance
                  </BaseTitle>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce>
                  <BaseText
                    className={styles.SpacefexFor_About_Item_Description}
                  >
                    the first global currency that unites the countries is based
                    on the stability of the whole world economy without dividing
                    by countries.
                  </BaseText>
                </AnimationOnScroll>
              </div>

              <div className={styles.SpacefexFor_About_Item}>
                <AnimationOnScroll
                  animateIn="animate__fadeInDown animate__delay-1s"
                  animateOnce
                >
                  <BaseTitle
                    type="h2"
                    className={styles.SpacefexFor_About_Item_Title}
                  >
                    Space Economy
                  </BaseTitle>
                </AnimationOnScroll>

                <AnimationOnScroll
                  animateIn="animate__fadeInDown animate__delay-1s"
                  animateOnce
                >
                  <BaseText
                    className={styles.SpacefexFor_About_Item_Description}
                  >
                    create entirely new opportunities for building the new space
                    economy and space projects.
                  </BaseText>
                </AnimationOnScroll>
              </div>

              <div className={styles.SpacefexFor_About_Item}>
                <AnimationOnScroll
                  animateIn="animate__fadeInDown animate__delay-2s"
                  animateOnce
                >
                  <BaseTitle
                    type="h2"
                    className={styles.SpacefexFor_About_Item_Title}
                  >
                    Remittances
                  </BaseTitle>
                </AnimationOnScroll>

                <AnimationOnScroll
                  animateIn="animate__fadeInDown animate__delay-2s"
                  animateOnce
                >
                  <BaseText
                    className={styles.SpacefexFor_About_Item_Description}
                  >
                    minimise friction and costs when sending remittances using
                    USF.
                  </BaseText>
                </AnimationOnScroll>
              </div>

              <div className={styles.SpacefexFor_About_Item}>
                <AnimationOnScroll
                  animateIn="animate__fadeInDown animate__delay-3s"
                  animateOnce
                >
                  <BaseTitle
                    type="h2"
                    className={styles.SpacefexFor_About_Item_Title}
                  >
                    Countries
                  </BaseTitle>
                </AnimationOnScroll>

                <AnimationOnScroll
                  animateIn="animate__fadeInDown animate__delay-3s"
                  animateOnce
                >
                  <BaseText
                    className={styles.SpacefexFor_About_Item_Description}
                  >
                    the countries can use USF as their national currency by
                    using the fully-ready digital infrastructure.
                  </BaseText>
                </AnimationOnScroll>
              </div>

              <div className={styles.SpacefexFor_About_Item}>
                <AnimationOnScroll
                  animateIn="animate__fadeInDown animate__delay-4s"
                  animateOnce
                >
                  <BaseTitle
                    type="h2"
                    className={styles.SpacefexFor_About_Item_Title}
                  >
                    Fintechs
                  </BaseTitle>
                </AnimationOnScroll>

                <AnimationOnScroll
                  animateIn="animate__fadeInDown animate__delay-4s"
                  animateOnce
                >
                  <BaseText
                    className={styles.SpacefexFor_About_Item_Description}
                  >
                    fintech platforms can leverage global currency access,
                    compliance tools, and more on USF.
                  </BaseText>
                </AnimationOnScroll>
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default SpacefexFor;
