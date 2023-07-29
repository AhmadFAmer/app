import React from "react";
import './Featured.css';
import photo from '../../img/article.jpg';
const Featured = ()=>{
    return(
        <div className="container-xxl my-5">
            <div className="container">
                <div className="row"> 
                    <div className="col-5">
                        <img className="photo" src={photo} alt=""/>
                    </div>
                    <div className="col-6">
                        <div className="section-title">
                            <p className="green fs-5 fw-medium fst-italic">Featured Acticle</p>
                            <h1 className="display-6">The history of tea leaf in the world</h1>
                        </div>
                        <p className="">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <p className="">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna. Tempor erat elitr rebum at clita.</p>
                        <button className="btn btn-hover rounded-pill py-3 px-5">Read More</button>
                    </div>
                </div>
            </div>
        </div>  
    );
}
export default Featured;