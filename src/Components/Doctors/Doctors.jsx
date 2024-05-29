import styles from "./Doctors.module.css";
import doctor1 from "../../assets/doctors/doctor1.png";
import doctor2 from "../../assets/doctors/doctor2.png";
import doctor3 from "../../assets/doctors/doctor3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
function Doctor() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    dotsClass: `slick-dots ${styles.dots}`,
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
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.doctorContainer}>
      <h2 className={styles.h2El}>Our Medical Specialist</h2>
      <div className={styles.carouselContainer}>
        <Slider {...settings}>
          <div className={styles.one}>
            <img src={doctor1} alt="doc1" />
          </div>
          <div className={styles.one}>
            <img src={doctor2} alt="doc1" />
          </div>
          <div className={styles.one}>
            <img src={doctor3} alt="doc1" />
          </div>
          <div className={styles.one}>
            <img src={doctor1} alt="doc1" />
          </div>
          <div className={styles.one}>
            <img src={doctor2} alt="doc1" />
          </div>
          <div className={styles.one}>
            <img src={doctor3} alt="doc1" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
export { Doctor };
