import React from "react";
import './Abouts.css';
import P1 from '../../img/about-1.jpg';
import P2 from '../../img/about-2.jpg';
import P3 from '../../img/about-3.jpg';
import P4 from '../../img/about-4.jpg';
import P5 from '../../img/about-5.jpg';
import P6 from '../../img/about-6.jpg';

const Abouts = ()=> {
    return(
      <div className="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div className="col-lg-6 ">
              <div className="row g-3">
                <div className="col-6 text-end">
                  <img className="img-fluid bg-white w-100 mb-3 wow fadeIn" src={P1} alt=""/>
                  <img className="img-fluid bg-white w-50 wow fadeIn" src={P3} alt=""/>
                </div>
                <div className="col-6">
                  <img className="img-fluid bg-white w-50 mb-3 wow fadeIn" src={P4} alt=""/>
                  <img className="img-fluid bg-white w-100 wow fadeIn" src={P2} alt=""/>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow">
              <div className="section-title">
                <p className="fs-5 fw-medium fst-italic green">About Us</p>
                <h1 className="display-6">The success history of TEA House in 25 years</h1>
              </div>
              <div className="row g-3 mb-4">
                <div className="col-sm-4">
                  <img className="img-fluid bg-white w-100" src={P5} alt=""/>
                </div>
                <div className="col-sm-8">
                  <h5>Our tea is one of the most popular drinks in the world</h5>
                  <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit</p>
                </div>
              </div>
              <div className="border-top mb-4"></div>
              <div className="row g-3">
                <div className="col-sm-8">
                  <h5>Daily use of a cup of tea is good for your health</h5>
                  <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit</p>
                </div>
                <div className="col-sm-4">
                  <img className="img-fluid bg-white w-100" src={P6} alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Abouts;
