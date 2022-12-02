import React, { useState } from 'react';
import useOnClickOutside from '@hooks/useOnClickOutside';
import styles from './BaseSelect.module.scss';
import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';

interface Props {
  placeholder?: string;
  type?: string;
  className?: string;
  error?: string | boolean;
  options: ISelectItem[];
  onChange: (value: string) => void;
}

interface ISelectItem {
  name: string;
  code: string;
}

const BaseSelect: React.FC<Props> = ({
  placeholder,
  className,
  type = 'default',
  options,
  error,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const selectContainerRef = React.useRef(null);

  const clickOutsideHandler = () => setIsOpen(false);
  useOnClickOutside(selectContainerRef, clickOutsideHandler);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    onChange(value);
  };

  return (
    <div
      className={`${styles.SelectContainer} ${
        styles['Select_' + type]
      } ${className} ${error ? styles.SelectError : ''} `}
      ref={selectContainerRef}
    >
      <div
        className={`${styles.SelectHeader}  ${
          isOpen ? styles.SelectHeaderFocus : ''
        } ${error ? styles.Error : ''}`}
        onClick={toggling}
      >
        <p className={`${selectedOption ? styles.NotEmpty : styles.Empty}`}>
          {selectedOption || placeholder}
        </p>

        <BaseIcon
          icon={ALL_ICONS.SHOW_MORE_ARROW}
          viewBox="0 0 18 9"
          className={`${styles.IconArrow} ${
            isOpen ? styles.IconArrowActive : null
          }`}
        />
      </div>
      {error ? (
        <div className={styles.ErrorText}>
          <span>{error}</span>
        </div>
      ) : (
        ''
      )}
      {isOpen && (
        <ul className={styles.SelectList}>
          {options.map((option: ISelectItem) => (
            <li
              className={`${styles.ListItem} ${
                selectedOption === option.name ? styles.Active : ''
              }`}
              onClick={onOptionClicked(option.name)}
              key={Math.random()}
            >
              <span className={styles.ListItem_Title}>{option.name}</span>

              {selectedOption === option.name ? (
                <BaseIcon
                  icon={ALL_ICONS.SELECT_ACTIVE}
                  viewBox="0 0 19 14"
                  className={styles.ListItem_Icon}
                />
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BaseSelect;
