import {
  BaseButton,
  BaseContainer,
  BaseIcon,
  BaseInput,
  BaseTitle,
} from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import React from 'react';
import styles from './VacanciesForm.module.scss';

interface IValueForm {
  name: string;
  company_name: string;
  email: string;
  phone: string;
  country: string;
  comments: string;
}

const VacanciesForm = () => {
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
        <BaseContainer>
          <div className={styles.VacanciesForm}>
            <BaseTitle className={styles.VacanciesForm_Title}>
              Join us
            </BaseTitle>

            <div className={styles.VacanciesForm_Content}>
              <div className={styles.VacanciesForm_Content_Form}>
                {!success ? (
                  <>
                    <BaseInput
                      name="name"
                      placeholder="Name"
                      value={value.name}
                      onChange={(val: string) => setNewValue(val, 'name')}
                      className={styles.VacanciesForm_Content_Form_Input}
                    />
                    <BaseInput
                      name="company_name"
                      placeholder="Surname"
                      value={value.company_name}
                      onChange={(val: string) =>
                        setNewValue(val, 'company_name')
                      }
                      className={styles.VacanciesForm_Content_Form_Input}
                    />
                    <BaseInput
                      name="email"
                      placeholder="Position"
                      value={value.email}
                      onChange={(val: string) => setNewValue(val, 'email')}
                      className={styles.VacanciesForm_Content_Form_Input}
                    />
                    <BaseInput
                      name="phone"
                      placeholder="email"
                      value={value.phone}
                      onChange={(val: string) => setNewValue(val, 'phone')}
                      className={styles.VacanciesForm_Content_Form_Input}
                    />
                    <BaseInput
                      name="country"
                      placeholder="Phone"
                      value={value.country}
                      onChange={(val: string) => setNewValue(val, 'country')}
                      className={styles.VacanciesForm_Content_Form_Input}
                    />
                    <BaseInput
                      name="comments"
                      placeholder="URL to the LinkedIn profile"
                      value={value.comments}
                      onChange={(val: string) => setNewValue(val, 'comments')}
                      className={styles.VacanciesForm_Content_Form_Input}
                    />
                    <BaseInput
                      name="comments"
                      placeholder="TELL US ABOUT YOURSELF"
                      value={value.comments}
                      onChange={(val: string) => setNewValue(val, 'comments')}
                      className={styles.VacanciesForm_Content_Form_Input}
                    />

                    <div
                      className={styles.VacanciesForm_Content_Form_InputFile}
                    ></div>

                    <BaseButton
                      title="Submit"
                      type="danger"
                      className={styles.VacanciesForm_Content_Form_Button}
                      onClick={() => setSuccess(true)}
                    />
                  </>
                ) : (
                  <>
                    <div
                      className={styles.VacanciesForm_Content_Form_Success}
                      style={{ opacity: success ? '1' : '0' }}
                    >
                      <div
                        className={
                          styles.VacanciesForm_Content_Form_Success_Title
                        }
                      >
                        <span>Thank you!</span>
                      </div>

                      <div
                        className={
                          styles.VacanciesForm_Content_Form_Success_Subtitle
                        }
                      >
                        Your email was succesfully added to our list!
                      </div>

                      <BaseIcon
                        icon={ALL_ICONS.SUCCESS_DONE}
                        viewBox="0 0 21 15"
                        className={
                          styles.VacanciesForm_Content_Form_Success_Icon
                        }
                      />
                    </div>
                  </>
                )}
              </div>

              <div className={styles.VacanciesForm_Content_Header}>
                <div className={styles.VacanciesForm_Content_Header_Title}>
                  <h2>Welcome to the Spacefex foundation</h2>
                </div>
                <div className={styles.VacanciesForm_Content_Header_Subtitle}>
                  If you want to join us, please feel free to leave your request
                  here by filling out the form.
                </div>
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default VacanciesForm;
