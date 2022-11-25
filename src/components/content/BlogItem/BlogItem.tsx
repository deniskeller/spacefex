import React from 'react';
import styles from './BlogItem.module.scss';
import { useRouter } from 'next/router';

interface IProps {
  id?: number;
  image?: string;
  author?: string;
  post_date?: string;
  header?: string;
  description?: string;
  className?: string;
}

const BlogItem: React.FC<IProps> = ({
  id = 1,
  image = 'accordion-slide1.jpg',
  author = 'author',
  post_date = '01.01.2022',
  header = 'Lorem text',
  description = 'Some text',
  className = '',
}) => {
  const router = useRouter();
  const goToNews = (id: number) => {
    router.push('/blog/' + id);
  };

  return (
    <>
      <div
        className={`${styles.BlogItem} ${className}`}
        onClick={() => goToNews(id)}
      >
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
