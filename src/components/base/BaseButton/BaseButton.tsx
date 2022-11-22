import React from 'react';
import styles from './BaseButton.module.scss';

interface Props {
  title?: string;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  type?: string;
  disabled?: boolean;
  className?: string;
  style?: object;
}

const BaseButton: React.FC<Props> = ({
  title = '',
  onClick,
  type = 'default',
  disabled = false,
  className = '',
  style,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} ${styles.Button} ${styles['Button_' + type]}`}
      style={style}
    >
      <div className={styles.Title}>{title}</div>
    </button>
  );
};

export default BaseButton;
