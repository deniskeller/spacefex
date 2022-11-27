import React from 'react';
import styles from './BaseInput.module.scss';

interface Props {
  type?: string;
  name: string;
  min?: number;
  max?: number;
  placeholder?: string;
  required?: boolean;
  className?: string;
  autocomplete?: string;
  error?: string | boolean;
  value: string | number;
  onChange(value: string | number): void;
  onKeyDown?: React.KeyboardEventHandler;
}

const BaseInput: React.FC<Props> = ({
  value,
  type = 'text',
  error,
  name,
  min,
  max,
  required = false,
  placeholder,
  className = '',
  autocomplete = 'off',
  onChange,
  onKeyDown,
}) => {
  const [focus, setFocus] = React.useState<boolean>(false);

  return (
    <div className={`${styles.BaseInput} ${className}`}>
      <input
        value={value}
        type={type}
        className={`${styles.Input} ${error ? styles.Error : ''}`}
        name={name}
        min={min}
        max={max}
        placeholder={placeholder}
        required={required}
        autoComplete={autocomplete}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        onKeyDown={onKeyDown}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />

      {error ? (
        <div className={styles.ErrorText}>
          <span>{error}</span>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
export default BaseInput;
