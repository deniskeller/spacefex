import { BaseContainer, BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { BlockNumber } from '@content/index';
import Image from 'next/image';
import React from 'react';
import styles from './ComingUp.module.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const ComingUp = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseIcon
          viewBox="0 0 642 80"
          icon={ALL_ICONS.DECOR_1}
          className={styles.DecorIcon}
        />

        <BaseContainer>
          <div className={styles.ComingUp}>
            <BlockNumber className={styles.NumberIcon} />

            <div className={styles.ComingUp_Description}>
              <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce>
                <p>
                  Welcome to the space centre of the new financial world. USF -
                  the United Space Finance is a network for the whole of
                  humanity that is building blockchain solutions that create
                  financial access for everyone, everywhere beyond the earth.
                </p>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce>
                <p>
                  Our mission is for space to be like Neil Armstrong, the first
                  community of people who have launched on the earth orbit the
                  financial infrastructure that would allow humanity to enter
                  into the new space age.
                </p>
              </AnimationOnScroll>
            </div>

            <div className={styles.ComingUp_Title}>
              <h1>Coming Up</h1>
            </div>

            <div className={styles.ComingUp_Soon}>
              <div className={styles.ComingUp_Soon_Item}>
                <div className={styles.ComingUp_Soon_Item_Image}>
                  <Image
                    src="/images/image/satellite@2x.png"
                    layout="fill"
                    alt={'Image'}
                    priority
                  />
                </div>
                <div className={styles.ComingUp_Soon_Item_Title}>
                  Launch of the <br /> first software <br /> version
                </div>
              </div>

              <div className={styles.ComingUp_Soon_Item}>
                <div
                  className={styles.ComingUp_Soon_Item_Image}
                  style={{ animationDelay: '.4s' }}
                >
                  <Image
                    src="/images/image/satellite@2x.png"
                    layout="fill"
                    alt={'Image'}
                    priority
                  />
                </div>
                <div className={styles.ComingUp_Soon_Item_Title}>
                  Launch of the <br /> first satellite
                </div>
              </div>

              <div className={styles.ComingUp_Soon_Item}>
                <div
                  className={styles.ComingUp_Soon_Item_Image}
                  style={{ animationDelay: '.2s' }}
                >
                  <Image
                    src="/images/image/satellite@2x.png"
                    layout="fill"
                    alt={'Image'}
                    priority
                  />
                </div>
                <div className={styles.ComingUp_Soon_Item_Title}>
                  The official <br /> first launch of <br /> the blockchain
                  <br /> network
                </div>
              </div>

              <div className={styles.ComingUp_Soon_Item}>
                <div
                  className={styles.ComingUp_Soon_Item_Image}
                  style={{ animationDelay: '.8s' }}
                >
                  <Image
                    src="/images/image/satellite@2x.png"
                    layout="fill"
                    alt={'Image'}
                    priority
                  />
                </div>
                <div className={styles.ComingUp_Soon_Item_Title}>
                  Launch <br /> of the USF
                </div>
              </div>

              <div className={styles.ComingUp_Soon_Item}>
                <div
                  className={styles.ComingUp_Soon_Item_Image}
                  style={{ animationDelay: '.4s' }}
                >
                  <Image
                    src="/images/image/satellite@2x.png"
                    layout="fill"
                    alt={'Image'}
                    priority
                  />
                </div>
                <div className={styles.ComingUp_Soon_Item_Title}>
                  Developing the <br /> community <br /> network
                </div>
              </div>

              {/* <div className={styles.ComingUp_Soon_Item2}>
                <div className={styles.ComingUp_Soon_Item2_Image}>
                  <Image
                    src="/images/image/satellite@2x.png"
                    layout="fill"
                    alt={'Image'}
                    priority
                  />
                </div>
                <div className={styles.ComingUp_Soon_Item2_Title}>
                  Launch of the <br /> first software <br /> version
                </div>
              </div> */}
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default ComingUp;
