/* eslint-disable react/no-unescaped-entities */
import { BaseContainer, BaseTitle } from '@base/index';
import VacancyItem from '@content/VacancyItem/VacancyItem';
import React from 'react';
import styles from './AvaiableVacancies.module.scss';

const AvaiableVacancies = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.AvaiableVacancies}>
            <BaseTitle className={styles.AvaiableVacancies_Title}>
              Avaiable vacancies
            </BaseTitle>

            <ul className={styles.AvaiableVacancies_List}>
              <li className={styles.AvaiableVacancies_List_Li}>
                <VacancyItem title="Copywriter">
                  <div className={styles.VacancyItem}>
                    <div className={styles.VacancyItem_Row}>
                      <div className={styles.VacancyItem_Row_Name}>
                        <span>About the role</span>
                      </div>
                      <div className={styles.VacancyItem_Row_Discription}>
                        <p>
                          Faucibus etiam venenatis ipsum lobortis ullamcorper
                          vitae eros. Nunc ornare suscipit orci pellentesque
                          adipiscing bibendum mi vel magnis. Interdum amet,
                          facilisi tellus eget eu. Pellentesque vivamus
                          malesuada blandit id felis aliquet. Sapien arcu,
                          ultrices tellus faucibus placerat augue a et.
                        </p>
                      </div>
                    </div>

                    <div className={styles.VacancyItem_Row}>
                      <div className={styles.VacancyItem_Row_Name}>
                        <span>What you’ll be doing</span>
                      </div>

                      <div className={styles.VacancyItem_Row_Discription}>
                        <ul className={styles.VacancyItem_Row_Discription_List}>
                          <li>
                            Faucibus etiam venenatis ipsum lobortis ullamcorper
                            vitae eros.
                          </li>
                          <li>
                            Nunc ornare suscipit orci pellentesque adipiscing
                            bibendum mi vel magnis.
                          </li>
                          <li>Interdum amet, facilisi tellus eget eu.</li>
                          <li>
                            Pellentesque vivamus malesuada blandit id felis
                            aliquet.
                          </li>
                          <li>
                            Sapien arcu, ultrices tellus faucibus placerat augue
                            a et.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className={styles.VacancyItem_Row}>
                      <div className={styles.VacancyItem_Row_Name}>
                        <span>What you'll need</span>
                      </div>

                      <div className={styles.VacancyItem_Row_Discription}>
                        <ul className={styles.VacancyItem_Row_Discription_List}>
                          <li>
                            Faucibus etiam venenatis ipsum lobortis ullamcorper
                            vitae eros.
                          </li>
                          <li>
                            Nunc ornare suscipit orci pellentesque adipiscing
                            bibendum mi vel magnis.
                          </li>
                          <li>Interdum amet, facilisi tellus eget eu. </li>
                          <li>
                            Pellentesque vivamus malesuada blandit id felis
                            aliquet.
                          </li>
                          <li>
                            Sapien arcu, ultrices tellus faucibus placerat augue
                            a et.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </VacancyItem>
              </li>

              <li className={styles.AvaiableVacancies_List_Li}>
                <VacancyItem title="IT project manager">
                  <div className={styles.VacancyItem}>
                    <div className={styles.VacancyItem_Row}>
                      <div className={styles.VacancyItem_Row_Name}>
                        <span>About the role</span>
                      </div>
                      <div className={styles.VacancyItem_Row_Discription}>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam vitae laoreet odio. Phasellus suscipit
                          tincidunt enim, et volutpat risus commodo et. Ut
                          cursus laoreet massa, vitae malesuada enim iaculis ut.
                          Pellentesque sed nisl ultrices, tincidunt ante
                          finibus, rutrum diam. Ut non euismod turpis. Aenean
                          eros orci, interdum ut consequat nec, aliquam non
                          justo.
                        </p>
                      </div>
                    </div>

                    <div className={styles.VacancyItem_Row}>
                      <div className={styles.VacancyItem_Row_Name}>
                        <span>What you’ll be doing</span>
                      </div>

                      <div className={styles.VacancyItem_Row_Discription}>
                        <ul className={styles.VacancyItem_Row_Discription_List}>
                          <li>
                            Faucibus etiam venenatis ipsum lobortis ullamcorper
                            vitae eros.
                          </li>
                          <li>
                            Nunc ornare suscipit orci pellentesque adipiscing
                            bibendum mi vel magnis.
                          </li>
                          <li>Interdum amet, facilisi tellus eget eu.</li>
                          <li>
                            Pellentesque vivamus malesuada blandit id felis
                            aliquet.
                          </li>
                          <li>
                            Sapien arcu, ultrices tellus faucibus placerat augue
                            a et.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className={styles.VacancyItem_Row}>
                      <div className={styles.VacancyItem_Row_Name}>
                        <span>What you'll need</span>
                      </div>

                      <div className={styles.VacancyItem_Row_Discription}>
                        <ul className={styles.VacancyItem_Row_Discription_List}>
                          <li>
                            Faucibus etiam venenatis ipsum lobortis ullamcorper
                            vitae eros.
                          </li>
                          <li>
                            Nunc ornare suscipit orci pellentesque adipiscing
                            bibendum mi vel magnis.
                          </li>
                          <li>Interdum amet, facilisi tellus eget eu. </li>
                          <li>
                            Pellentesque vivamus malesuada blandit id felis
                            aliquet.
                          </li>
                          <li>
                            Sapien arcu, ultrices tellus faucibus placerat augue
                            a et.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </VacancyItem>
              </li>

              <li className={styles.AvaiableVacancies_List_Li}>
                <VacancyItem title="IOS developer">
                  <div className={styles.VacancyItem}>
                    <div className={styles.VacancyItem_Row}>
                      <div className={styles.VacancyItem_Row_Name}>
                        <span>About the role</span>
                      </div>
                      <div className={styles.VacancyItem_Row_Discription}>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam vitae laoreet odio. Phasellus suscipit
                          tincidunt enim, et volutpat risus commodo et. Ut
                          cursus laoreet massa, vitae malesuada enim iaculis ut.
                          Pellentesque sed nisl ultrices, tincidunt ante
                          finibus, rutrum diam. Ut non euismod turpis. Aenean
                          eros orci, interdum ut consequat nec, aliquam non
                          justo.
                        </p>
                      </div>
                    </div>

                    <div className={styles.VacancyItem_Row}>
                      <div className={styles.VacancyItem_Row_Name}>
                        <span>What you’ll be doing</span>
                      </div>

                      <div className={styles.VacancyItem_Row_Discription}>
                        <ul className={styles.VacancyItem_Row_Discription_List}>
                          <li>
                            Faucibus etiam venenatis ipsum lobortis ullamcorper
                            vitae eros.
                          </li>
                          <li>
                            Nunc ornare suscipit orci pellentesque adipiscing
                            bibendum mi vel magnis.
                          </li>
                          <li>Interdum amet, facilisi tellus eget eu.</li>
                          <li>
                            Pellentesque vivamus malesuada blandit id felis
                            aliquet.
                          </li>
                          <li>
                            Sapien arcu, ultrices tellus faucibus placerat augue
                            a et.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className={styles.VacancyItem_Row}>
                      <div className={styles.VacancyItem_Row_Name}>
                        <span>What you'll need</span>
                      </div>

                      <div className={styles.VacancyItem_Row_Discription}>
                        <ul className={styles.VacancyItem_Row_Discription_List}>
                          <li>
                            Faucibus etiam venenatis ipsum lobortis ullamcorper
                            vitae eros.
                          </li>
                          <li>
                            Nunc ornare suscipit orci pellentesque adipiscing
                            bibendum mi vel magnis.
                          </li>
                          <li>Interdum amet, facilisi tellus eget eu. </li>
                          <li>
                            Pellentesque vivamus malesuada blandit id felis
                            aliquet.
                          </li>
                          <li>
                            Sapien arcu, ultrices tellus faucibus placerat augue
                            a et.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </VacancyItem>
              </li>

              <li className={styles.AvaiableVacancies_List_Li}>
                <VacancyItem title="Marketing director">
                  <div className={styles.VacancyItem}>
                    <div className={styles.VacancyItem_Row}>
                      <div className={styles.VacancyItem_Row_Name}>
                        <span>About the role</span>
                      </div>
                      <div className={styles.VacancyItem_Row_Discription}>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam vitae laoreet odio. Phasellus suscipit
                          tincidunt enim, et volutpat risus commodo et. Ut
                          cursus laoreet massa, vitae malesuada enim iaculis ut.
                          Pellentesque sed nisl ultrices, tincidunt ante
                          finibus, rutrum diam. Ut non euismod turpis. Aenean
                          eros orci, interdum ut consequat nec, aliquam non
                          justo.
                        </p>
                      </div>
                    </div>

                    <div className={styles.VacancyItem_Row}>
                      <div className={styles.VacancyItem_Row_Name}>
                        <span>What you’ll be doing</span>
                      </div>

                      <div className={styles.VacancyItem_Row_Discription}>
                        <ul className={styles.VacancyItem_Row_Discription_List}>
                          <li>
                            Faucibus etiam venenatis ipsum lobortis ullamcorper
                            vitae eros.
                          </li>
                          <li>
                            Nunc ornare suscipit orci pellentesque adipiscing
                            bibendum mi vel magnis.
                          </li>
                          <li>Interdum amet, facilisi tellus eget eu.</li>
                          <li>
                            Pellentesque vivamus malesuada blandit id felis
                            aliquet.
                          </li>
                          <li>
                            Sapien arcu, ultrices tellus faucibus placerat augue
                            a et.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className={styles.VacancyItem_Row}>
                      <div className={styles.VacancyItem_Row_Name}>
                        <span>What you'll need</span>
                      </div>

                      <div className={styles.VacancyItem_Row_Discription}>
                        <ul className={styles.VacancyItem_Row_Discription_List}>
                          <li>
                            Faucibus etiam venenatis ipsum lobortis ullamcorper
                            vitae eros.
                          </li>
                          <li>
                            Nunc ornare suscipit orci pellentesque adipiscing
                            bibendum mi vel magnis.
                          </li>
                          <li>Interdum amet, facilisi tellus eget eu. </li>
                          <li>
                            Pellentesque vivamus malesuada blandit id felis
                            aliquet.
                          </li>
                          <li>
                            Sapien arcu, ultrices tellus faucibus placerat augue
                            a et.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </VacancyItem>
              </li>
            </ul>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default AvaiableVacancies;
