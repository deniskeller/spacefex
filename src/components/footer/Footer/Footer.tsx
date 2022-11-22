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
      { name: 'Join us', href: '/оoin-us' },
      { name: 'Vacancies', href: '/мacancies' },
      { name: 'Contacts', href: '/сontacts' },
      { name: 'Financial statements', href: '/аinancial-statements' },
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
              <div className={styles.Social}>
                <div className={styles.SocialItems}>
                  <Link href="/">
                    <div className={`${styles.SocialIcon} ${styles.Facebook}`}>
                      <BaseIcon viewBox="0 0 9 19" icon={ALL_ICONS.FACEBOOK} />
                    </div>
                  </Link>

                  <Link href="/">
                    <div className={`${styles.SocialIcon} ${styles.Instagram}`}>
                      <BaseIcon
                        viewBox="0 0 17 18"
                        icon={ALL_ICONS.INSTAGRAM}
                        className={styles.Icon}
                      />
                    </div>
                  </Link>

                  <Link href="/">
                    <div className={`${styles.SocialIcon} ${styles.Twitter}`}>
                      <BaseIcon
                        viewBox="0 0 20 17"
                        icon={ALL_ICONS.TWITTER}
                        className={styles.Icon}
                      />
                    </div>
                  </Link>

                  <Link href="/">
                    <div className={`${styles.SocialIcon} ${styles.Linkedin}`}>
                      <BaseIcon
                        viewBox="0 0 18 18"
                        icon={ALL_ICONS.LINKEDIN}
                        className={styles.Icon}
                      />
                    </div>
                  </Link>
                </div>

                <div className={styles.LinkHosted}>
                  <span>
                    Hosted at&nbsp;
                    <Link href="/">Google Cloud</Link>
                  </span>
                </div>
              </div>

              <div className={styles.Form}>
                {!success ? (
                  <span
                    className={styles.FormEmail}
                    style={{ opacity: !success ? '1' : '0' }}
                  >
                    <div className={styles.Form_Title}>
                      <span>SUBMIT FOR UPDATES</span>
                    </div>
                    <div className={styles.Form_Actions}>
                      <BaseInput
                        name="mail"
                        placeholder="Email address"
                        type="mail"
                        value={value}
                        onChange={(val: string) => setValue(val)}
                        className={styles.Input}
                      />
                      <BaseButton
                        type="success"
                        onClick={() => setSuccess(true)}
                        className={styles.Button}
                      >
                        {/* <BaseIcon
                        viewBox="0 0 31 24"
                        icon={ALL_ICONS.ARROW_RIGHT}
                        className={styles.Icon}
                      /> */}
                      </BaseButton>
                    </div>
                  </span>
                ) : (
                  <>
                    <div
                      className={styles.SuccessAlert}
                      style={{ opacity: success ? '1' : '0' }}
                    >
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

              <div className={styles.Employees}>
                <div className={styles.Mastercard}>
                  {/* <BaseIcon
                  viewBox="0 0 45 33"
                  icon={ALL_ICONS.MASTERCARD}
                  className={styles.Icon}
                /> */}
                </div>
                <div className={styles.Ico}>
                  <Image
                    src="/images/icon/ico.png"
                    layout="fill"
                    alt={'Employees images'}
                  />
                </div>
                <div className={styles.Pci}>
                  {/* <BaseIcon
                  viewBox="0 0 91 30"
                  icon={ALL_ICONS.PCI}
                  className={styles.Icon}
                /> */}
                </div>
              </div>
            </div>
          </footer>
        </BaseContainer>
      </div>
    </>
  );
};

export default Footer;
