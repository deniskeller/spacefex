//@ts-nocheck
import { BaseContainer, BaseIcon, BaseTitle } from '@base/index';
import { BlockNumber, BlogItem } from '@content/index';
import React, { useRef } from 'react';
import styles from './Blogs.module.scss';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { posts } from '@services/index';
import { ALL_ICONS } from '@constants/icons';

const Blogs = () => {
  var settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          centerMode: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };
  //убрать //@ts-nocheck и типизировать
  const slider = useRef(null);

  return (
    <>
      <div
        className={styles.Wrapper}
        style={{ backgroundImage: 'url(/images/image/sparks.jpg)' }}
      >
        <BaseContainer>
          <div className={styles.Blogs}>
            <BlockNumber number="6" className={styles.NumberIcon} />

            <BaseTitle className={styles.Blogs_Title}>
              What’s New with USF
            </BaseTitle>
          </div>
        </BaseContainer>

        <div className={styles.Blogs_Slider_Container}>
          <div className={styles.Blogs_Slider}>
            <div className={styles.Blogs_Slider_Navbar}>
              <div
                className={styles.PrevSlide}
                onClick={() => slider.current.slickPrev()}
              >
                <BaseIcon viewBox="0 0 22 41" icon={ALL_ICONS.ARROW} />
              </div>

              <div
                className={styles.NextSlide}
                onClick={() => slider.current.slickNext()}
              >
                <BaseIcon viewBox="0 0 22 41" icon={ALL_ICONS.ARROW} />
              </div>
            </div>

            <Slider {...settings} ref={slider}>
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
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
