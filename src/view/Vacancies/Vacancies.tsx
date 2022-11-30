import {
  AvaiableVacancies,
  VacanciesForm,
  VacanciesHeader,
} from 'components/pages/Vacancies';
import React from 'react';
import styles from './Vacancies.module.scss';

const Vacancies = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <div
          className={styles.Background}
          style={{ backgroundImage: 'url(/images/image/dust.jpg)' }}
        ></div>
        <VacanciesHeader />
        <AvaiableVacancies />
        <VacanciesForm />
      </div>
    </>
  );
};

export default Vacancies;
