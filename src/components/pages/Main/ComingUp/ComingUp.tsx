import { BaseContainer, BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { BlockNumber, ComingUpSoonItem } from '@content/index';
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
              <ComingUpSoonItem
                offsetDegree="0"
                text="Launch of the first software version"
                className={styles.ComingUp_Soon_Item}
              />

              <ComingUpSoonItem
                offsetDegree="90"
                text="Launch of the first satellite"
                className={styles.ComingUp_Soon_Item}
              />

              <ComingUpSoonItem
                offsetDegree="30"
                text="The official first launch of the blockchain network"
                className={styles.ComingUp_Soon_Item}
              />

              <ComingUpSoonItem
                offsetDegree="150"
                text="Launch of the USF"
                className={styles.ComingUp_Soon_Item}
              />

              <ComingUpSoonItem
                offsetDegree="220"
                text="Developing the community network"
                className={styles.ComingUp_Soon_Item}
              />
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default ComingUp;
