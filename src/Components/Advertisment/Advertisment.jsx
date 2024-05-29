import styles from "./Advertisment.module.css";
import image1 from "../../assets/ad/image 1.png";
import image2 from "../../assets/ad/Group 10.png";
import image3 from "../../assets/ad/Group 12.png";
import React from "react";
import Slider from "react-slick";

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1370,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
      },
    },
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Advertisment() {
  return (
    <div className={styles.advertismentContainer}>
      <Slider {...settings}>
        <img src={image1} alt="one" />
        <img src={image2} alt="one" />
        <img src={image3} alt="one" />
        <img src={image1} alt="one" />
        <img src={image2} alt="one" />
        <img src={image3} alt="one" />
      </Slider>
    </div>
  );
}
export { Advertisment };
