import React from "react";
import './Store.css';
import Sp1 from '../../img/store-product-1.jpg';
import Sp2 from '../../img/store-product-2.jpg';
import Sp3 from '../../img/store-product-3.jpg';

const Store = ()=>{
    return(
        <div className="container-fluid py-5 my-5 c">
            <div className="container py-5">
                <div className="text-center mx-auto section-title m-w-500">
                    <p className="fs-5 fw-medium fst-italic green">Our Products</p>
                    <h1 className="display-6">Tea has a complex positive effect on the body</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6">
                        <div className="text-center store-item">
                            <img  className="" src={Sp1} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="">
                            <img  className="" src={Sp2} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="text-center">
                            <img  className="" src={Sp3} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Store;