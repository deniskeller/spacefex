import { BaseContainer, BaseTitle } from '@base/index';
import { BlockchainFeaturesItem, BlockNumber } from '@content/index';
import React from 'react';
import styles from './BlockchainFeatures.module.scss';

const BlockchainFeatures = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.BlockchainFeatures}>
            <BlockNumber number="3" className={styles.NumberIcon} />

            <BaseTitle className={styles.BlockchainFeatures_Title}>
              Blockchain features
            </BaseTitle>

            <div className={styles.BlockchainFeatures_Items}>
              <BlockchainFeaturesItem title="Stability" />
              <BlockchainFeaturesItem title="Eco Friendly" />
              <BlockchainFeaturesItem title="Security" />
              <BlockchainFeaturesItem title="Low Cost" />
              <BlockchainFeaturesItem title="Global" />
              <BlockchainFeaturesItem title="Developer Tools" />
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default BlockchainFeatures;
