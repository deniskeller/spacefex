import React, { useEffect } from 'react';
import styles from './Navbar.module.scss';
import { NavbarLink } from '@nav/index';
import { Logo } from '@content/index';

interface Props {}

interface Links {
  [key: string]: string;
}

const links: Links[] = [
  {
    href: '/',
    title: 'Main',
  },
  {
    href: '/ufs',
    title: 'USF',
  },
  {
    href: '/technologies',
    title: 'Technologies',
  },
  {
    href: '/developers',
    title: 'Developers',
  },
  {
    href: '/foundation',
    title: 'Foundation',
  },
  {
    href: '/get-started',
    title: 'Get started',
  },
];

const Navbar: React.FC<Props> = () => {
  const [visible, setVisible] = React.useState(false);
  const thisDrawer = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: any) {
      if (event.keyCode === 27) {
        setVisible(false);
      }
    }

    if (visible) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
      document.body.style.position = 'fixed';
      document.addEventListener('keydown', onKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.position = 'relative';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [visible]);

  return (
    <div
      className={styles.Container}
      style={{ height: `${visible ? '100%' : 'auto'}` }}
    >
      <div className={styles.Navbar}>
        <Logo />

        <ul className={styles.NavbarNavDesktop}>
          {links?.map((link, index) => {
            return (
              <NavbarLink
                href={link.href}
                title={link.title}
                index={index}
                key={index}
              />
            );
          })}
        </ul>
      </div>

      <div className={styles.Drawer} ref={thisDrawer}>
        <div
          className={`${styles.Burger} ${
            visible ? styles.Active : styles.NotActive
          }`}
          onClick={() => setVisible(!visible)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul
          className={`${styles.NavbarNav} ${
            visible ? styles.NavbarNav_Visible : ''
          }`}
          style={{ backgroundImage: 'url(/images/image/mobile-menu-bg.png)' }}
        >
          {links?.map((link, index) => {
            return (
              <NavbarLink
                href={link.href}
                title={link.title}
                index={index}
                key={index}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
