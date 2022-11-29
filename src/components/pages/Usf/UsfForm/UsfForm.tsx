import { BaseButton, BaseContainer, BaseIcon, BaseInput } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import React from 'react';
import styles from './UsfForm.module.scss';

interface IValueForm {
  name: string;
  email: string;
}

const UsfForm = () => {
  const [value, setValue] = React.useState<IValueForm>({
    name: '',
    email: '',
  });

  const setNewValue = (val: string | number | File[], key: string) => {
    setValue((prev) => ({ ...prev, [key]: val }));
  };

  const [success, setSuccess] = React.useState<boolean>(false);

  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.UsfForm}>
            <div className={styles.UsfForm_Title}>
              Apply now <br /> to get notified about the launch
            </div>

            <div className={styles.UsfForm_Form}>
              {!success ? (
                <>
                  <BaseInput
                    name="name"
                    placeholder="Enter name"
                    value={value.name}
                    onChange={(val: string) => setNewValue(val, 'name')}
                    className={styles.UsfForm_Form_Input}
                  />

                  <BaseInput
                    name="email"
                    placeholder="Enter Email"
                    value={value.email}
                    onChange={(val: string) => setNewValue(val, 'email')}
                    className={styles.UsfForm_Form_Input}
                  />

                  <BaseButton
                    title="Subscribe"
                    type="danger"
                    className={styles.UsfForm_Form_Button}
                    onClick={() => setSuccess(true)}
                  />
                </>
              ) : (
                <>
                  <div
                    className={styles.UsfForm_Form_Success}
                    style={{ opacity: success ? '1' : '0' }}
                  >
                    <div className={styles.UsfForm_Form_Success_Title}>
                      <span>Thank you!</span>
                    </div>

                    <div className={styles.UsfForm_Form_Success_Subtitle}>
                      Your email was succesfully added to our list!
                    </div>

                    <BaseIcon
                      icon={ALL_ICONS.SUCCESS_DONE}
                      viewBox="0 0 21 15"
                      className={styles.UsfForm_Form_Success_Icon}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default UsfForm;
