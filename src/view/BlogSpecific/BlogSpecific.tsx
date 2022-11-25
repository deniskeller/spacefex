import React from 'react';
import styles from './BlogSpecific.module.scss';
import { BaseContainer, BaseIcon, BaseTitle } from '@base/index';
import { useRouter } from 'next/router';
import { ALL_ICONS } from '@constants/icons';

const BlogSpecific = () => {
  const router = useRouter();
  return (
    <>
      <BaseIcon
        viewBox="0 0 670 257"
        icon={ALL_ICONS.DECOR_2}
        className={styles.DecorIcon}
      />
      <div className={styles.Wrapper}>
        <div
          className={styles.Background}
          style={{ backgroundImage: 'url(/images/image/dust.jpg)' }}
        ></div>

        <BaseContainer>
          <div className={styles.BlogSpecific}>
            <div
              className={styles.BlogSpecific_Back}
              onClick={() => router.back()}
            >
              <BaseIcon
                viewBox="0 0 22 41"
                icon={ALL_ICONS.ARROW}
                className={styles.BlogSpecific_Back_Icon}
              />
              <div className={styles.BlogSpecific_Back_Title}>
                back to ALL ARTICLES
              </div>
            </div>

            <div
              className={styles.BlogSpecific_Image}
              style={{
                backgroundImage: 'url(/images/image/accordion-slide2.jpg)',
              }}
            ></div>

            <div className={styles.BlogSpecific_Header}>
              <div className={styles.BlogSpecific_Header_Title}>
                <h1>
                  A primary captivate and long going descriptive paragraph
                </h1>
              </div>

              <div className={styles.BlogSpecific_Header_Info}>
                <div className={styles.BlogSpecific_Header_Info_Date}>
                  <span>09.01.2022</span>
                </div>
                <div className={styles.BlogSpecific_Header_Info_Author}>
                  <span>by Jane Cooper</span>
                </div>
              </div>
            </div>

            <div className={styles.BlogSpecific_Paragraph}>
              <p>
                Cats are good pets because they’re good companions, clean, and
                easy to care for. Jaws is a classic film because of its acting,
                its cinematography, and its musical score. Three examples of the
                U.S. checks and balances are its executive branch, the
                legislative branch, and judicialbranches.
              </p>
            </div>

            <div className={styles.BlogSpecific_Quote}>
              <p>
                “As natural selection acts solely by accumulating slight,
                successive, favourable variations, it can produce no great or
                sudden modification.”
              </p>
            </div>

            <div className={styles.BlogSpecific_Paragraph}>
              <p>
                Cats are good pets because they’re good companions, clean, and
                easy to care for. Jaws is a classic film because of its acting,
                its cinematography, and its musical score. Three examples of the
                U.S. checks and balances are its executive branch, the
                legislative branch, and judicialbranches.
              </p>
            </div>

            <div className={styles.BlogSpecific_Paragraph}>
              <p>
                Cats are good pets because they’re good companions, clean, and
                easy to care for. Jaws is a classic film because of its acting,
                its cinematography, and its musical score. Three examples of the
                U.S. checks and balances are its executive branch, the
                legislative branch, and judicialbranches. Cats are good pets
                because they’re good companions, clean, and easy to care for.
                Jaws is a classic film because of its acting, its
                cinematography, and its musical score. Three examples of the
                U.S. checks and balances are its executive branch, the
                legislative branch, and judicialbranches.
              </p>
            </div>

            <div className={styles.BlogSpecific_Paragraph}>
              <p>
                Cats are good pets because they’re good companions, clean, and
                easy to care for. Jaws is a classic film because of its acting,
                its cinematography, and its musical score.
              </p>
            </div>

            <div className={styles.BlogSpecific_List_Title}>
              <h3>Example of a list</h3>
            </div>

            <ul className={styles.BlogSpecific_List}>
              <li className={styles.BlogSpecific_List_Item}>
                Bullet Lists: use when order of listed items is not important;
              </li>
              <li className={styles.BlogSpecific_List_Item}>
                Numbered Lists: use when order is important, such as steps in
                instructions;
              </li>
              <li className={styles.BlogSpecific_List_Item}>
                In-sentence Lists: use when you want to maintain sentence
                structure and paragraphing, and have a short list (2-4 items);
              </li>
              <li className={styles.BlogSpecific_List_Item}>
                Labelled Lists: use when the listed items require some
                explanation or amplification;{' '}
              </li>
              <li className={styles.BlogSpecific_List_Item}>
                Nested Lists: use when listed items have sub-lists (list within
                a list).
              </li>
            </ul>

            <div className={styles.BlogSpecific_Navbar}>
              <div className={styles.BlogSpecific_Navbar_Item}>
                <BaseIcon
                  viewBox="0 0 22 41"
                  icon={ALL_ICONS.ARROW}
                  className={styles.BlogSpecific_Navbar_Item_Icon}
                />
                <div className={styles.BlogSpecific_Navbar_Item_Title}>
                  previous
                </div>
              </div>

              <div className={styles.BlogSpecific_Navbar_Item}>
                <div className={styles.BlogSpecific_Navbar_Item_Title}>
                  next
                </div>

                <BaseIcon
                  viewBox="0 0 22 41"
                  icon={ALL_ICONS.ARROW}
                  className={styles.BlogSpecific_Navbar_Item_Icon}
                />
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default BlogSpecific;
