import React, { useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from './PhoneInput.module.scss';

interface Props {
  placeholder?: string;
  className?: string;
  error?: string | boolean;
  value: string;
  onChange(value: string | number): void;
}

const PhoneInput2: React.FC<Props> = ({
  value,
  error,
  placeholder,
  className = '',
  onChange,
}) => {
  return (
    <div className={`${styles.BaseInput} ${className}`}>
      <PhoneInput
        placeholder={placeholder}
        country={'us'}
        value={value}
        onChange={onChange}
        enableSearch
        searchPlaceholder="Enter"
      />

      {error ? <div className={styles.ErrorText}>{error}</div> : ''}
    </div>
  );
};
export default PhoneInput2;
