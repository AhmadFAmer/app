import React from "react";
import Carousel from "react-grid-carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import p1 from "../../../img/product-1.jpg";
import p2 from "../../../img/product-2.jpg";
import p3 from "../../../img/product-3.jpg";
import p4 from "../../../img/product-4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ProductCarousel() {
  const images = [p1, p2, p3, p4];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div style={{ position: "relative" }}>
      <Slider {...settings}>
        {images.map((imgUrl, index) => (
          <div key={index}>
            <img src={imgUrl} alt="product" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductCarousel;

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <>
      <style>
        {`
          .centered-icon {
            display: flex !important;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
      <div
        className="slick-arrow slick-prev-custom centered-icon"
        style={{
          width: "55px",
          height: "55px",
          backgroundColor: "#88B44E",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...style,
        }}
        onClick={onClick}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          style={{ color: "white", fontSize: "20px" }} // adjust fontSize for desired arrow size
        />
      </div>
    </>
  );
}

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <>
      <style>
        {`
          .centered-icon {
            display: flex !important;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
      <div
        className="slick-arrow slick-next-custom centered-icon"
        style={{
          width: "55px",
          height: "55px",
          backgroundColor: "#88B44E",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...style,
        }}
        onClick={onClick}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          style={{ color: "white", fontSize: "20px" }} // adjust fontSize for desired arrow size
        />
      </div>
    </>
  );
}
