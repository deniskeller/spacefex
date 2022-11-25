//@ts-nocheck
import { BaseContainer, BaseTitle } from '@base/index';
import { BlockNumber, BlogItem } from '@content/index';
import React, { useRef } from 'react';
import styles from './Blogs.module.scss';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { posts } from '@services/post';

const Blogs = () => {
  var settings = {
    arrows: false,
    infinite: false,
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
                <svg
                  viewBox="0 0 22 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.5385 0.461548C21.3925 0.315244 21.2192 0.199168 21.0283 0.119968C20.8374 0.0407677 20.6328 0 20.4262 0C20.2195 0 20.0149 0.0407677 19.824 0.119968C19.6332 0.199168 19.4598 0.315244 19.3139 0.461548L0.461546 19.3139C0.315243 19.4598 0.199167 19.6332 0.119967 19.824C0.0407677 20.0149 0 20.2195 0 20.4262C0 20.6328 0.0407677 20.8374 0.119967 21.0283C0.199167 21.2191 0.315243 21.3925 0.461546 21.5384L19.3139 40.3908C19.6089 40.6858 20.009 40.8515 20.4262 40.8515C20.8434 40.8515 21.2435 40.6858 21.5385 40.3908C21.8334 40.0958 21.9992 39.6957 21.9992 39.2785C21.9992 38.8613 21.8334 38.4612 21.5385 38.1662L3.79527 20.4262L21.5385 2.68612C21.6848 2.54019 21.8008 2.36682 21.88 2.17596C21.9592 1.98509 22 1.78048 22 1.57384C22 1.36719 21.9592 1.16258 21.88 0.971713C21.8008 0.780848 21.6848 0.607483 21.5385 0.461548Z"
                    fill="#F7F7F7"
                  />
                </svg>
              </div>

              <div
                className={styles.NextSlide}
                onClick={() => slider.current.slickNext()}
              >
                <svg
                  viewBox="0 0 22 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.5385 0.461548C21.3925 0.315244 21.2192 0.199168 21.0283 0.119968C20.8374 0.0407677 20.6328 0 20.4262 0C20.2195 0 20.0149 0.0407677 19.824 0.119968C19.6332 0.199168 19.4598 0.315244 19.3139 0.461548L0.461546 19.3139C0.315243 19.4598 0.199167 19.6332 0.119967 19.824C0.0407677 20.0149 0 20.2195 0 20.4262C0 20.6328 0.0407677 20.8374 0.119967 21.0283C0.199167 21.2191 0.315243 21.3925 0.461546 21.5384L19.3139 40.3908C19.6089 40.6858 20.009 40.8515 20.4262 40.8515C20.8434 40.8515 21.2435 40.6858 21.5385 40.3908C21.8334 40.0958 21.9992 39.6957 21.9992 39.2785C21.9992 38.8613 21.8334 38.4612 21.5385 38.1662L3.79527 20.4262L21.5385 2.68612C21.6848 2.54019 21.8008 2.36682 21.88 2.17596C21.9592 1.98509 22 1.78048 22 1.57384C22 1.36719 21.9592 1.16258 21.88 0.971713C21.8008 0.780848 21.6848 0.607483 21.5385 0.461548Z"
                    fill="#F7F7F7"
                  />
                </svg>
              </div>
            </div>

            <Slider {...settings} ref={slider}>
              {posts?.map((post, index) => {
                return (
                  <BlogItem
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