import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronRight,faChevronLeft,} from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import p1 from "../../img/product-1.jpg";
import p2 from "../../img/product-2.jpg";
import p3 from "../../img/product-3.jpg";
import p4 from "../../img/product-4.jpg";

const Product = () => {
  var sliderImages = Array.from(
    document.querySelectorAll(".slider-container img")
  );
  var slidesCount = sliderImages.length;
  var currentSlide = 1;
  const nextSlide = () => {
    console.log("next");
  };
  const prevSlide = () => {
    console.log("prev");
  };

  return (
    <div className="container-fluid product py-5 my-5">
      <div className="container py-5 text-center">
        <div className="text-center m-w-500 mx-auto section-title">
          <p className="fs-5 fw-medium fst-italic green">Our Products</p>
          <h1 className="display-6">
            Tea has a complex positive effect on the body
          </h1>
        </div>
        <div className="container">
          <div className="slider-container my-4 row ">
            <img className="active col-4 left" src={p1} alt="" />
            <img className="active col-4 center" src={p2} alt="" />
            <img className="active col-4 right" src={p3} alt="" />
            <img className="" src={p4} alt="" />
          </div>
          <div className="slider-controls">
            <span>
              <FontAwesomeIcon
                onClick={prevSlide}
                className="prev me-4"
                id="prev"
                icon={faChevronLeft}
              />
            </span>
            <span>
              <FontAwesomeIcon
                onClick={nextSlide}
                className="next ms-4"
                id="next"
                icon={faChevronRight}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
