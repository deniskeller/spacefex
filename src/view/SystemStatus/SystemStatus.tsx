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
import styles from './SystemStatus.module.scss';

interface IValueForm {
  name: string;
  email: string;
  comments: string;
}

const SystemStatus = () => {
  const [value, setValue] = React.useState<IValueForm>({
    name: '',
    email: '',
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

        <div className={styles.SystemStatus}>
          <BaseContainer>
            <div className={styles.Container}>
              <div className={styles.SystemStatus_Header}>
                <BlockNumber number="ss" className={styles.NumberIcon} />

                <BaseTitle className={styles.SystemStatus_Title}>
                  System status
                </BaseTitle>
              </div>
            </div>
          </BaseContainer>

          <div className={styles.SystemStatus_Iframe}>
            {/* тут что-то будет */}
          </div>

          <div className={styles.Container}>
            <BaseContainer>
              <div className={styles.SystemStatus_NewPage}>
                <div className={styles.SystemStatus_NewPage_Page}>
                  <BaseTitle className={styles.SystemStatus_NewPage_Page_Title}>
                    Community
                  </BaseTitle>

                  <div className={styles.SystemStatus_NewPage_Page_Soon}>
                    Coming
                    <br />
                    Soon
                  </div>
                </div>

                <div className={styles.SystemStatus_NewPage_Page}>
                  <BaseTitle className={styles.SystemStatus_NewPage_Page_Title}>
                    Developers API
                  </BaseTitle>

                  <div className={styles.SystemStatus_NewPage_Page_Soon}>
                    Coming
                    <br />
                    Soon
                  </div>
                </div>

                <div className={styles.SystemStatus_NewPage_Page}>
                  <BaseTitle className={styles.SystemStatus_NewPage_Page_Title}>
                    Reader User Guide
                  </BaseTitle>

                  <div className={styles.SystemStatus_NewPage_Page_Soon}>
                    Coming
                    <br />
                    Soon
                  </div>
                </div>

                <div className={styles.SystemStatus_NewPage_Page}>
                  <BaseTitle className={styles.SystemStatus_NewPage_Page_Title}>
                    General help
                  </BaseTitle>
                </div>
              </div>

              <div className={styles.SystemStatus_Form}>
                <div className={styles.SystemStatus_Form_Title}>
                  If you have any questions, please feel free to contact us:
                </div>

                <div className={styles.SystemStatus_Form_Actions}>
                  {!success ? (
                    <>
                      <BaseInput
                        name="name"
                        placeholder="Enter name"
                        value={value.name}
                        onChange={(val: string) => setNewValue(val, 'name')}
                        className={styles.SystemStatus_Form_Actions_Input}
                      />

                      <BaseInput
                        name="email"
                        placeholder="Enter Email"
                        value={value.email}
                        onChange={(val: string) => setNewValue(val, 'email')}
                        className={styles.SystemStatus_Form_Actions_Input}
                      />

                      <BaseInput
                        name="comments"
                        placeholder="Enter comments"
                        value={value.comments}
                        onChange={(val: string) => setNewValue(val, 'comments')}
                        className={styles.SystemStatus_Form_Actions_Input}
                      />

                      <BaseButton
                        title="submit"
                        type="danger"
                        className={styles.SystemStatus_Form_Actions_Button}
                        onClick={() => setSuccess(true)}
                      />
                    </>
                  ) : (
                    <>
                      <div
                        className={styles.SystemStatus_Form_Actions_Success}
                        style={{ opacity: success ? '1' : '0' }}
                      >
                        <div
                          className={
                            styles.SystemStatus_Form_Actions_Success_Title
                          }
                        >
                          <span>Thank you!</span>
                        </div>

                        <div
                          className={
                            styles.SystemStatus_Form_Actions_Success_Subtitle
                          }
                        >
                          We will answer to you as soon as possible.
                        </div>

                        <BaseIcon
                          icon={ALL_ICONS.SUCCESS_DONE}
                          viewBox="0 0 21 15"
                          className={
                            styles.SystemStatus_Form_Actions_Success_Icon
                          }
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </BaseContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default SystemStatus;
