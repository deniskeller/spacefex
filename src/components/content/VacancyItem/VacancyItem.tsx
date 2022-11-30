import React, { ReactNode } from 'react';
import styles from './VacancyItem.module.scss';

interface IProps {
  children: ReactNode | ReactNode[];
  title: string;
}

const VacancyItem: React.FC<IProps> = ({ title, children }) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(true);

  return (
    <>
      <div
        className={`${styles.VacancyItem} ${
          !isVisible ? styles.VacancyItem_Active : ''
        }`}
      >
        <div
          className={styles.VacancyItem_Header}
          onClick={() => setIsVisible(!isVisible)}
        >
          <div className={styles.VacancyItem_Header_Title}>{title}</div>

          <div className={styles.VacancyItem_Header_Icon}>
            <svg
              viewBox="0 0 34 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${styles.VacancyItem_Header_Icon_Toggle} ${
                !isVisible ? styles.Open : ''
              }`}
            >
              <path
                d="M32.7137 1.71436L16.9994 13.1429L1.28516 1.71436"
                stroke="#171719"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        <div
          className={`${styles.VacancyItem_Content} ${
            isVisible ? styles.VacancyItem_Content_Hidden : ''
          }`}
        >
          <div className={styles.Container}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default VacancyItem;
