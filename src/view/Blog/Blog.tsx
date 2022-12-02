import { BaseButton, BaseContainer, BaseTitle } from '@base/index';
import { BlogItem } from '@content/index';
import { posts } from '@services/index';
import React from 'react';
import styles from './Blog.module.scss';

const Blog = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <div
          className={styles.Background}
          style={{ backgroundImage: 'url(/images/image/dust.jpg)' }}
        ></div>
        <div className={styles.Blog}>
          <BaseContainer>
            <div className="Header_animated animate__animated animate__fadeInLeft">
              <BaseTitle className={styles.Blog_Title}>blog</BaseTitle>
            </div>

            <div className={styles.Blog_Posts}>
              {posts?.map((post, index) => {
                return (
                  <BlogItem
                    id={post.id}
                    image={post.image}
                    key={post.id}
                    author={post.author}
                    post_date={post.post_date}
                    header={post.header}
                    description={post.description}
                    className={styles.Blog_Posts_Item}
                  />
                );
              })}
            </div>
            <BaseButton
              title="show more"
              type="danger"
              className={styles.Blog_Button}
            />
          </BaseContainer>
        </div>
      </div>
    </>
  );
};

export default Blog;
