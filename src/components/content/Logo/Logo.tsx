import React from 'react';
import styles from './Logo.module.scss';
import Link from 'next/link';
import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';

interface Props {
  className?: string;
}

const Logo: React.FC<Props> = ({ className = '' }) => {
  return (
    <div className={`${styles.Logo} ${className}`}>
      <Link href="/">
        <BaseIcon
          viewBox="0 0 226 31"
          icon={ALL_ICONS.LOGO}
          className={styles.Icon}
        />
      </Link>
    </div>
  );
};

export default Logo;
