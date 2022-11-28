import { BaseButton, BaseContainer, BaseInput, BaseTitle } from '@base/index';
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
                  />
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
