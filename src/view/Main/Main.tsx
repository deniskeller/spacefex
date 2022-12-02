import {
  BlockchainFeatures,
  Blogs,
  ComingUp,
  Ecosystem,
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
      <div className={styles.Wrapper}>
        <div
          className={styles.Background}
          style={{ backgroundImage: 'url(/images/image/dust.jpg)' }}
        ></div>
        <ComingUp />
        <ForHumanity />
        <BlockchainFeatures />
        <SpacefexFor />
      </div>
      <Ecosystem />
      <Blogs />
    </>
  );
};

export default Main;
