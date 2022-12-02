import {
  BaseButton,
  BaseContainer,
  BaseIcon,
  BaseInput,
  BaseTitle,
} from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { BlockNumber } from '@content/index';
import React from 'react';
import styles from './GetStarted.module.scss';

interface IValueForm {
  company_name: string;
  email: string;
}

const GetStarted = () => {
  const [value, setValue] = React.useState<IValueForm>({
    company_name: '',
    email: '',
  });

  const setNewValue = (val: string | number | File[], key: string) => {
    setValue((prev) => ({ ...prev, [key]: val }));
  };

  const [success, setSuccess] = React.useState<boolean>(false);

  return (
    <>
      <div className={styles.Wrapper}>
        <div
          className={styles.Background}
          style={{ backgroundImage: 'url(/images/image/dust.jpg)' }}
        ></div>

        <div className={styles.GetStarted}>
          <BaseContainer>
            <div className="Header_animated animate__animated animate__fadeInLeft">
              <BaseTitle className={styles.GetStarted_Title}>
                Welcome to space finance!
              </BaseTitle>
            </div>

            <div className={styles.GetStarted_Content}>
              <div
                className={styles.GetStarted_Content_Image}
                style={{
                  backgroundImage: 'url(/images/image/get-started-image.png)',
                }}
              >
                <BaseIcon
                  viewBox="0 0 668 314"
                  icon={ALL_ICONS.DECOR_3}
                  className={styles.DecorIcon}
                />
              </div>

              <div className={styles.GetStarted_Content_Form}>
                <BlockNumber number="gs" className={styles.NumberIcon} />

                <div className={styles.GetStarted_Content_Form_Actions}>
                  {!success ? (
                    <>
                      <div className={styles.GetStarted_Content_Form_Title}>
                        <h2>Please continue to join us and explore the USF</h2>
                      </div>

                      <BaseInput
                        name="name"
                        placeholder="Company name"
                        value={value.company_name}
                        onChange={(val: string) =>
                          setNewValue(val, 'company_name')
                        }
                        className={styles.GetStarted_Content_Form_Actions_Input}
                      />

                      <BaseInput
                        name="email"
                        placeholder="Enter Email"
                        value={value.email}
                        onChange={(val: string) => setNewValue(val, 'email')}
                        className={styles.GetStarted_Content_Form_Actions_Input}
                      />

                      <BaseButton
                        title="Join the space finance"
                        type="danger"
                        className={
                          styles.GetStarted_Content_Form_Actions_Button
                        }
                        onClick={() => setSuccess(true)}
                      />
                    </>
                  ) : (
                    <>
                      <div
                        className={
                          styles.GetStarted_Content_Form_Actions_Success
                        }
                        style={{ opacity: success ? '1' : '0' }}
                      >
                        <div
                          className={
                            styles.GetStarted_Content_Form_Actions_Success_Title
                          }
                        >
                          <span>Thank you!</span>
                        </div>

                        <div
                          className={
                            styles.GetStarted_Content_Form_Actions_Success_Subtitle
                          }
                        >
                          Your email was succesfully added to our list!
                        </div>

                        <BaseIcon
                          icon={ALL_ICONS.SUCCESS_DONE}
                          viewBox="0 0 21 15"
                          className={
                            styles.GetStarted_Content_Form_Actions_Success_Icon
                          }
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </BaseContainer>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
