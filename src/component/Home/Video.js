import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck,faPlay} from '@fortawesome/free-solid-svg-icons';
import './Video.css'

const Video = ()=>{
    return(
        <div className="container-fluid video my-5 py-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6">
                        <h1>Tea is a drink of <text className="text-white">health</text> and <text className="text-white">beauty</text></h1>
                        <h6 className="text-white my-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit</h6>
                        <div className="row g-4">
                            <div className="col-sm-6">
                                <FontAwesomeIcon className="true" icon={faCheck} />
                                <span className="">Great tea assortment</span>
                            </div>
                            <div className="col-sm-6">
                                <FontAwesomeIcon className="true" icon={faCheck} />
                                <span className="">Spices & additives</span>
                            </div> 
                            <div className="col-sm-6">
                                <FontAwesomeIcon className="true" icon={faCheck} />
                                <span className="">Unique accessories</span>
                            </div>                            
                            <div className="col-sm-6">
                                <FontAwesomeIcon className="true" icon={faCheck} />
                                <span className="">Good for health & beauty</span>
                            </div>
                        </div>
                        <button className="vdBtn btn rounded-pill py-3 mt-5 px-5">Explore More</button>
                    </div>
                    <div className="col-lg-6 h-100">
                        <div className="p-play h-100 d-flex align-items-center justify-content-center">
                            <button className="btn btn-play">
                            <FontAwesomeIcon className="play" icon={faPlay} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Video;