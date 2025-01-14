import {
  BaseButton,
  BaseContainer,
  BaseIcon,
  BaseInput,
  BaseSelect,
  BaseTextarea,
  BaseTitle,
} from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { FileInput, PhoneInput } from '@content/index';
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import styles from './VacanciesForm.module.scss';

const position = [
  { code: 'Copywriter', name: 'Copywriter' },
  { code: 'IT project manager', name: 'IT project manager' },
  { code: 'IOS developer', name: 'IOS developer' },
  { code: 'Marketing director', name: 'Marketing director' },
];

interface IValueForm {
  name: string;
  surname: string;
  position: string;
  email: string;
  phone: string;
  linkedin: string;
  about_yourself: string;
  files: File[];
}

const VacanciesForm = () => {
  const [value, setValue] = React.useState<IValueForm>({
    name: '',
    surname: '',
    position: '',
    email: '',
    phone: '',
    linkedin: '',
    about_yourself: '',
    files: [],
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
                      name="surname"
                      placeholder="Surname"
                      value={value.surname}
                      onChange={(val: string) => setNewValue(val, 'surname')}
                      className={styles.VacanciesForm_Content_Form_Input}
                    />

                    <BaseSelect
                      placeholder="Position"
                      options={position}
                      onChange={(val: string) => setNewValue(val, 'position')}
                      className={styles.VacanciesForm_Content_Form_Input}
                    />

                    <BaseInput
                      name="email"
                      placeholder="Email"
                      value={value.email}
                      onChange={(val: string) => setNewValue(val, 'email')}
                      className={styles.VacanciesForm_Content_Form_Input}
                    />

                    <PhoneInput
                      placeholder="Phone"
                      value={value.phone}
                      onChange={(val: string) => setNewValue(val, 'phone')}
                      className={styles.VacanciesForm_Content_Form_Input}
                    />

                    <BaseInput
                      name="linkedin"
                      placeholder="URL to the LinkedIn profile"
                      value={value.linkedin}
                      onChange={(val: string) => setNewValue(val, 'linkedin')}
                      className={styles.VacanciesForm_Content_Form_Input}
                    />

                    <BaseTextarea
                      name="about_yourself"
                      placeholder="TELL US ABOUT YOURSELF"
                      value={value.about_yourself}
                      onChange={(val: string) =>
                        setNewValue(val, 'about_yourself')
                      }
                      className={styles.VacanciesForm_Content_Form_Input}
                    />

                    <FileInput
                      files={value.files}
                      onChange={(val: any[]) => setNewValue(val, 'files')}
                      className={styles.VacanciesForm_Content_Form_InputFile}
                      isMultiple
                    />

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
                <AnimationOnScroll
                  animateIn="animate__fadeIn animate__delay-1s"
                  animateOnce
                >
                  <div className={styles.VacanciesForm_Content_Header_Title}>
                    <h2>Welcome to the Spacefex foundation</h2>
                  </div>
                  <div className={styles.VacanciesForm_Content_Header_Subtitle}>
                    If you want to join us, please feel free to leave your
                    request here by filling out the form.
                  </div>
                </AnimationOnScroll>
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default VacanciesForm;
