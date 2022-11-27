import {
  BaseContainer,
  BaseIcon,
  BaseInput,
  BaseText,
  BaseTitle,
} from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { BlockNumber } from '@content/index';
import React from 'react';
import styles from './Contacts.module.scss';

const Contacts = () => {
  const [value, setValue] = React.useState<string>('');
  return (
    <>
      <div className={styles.Wrapper}>
        <div
          className={styles.Background}
          style={{ backgroundImage: 'url(/images/image/dust.jpg)' }}
        ></div>

        <BaseIcon
          viewBox="0 0 668 78"
          icon={ALL_ICONS.DECOR_1}
          className={styles.DecorIcon}
        />

        <BaseContainer>
          <div className={styles.Contacts}>
            <BlockNumber number="c1" className={styles.NumberIcon} />

            <BaseTitle className={styles.Contacts_Title}>Contacts</BaseTitle>

            <div className={styles.Contacts_Content}>
              <BaseInput
                name="mail"
                placeholder="Enter e-mail address"
                error="Wrong email format"
                value={value}
                onChange={(val: string) => setValue(val)}
                className={styles.Input}
              />
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default Contacts;
