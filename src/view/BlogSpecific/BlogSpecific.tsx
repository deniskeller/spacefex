import React from 'react';
import styles from './BlogSpecific.module.scss';
import { BaseContainer, BaseIcon, BaseTitle } from '@base/index';
import { useRouter } from 'next/router';
import { ALL_ICONS } from '@constants/icons';

const BlogSpecific = () => {
  const router = useRouter();
  return (
    <>
      <div className={styles.Wrapper}>
        <div
          className={styles.Background}
          style={{ backgroundImage: 'url(/images/image/dust.jpg)' }}
        ></div>
        <BaseIcon
          viewBox="0 0 670 257"
          icon={ALL_ICONS.DECOR_2}
          className={styles.DecorIcon}
        />
        <BaseContainer>
          <BaseTitle>PORTFOLIO</BaseTitle>
        </BaseContainer>
      </div>
    </>
  );
};

export default BlogSpecific;
