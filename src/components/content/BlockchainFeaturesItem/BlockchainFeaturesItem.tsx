/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import styles from './BlockchainFeaturesItem.module.scss';
import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { AnimationOnScroll } from 'react-animation-on-scroll';

interface Props {
  title?: string;
  description?: string;
  animation_delay?: string;
}

const BlockchainFeaturesItem: React.FC<Props> = ({
  title = '',
  description = '',
  animation_delay = '0',
}) => {
  const [height, setHeight] = useState(false);
  const onClick = () => {
    setHeight(!height);
  };

  return (
    <div className={styles.Item}>
      <AnimationOnScroll
        animateIn="BlockchainFeaturesItem animate__fadeInLeft"
        animateOnce
        style={{ animationDelay: animation_delay }}
      >
        {title == 'Stability' ? (
          <BaseIcon
            viewBox="0 0 70 70"
            icon={ALL_ICONS.STABILITY}
            className={`${styles.Item_Icon} ${styles.Stability}`}
          />
        ) : title == 'Eco Friendly' ? (
          <BaseIcon
            viewBox="0 0 47 67"
            icon={ALL_ICONS.ECO_FRIENDLY}
            className={`${styles.Item_Icon} ${styles.EcoFriendly}`}
          />
        ) : title == 'Security' ? (
          <BaseIcon
            viewBox="0 0 66 76"
            icon={ALL_ICONS.SECURITY}
            className={`${styles.Item_Icon} ${styles.Security}`}
          />
        ) : title == 'Low Cost' ? (
          <BaseIcon
            viewBox="0 0 38 73"
            icon={ALL_ICONS.LOW_COST}
            className={`${styles.Item_Icon} ${styles.LowCost}`}
          />
        ) : title == 'Global' ? (
          <BaseIcon
            viewBox="0 0 70 70"
            icon={ALL_ICONS.GLOBAL}
            className={`${styles.Item_Icon} ${styles.Global}`}
          />
        ) : title == 'Developer Tools' ? (
          <BaseIcon
            viewBox="0 0 60 70"
            icon={ALL_ICONS.DEVELOPER_TOOLS}
            className={`${styles.Item_Icon} ${styles.DeveloperTools}`}
          />
        ) : null}
      </AnimationOnScroll>

      <div className={styles.Item_Title}>
        <span>{title}</span>
      </div>

      <div
        onClick={onClick}
        className={`${styles.Item_Description} ${
          !height
            ? styles.Item_Description_Hidden
            : styles.Item_Description_Visible
        }`}
      >
        <p className={`${!height ? styles.Hidden : styles.Visible}`}>
          Spacefex has its unique blockchain cryptocurrency, USF - United Space
          Finance, which has the constant average rate of the world's main
          currencies: USD, EUR, CNY, JPY, GBP, and INR. Why such currencies?
          Because, in total, ot forms the majority of people in the world who
          use these currencies daily. By using the average rate of these world
          currencies, allow us to unite all of them under one in USF.
        </p>

        <BaseIcon
          viewBox="0 0 22 41"
          icon={ALL_ICONS.ARROW}
          className={`${styles.Item_IconShowMore} ${
            height ? styles.Item_IconShowMore_Hidden : ''
          }`}
        />
      </div>
    </div>
  );
};

export default BlockchainFeaturesItem;
