import detoxImage from "../../assets/news/demo4-postimg3-370x300.jpg.png";
import styles from "./News.module.css";
import doctorImage from "../../assets/news/doctor2-80x80.jpg.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
function News() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p className={styles.pEl}>Blog & News</p>
        <h2 className={styles.h2El}>Read Our Latest News</h2>
      </div>
      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6].map((val) => {
            return (
              <div className={styles.slideContainer}>
                <div className={styles.slideImage}>
                  <img src={detoxImage} alt="im" />
                </div>
                <div className={styles.slideContent}>
                  <div className={styles.slideContentOne}>
                    <p>
                      Medical <span>March 31, 2022</span>
                    </p>
                  </div>
                  <div className={styles.slideContentTwo}>
                    <p>6 Tips To Protect Your Mental Health When You’re Sick</p>
                  </div>
                  <div className={styles.slideContentThree}>
                    <img src={doctorImage} alt="rebecca" />
                    <h4>Rebecca Lee</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
export { News };
