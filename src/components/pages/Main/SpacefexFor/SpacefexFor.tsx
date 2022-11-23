import { BaseContainer, BaseText, BaseTitle } from '@base/index';
import Image from 'next/image';
import React from 'react';
import styles from './SpacefexFor.module.scss';

const SpacefexFor = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.SpacefexFor}>
            <div className={styles.SpacefexFor_Image}>
              <div className={styles.SpacefexFor_Image_Astro}>
                <Image
                  src="/images/image/astro.jpg"
                  layout="fill"
                  alt={'Image'}
                  priority
                />
              </div>
            </div>

            <div className={styles.SpacefexFor_About}>
              <BaseTitle className={styles.SpacefexFor_About_Title}>
                Spacefex for
              </BaseTitle>

              <div className={styles.SpacefexFor_About_Item}>
                <BaseTitle
                  type="h2"
                  className={styles.SpacefexFor_About_Item_Title}
                >
                  International Finance
                </BaseTitle>
                <BaseText className={styles.SpacefexFor_About_Item_Description}>
                  the first global currency that unites the countries is based
                  on the stability of the whole world economy without dividing
                  by countries.
                </BaseText>
              </div>

              <div className={styles.SpacefexFor_About_Item}>
                <BaseTitle
                  type="h2"
                  className={styles.SpacefexFor_About_Item_Title}
                >
                  Space Economy
                </BaseTitle>
                <BaseText className={styles.SpacefexFor_About_Item_Description}>
                  create entirely new opportunities for building the new space
                  economy and space projects.
                </BaseText>
              </div>

              <div className={styles.SpacefexFor_About_Item}>
                <BaseTitle
                  type="h2"
                  className={styles.SpacefexFor_About_Item_Title}
                >
                  Remittances
                </BaseTitle>
                <BaseText className={styles.SpacefexFor_About_Item_Description}>
                  minimise friction and costs when sending remittances using
                  USF.
                </BaseText>
              </div>

              <div className={styles.SpacefexFor_About_Item}>
                <BaseTitle
                  type="h2"
                  className={styles.SpacefexFor_About_Item_Title}
                >
                  Countries
                </BaseTitle>
                <BaseText className={styles.SpacefexFor_About_Item_Description}>
                  the countries can use USF as their national currency by using
                  the fully-ready digital infrastructure.
                </BaseText>
              </div>

              <div className={styles.SpacefexFor_About_Item}>
                <BaseTitle
                  type="h2"
                  className={styles.SpacefexFor_About_Item_Title}
                >
                  Fintechs
                </BaseTitle>
                <BaseText className={styles.SpacefexFor_About_Item_Description}>
                  fintech platforms can leverage global currency access,
                  compliance tools, and more on USF.
                </BaseText>
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default SpacefexFor;
