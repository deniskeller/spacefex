import {
  BlockchainFeatures,
  ComingUp,
  ForHumanity,
  Header,
  SpacefexFor,
} from 'components/pages/Main';
import React from 'react';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <>
      <Header />
      <ComingUp />
      <ForHumanity />
      <div
        className={styles.Wrapper}
        style={{ backgroundImage: 'url(/images/image/dust.jpg)' }}
      >
        <BlockchainFeatures />
        <SpacefexFor />
      </div>
    </>
  );
};

export default Main;
