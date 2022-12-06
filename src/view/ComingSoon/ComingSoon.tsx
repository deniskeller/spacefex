import React from 'react';
import styles from './ComingSoon.module.scss';
import { BaseButton, BaseContainer } from '@base/index';
import { useRouter } from 'next/router';

const ComingSoon = () => {
  const router = useRouter();
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.ComingSoon}>
            <div className="animate__animated animate__fadeInDown animate__delay-1s">
              <div className={styles.ComingSoon_Title}>
                <h1>coming soon</h1>
              </div>
            </div>

            <div className="animate__animated animate__fadeIn animate__delay-4s">
              <BaseButton
                type="danger"
                title="BACK TO HOME"
                onClick={() => router.push('/')}
                className={styles.ComingSoon_Button}
              />
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default ComingSoon;
