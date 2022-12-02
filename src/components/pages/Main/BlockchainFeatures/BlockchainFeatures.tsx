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
              <BlockchainFeaturesItem
                title="Eco Friendly"
                animation_delay=".2s"
              />
              <BlockchainFeaturesItem title="Security" animation_delay=".4s" />
              <BlockchainFeaturesItem title="Low Cost" animation_delay=".6s" />
              <BlockchainFeaturesItem title="Global" animation_delay=".8s" />
              <BlockchainFeaturesItem
                title="Developer Tools"
                animation_delay="1s"
              />
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default BlockchainFeatures;
