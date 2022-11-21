import React, { ReactNode } from 'react';
import { BaseIcon } from '@base/index';
import styles from './NavbarAccordionItem.module.scss';
import { ALL_ICONS } from '@constants/icons';
import Link from 'next/link';

interface list {
  name: string;
  href: string;
}

interface IProps {
  title: string;
  list: list[];
}

const NavbarAccordionItem: React.FC<IProps> = ({ title, list }) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(true);

  return (
    <>
      <div className={styles.AccordionCareerItem}>
        <div
          className={styles.AccordionHeader}
          onClick={() => setIsVisible(!isVisible)}
        >
          <div className={styles.AccordionHeaderTitle}>{title}</div>

          <div className={`${styles.AccordionHeaderToggle} ${styles.Open}`}>
            <BaseIcon
              icon={ALL_ICONS.SHOW_MORE_ARROW}
              viewBox="0 0 18 9"
              className={styles.IconAccordionOpen}
            />
          </div>
        </div>
        <div
          className={`${styles.AccordionContent} ${
            isVisible ? styles.AccordionContentHidden : ''
          }`}
        >
          <ul className={styles.Navbar_Ul}>
            {list?.map((el, i) => {
              return (
                <li className={styles.Navbar_Li} key={i}>
                  <Link href={el.href}>
                    <span>{el.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarAccordionItem;
