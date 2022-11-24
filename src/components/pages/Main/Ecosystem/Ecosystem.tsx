import { BaseButton, BaseContainer, BaseTitle } from '@base/index';
import { BlockNumber } from '@content/index';
import React from 'react';
import styles from './Ecosystem.module.scss';

const accordionImages = [
  { title: 'Satellites', image: 'accordion-slide1.jpg' },
  { title: 'Blockchain mobile software', image: 'accordion-slide2.jpg' },
  {
    title: 'Blockchain software for PCs and other devices',
    image: 'accordion-slide3.jpg',
  },
  { title: 'Server infrastructure', image: 'accordion-slide4.jpg' },
  { title: 'USF wallets', image: 'accordion-slide5.jpg' },
];

const Ecosystem = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.Ecosystem}>
            <BlockNumber number="5" className={styles.NumberIcon} />

            <BaseTitle className={styles.Ecosystem_Title}>
              View of ecosystem
            </BaseTitle>

            <ul className={styles.Ecosystem_AccordionSlider}>
              {accordionImages?.map((item, index) => {
                return (
                  <li
                    key={index}
                    style={{
                      backgroundImage: `url(/images/image/${item.image})`,
                    }}
                  >
                    <div className={styles.SlideTitle}>
                      <span>{item.title}</span>
                    </div>
                    <div className={`${styles.SlideTitle} ${styles.Active}`}>
                      <span>{item.title}</span>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className={styles.Ecosystem_Subtitle}>
              <h2>Interested in learning more?</h2>
            </div>

            <BaseButton
              title="Follow"
              type="danger"
              className={styles.Ecosystem_Button}
            />
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default Ecosystem;
