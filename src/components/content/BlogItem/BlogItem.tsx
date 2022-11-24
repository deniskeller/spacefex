import React from 'react';
import styles from './BlogItem.module.scss';

interface IProps {
  id?: number;
  image?: string;
  author?: string;
  post_date?: string;
  header?: string;
  description?: string;
}

const BlogItem: React.FC<IProps> = ({
  image = 'accordion-slide1.jpg',
  author = 'author',
  post_date = '01.01.2022',
  header = 'Lorem text',
  description = 'Some text',
}) => {
  return (
    <>
      <div className={styles.BlogItem}>
        <div
          className={styles.BlogItem_Background}
          style={{ backgroundImage: `url('/images/image/${image}')` }}
        ></div>

        <div className={styles.BlogItem_Banner}>
          <div className={styles.BlogItem_Banner_Info}>
            <div className={styles.BlogItem_Banner_Info_Author}>{author}</div>
            <div className={styles.BlogItem_Banner_Info_Date}>{post_date}</div>
          </div>

          <div className={styles.BlogItem_Banner_Header}>
            <h1>{header}</h1>
          </div>

          <div className={styles.BlogItem_Banner_Description}>
            {description}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogItem;
