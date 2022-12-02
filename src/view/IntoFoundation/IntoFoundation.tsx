import {
  BaseButton,
  BaseContainer,
  BaseIcon,
  BaseInput,
  BaseSelect,
  BaseText,
  BaseTextarea,
  BaseTitle,
} from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { BlockNumber, PhoneInput } from '@content/index';
import { countries } from '@services/index';
import Link from 'next/link';
import React from 'react';
import styles from './IntoFoundation.module.scss';

interface IValueForm {
  name: string;
  company_name: string;
  email: string;
  phone: string;
  country: string;
  comments: string;
}

const IntoFoundation = () => {
  const [value, setValue] = React.useState<IValueForm>({
    name: '',
    company_name: '',
    email: '',
    phone: '',
    country: '',
    comments: '',
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

        <div className={styles.IntoFoundation}>
          <BaseContainer>
            <div className={styles.Container}>
              <BlockNumber number="if" className={styles.NumberIcon} />
              <BaseTitle className={styles.IntoFoundation_Title}>
                Into Foundation
              </BaseTitle>
            </div>

            <div className={styles.IntoFoundation_About}>
              <div className="Header_animated animate__animated animate__fadeInLeft">
                <div className={styles.IntoFoundation_About_Paragraph}>
                  <BaseText>
                    If you like what we are doing, we would be grateful for your
                    support. Your name would be on a list of official
                    contributors, or if you wish to stay confidential, we will
                    thank you privately for your support and trust.
                  </BaseText>
                </div>

                <div className={styles.IntoFoundation_About_Paragraph}>
                  <BaseText>
                    <Link href="http://www.link.com" target="_blank">
                      www.link.com
                    </Link>
                  </BaseText>
                </div>

                <div className={styles.IntoFoundation_About_Paragraph}>
                  <BaseText>
                    We accept only USDT and USDC for contributions.
                  </BaseText>
                </div>

                <div className={styles.IntoFoundation_About_Paragraph}>
                  <BaseText>
                    If you wish to become the official investor, please fill out
                    the form below, and we will contact you asap to learn more
                    about how we can build the space world together:
                  </BaseText>
                </div>
              </div>
            </div>
            <div className={styles.IntoFoundation_Content}>
              <div className={styles.IntoFoundation_Content_Form}>
                <div className={styles.IntoFoundation_Content_Form_Actions}>
                  {!success ? (
                    <>
                      <BaseInput
                        name="name"
                        placeholder="Enter Name"
                        value={value.name}
                        onChange={(val: string) => setNewValue(val, 'name')}
                        className={
                          styles.IntoFoundation_Content_Form_Actions_Input
                        }
                      />

                      <BaseInput
                        name="company_name"
                        placeholder="Enter Company Name"
                        value={value.company_name}
                        onChange={(val: string) =>
                          setNewValue(val, 'company_name')
                        }
                        className={
                          styles.IntoFoundation_Content_Form_Actions_Input
                        }
                      />

                      <BaseInput
                        name="email"
                        placeholder="Enter Email"
                        value={value.email}
                        onChange={(val: string) => setNewValue(val, 'email')}
                        className={
                          styles.IntoFoundation_Content_Form_Actions_Input
                        }
                      />

                      <PhoneInput
                        placeholder="Enter Phone"
                        value={value.phone}
                        onChange={(val: string) => setNewValue(val, 'phone')}
                        className={
                          styles.IntoFoundation_Content_Form_Actions_Input
                        }
                      />

                      <BaseSelect
                        placeholder="Select Country"
                        options={countries}
                        onChange={(val: string) => setNewValue(val, 'country')}
                        className={
                          styles.IntoFoundation_Content_Form_Actions_Input
                        }
                      />

                      <BaseTextarea
                        name="comments"
                        placeholder="Leave A Comment"
                        value={value.comments}
                        onChange={(val: string) => setNewValue(val, 'comments')}
                        className={
                          styles.IntoFoundation_Content_Form_Actions_Input
                        }
                      />

                      <BaseButton
                        title="Submit"
                        type="danger"
                        className={
                          styles.IntoFoundation_Content_Form_Actions_Button
                        }
                        onClick={() => setSuccess(true)}
                      />
                    </>
                  ) : (
                    <>
                      <div
                        className={
                          styles.IntoFoundation_Content_Form_Actions_Success
                        }
                        style={{ opacity: success ? '1' : '0' }}
                      >
                        <div
                          className={
                            styles.IntoFoundation_Content_Form_Actions_Success_Title
                          }
                        >
                          <span>Thank you!</span>
                        </div>

                        <div
                          className={
                            styles.IntoFoundation_Content_Form_Actions_Success_Subtitle
                          }
                        >
                          Your email was succesfully added to our list!
                        </div>

                        <BaseIcon
                          icon={ALL_ICONS.SUCCESS_DONE}
                          viewBox="0 0 21 15"
                          className={
                            styles.IntoFoundation_Content_Form_Actions_Success_Icon
                          }
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className={styles.IntoFoundation_Content_Image}>
                <div
                  className={styles.Image}
                  style={{
                    backgroundImage:
                      'url(/images/image/into-foundation-image.jpg)',
                  }}
                >
                  <BaseIcon
                    viewBox="0 0 668 255"
                    icon={ALL_ICONS.DECOR_2}
                    className={styles.DecorIcon}
                  />

                  <div className={styles.IntoFoundation_Content_Image_Id}>
                    <span>0rh7i3i002</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.IntoFoundation_Feedback}>
              <BaseText>
                If you wish to contribute and receive the USF before the
                official launch, please contact us, and we will reply to you
                back as soon as possible and explain the procedure. But it would
                be really easy.
              </BaseText>
            </div>
          </BaseContainer>
        </div>
      </div>
    </>
  );
};

export default IntoFoundation;
