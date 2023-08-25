import React from "react";
import ProductCarousel from "../shared/Carousel";
import "./Product.css";

const Product = () => {
  return (
    <div className="container-fluid product py-5 my-5">
      <div className="container py-5 text-center">
        <div className="text-center m-w-500 mx-auto section-title">
          <p className="fs-5 fw-medium fst-italic green">Our Products</p>
          <h1 className="display-6">
            Tea has a complex positive effect on the body
          </h1>
        </div>
        <ProductCarousel />
      </div>
    </div>
  );
};

export default Product;
