import React, { ReactNode } from 'react';
import styles from './BaseButton.module.scss';

interface Props {
  children?: ReactNode | ReactNode[];
  title?: string;
  tooltip?: string;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  type?: string;
  disabled?: boolean;
  className?: string;
  style?: object;
}

const BaseButton: React.FC<Props> = ({
  title = '',
  children,
  onClick,
  type = 'default',
  disabled = false,
  className = '',
  style,
  tooltip = '',
}) => {
  return (
    <button
      title={tooltip}
      onClick={onClick}
      disabled={disabled}
      className={`${className} ${styles.Button} ${styles['Button_' + type]}`}
      style={style}
    >
      <span className={styles.Title}>{title}</span>
    </button>
  );
};

export default BaseButton;
