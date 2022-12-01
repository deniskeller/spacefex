import React from 'react';
import styles from './BaseTextarea.module.scss';

interface Props {
  type?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  error?: string | boolean;
  value: string;
  maxLength?: number;
  onChange(value: string): void;
}

const BaseTextarea: React.FC<Props> = ({
  value,
  error,
  name,
  required,
  placeholder,
  className = '',
  maxLength,
  onChange,
}) => {
  return (
    <div className={`${styles.BaseTextarea} ${className}`}>

      <textarea
        value={value}
        name={name}
        maxLength={maxLength}
        placeholder={placeholder}
        required={required}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          onChange(e.target.value)
        }
        className={`${styles.Textarea} ${error ? styles.Error : ''}`}
      />

      {error ? <div className={styles.ErrorText}><span>{error}</span></div> : null}
    </div>
  );
};
export default BaseTextarea;
