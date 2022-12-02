import { BaseButton, BaseContainer, BaseIcon, BaseInput } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { Logo, NavbarAccordionItem } from '@content/index';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Footer.module.scss';

interface list {
  name: string;
  href: string;
}

interface Links {
  title: string;
  list: list[];
}

const Links: Links[] = [
  {
    title: 'Community',
    list: [
      { name: 'Blog', href: '/blog' },
      { name: 'Join us', href: '/get-started' },
      { name: 'Vacancies', href: '/vacancies' },
      { name: 'Contacts', href: '/contacts' },
      { name: 'Financial statements', href: '/financial-statements' },
    ],
  },
  {
    title: 'Help',
    list: [
      { name: 'General help', href: '/general-help' },
      { name: 'System status', href: '/system-status' },
      { name: 'Community', href: '/community' },
      { name: 'Developers API', href: '/developers-api' },
      { name: 'Reader User Guide', href: '/reader-user-guide' },
    ],
  },
  {
    title: 'Website rules',
    list: [
      { name: 'Terms & Conditions', href: '/terms-&-conditions' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Cookie Policy', href: '/cookie-policy' },
      {
        name: 'General Data Protection Act',
        href: '/general-data-protection-act',
      },
    ],
  },
  {
    title: 'Contributors',
    list: [{ name: 'Into foundation', href: '/into-foundation' }],
  },
];

const Footer = () => {
  const [value, setValue] = React.useState<string>('');
  const [success, setSuccess] = React.useState<boolean>(false);

  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <footer className={styles.Footer}>
            <div className={styles.Footer_Top}>
              <div className={styles.Footer_Logo}>
                <Logo className={styles.Logo} />
                <div className={styles.Copyright}>
                  © 2022 Spacefex Development Foundation & Spacefex Technologies
                  Limited, together with USF
                </div>
              </div>

              <div className={styles.Navbar}>
                {Links?.map((item, index) => {
                  return (
                    <NavbarAccordionItem
                      key={index}
                      title={item.title}
                      list={item.list}
                    />
                  );
                })}
              </div>
            </div>

            <div className={styles.Footer_Bottom}>
              <div className={styles.Form}>
                {!success ? (
                  <div
                    className={styles.FormEmail}
                    style={{ opacity: !success ? '1' : '0' }}
                  >
                    <div className={styles.Form_Title}>
                      <span>Subscribe to our monthly roundup</span>
                    </div>
                    <div className={styles.Form_Actions}>
                      <BaseInput
                        name="mail"
                        placeholder="Enter e-mail address"
                        type="mail"
                        value={value}
                        onChange={(val: string) => setValue(val)}
                        className={styles.Input}
                      />

                      <BaseButton
                        title="Subscribe"
                        onClick={() => setSuccess(true)}
                        className={styles.Button}
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <div
                      className={styles.SuccessAlert}
                      style={{ opacity: success ? '1' : '0' }}
                    >
                      <BaseIcon
                        icon={ALL_ICONS.SUCCESS_DONE}
                        viewBox="0 0 21 15"
                        className={styles.SuccessAlert_Icon}
                      />
                      <div className={styles.SuccessAlert_Title}>
                        <span>Thank you!</span>
                      </div>
                      <div className={styles.SuccessAlert_Subtitle}>
                        Your email was sucesfully added to our list!
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className={styles.Social}>
                <Link href="/">
                  <BaseIcon
                    viewBox="0 0 11 19"
                    icon={ALL_ICONS.FACEBOOK}
                    className={`${styles.SocialIcon} ${styles.Facebook}`}
                  />
                </Link>

                <Link href="/">
                  <BaseIcon
                    viewBox="0 0 20 20"
                    icon={ALL_ICONS.LINKEDIN}
                    className={`${styles.SocialIcon} ${styles.Linkedin}`}
                  />
                </Link>

                <Link href="/">
                  <BaseIcon
                    viewBox="0 0 24 20"
                    icon={ALL_ICONS.TWITTER}
                    className={`${styles.SocialIcon} ${styles.Twitter}`}
                  />
                </Link>

                <Link href="/">
                  <BaseIcon
                    viewBox="0 0 20 24"
                    icon={ALL_ICONS.TIKTOK}
                    className={`${styles.SocialIcon} ${styles.Tiktok}`}
                  />
                </Link>

                <Link href="/">
                  <BaseIcon
                    viewBox="0 0 20 20"
                    icon={ALL_ICONS.INSTAGRAM}
                    className={`${styles.SocialIcon} ${styles.Instagram}`}
                  />
                </Link>
              </div>
            </div>
          </footer>
        </BaseContainer>
      </div>
    </>
  );
};

export default Footer;
