import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot ,faEnvelope,faPhone ,faAngleRight} from '@fortawesome/free-solid-svg-icons';
const Footer = () =>{
    return(
        <div className="container-fluid mt-5 py-5 footer">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h3 className="green mb-4">Our Office</h3>
                        <div className="mb-2">
                            <FontAwesomeIcon className="footer-icon" icon={faLocationDot} />
                            <text className="ms-3">123 Street, New York, USA</text>
                        </div>
                        <div className="mb-2">
                            <FontAwesomeIcon className="footer-icon" icon={faPhone} />
                            <text className="ms-3">+012 345 67890</text>
                        </div>
                        <div className="mb-2">
                            <FontAwesomeIcon className="footer-icon" icon={faEnvelope} />
                            <text className="ms-3">info@example.com</text>
                        </div>
                        {/* <div>
                            <button><FontAwesomeIcon className="bttn btn-hover" icon={faTwitter} /></button>
                            <button><FontAwesomeIcon icon={faFacebookF} /></button>
                            <button></button>
                            <button></button>
                        </div> */}
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="green mb-4">Quick Links</h3>
                        <div className="mb-2">
                            <FontAwesomeIcon className="green" icon={faAngleRight} />
                            <text className="ms-3">About Us</text>
                        </div>
                        <div className="mb-2">
                            <FontAwesomeIcon className="green" icon={faAngleRight} />
                            <text className="ms-3">Contact Us</text>
                        </div>
                        <div className="mb-2">
                            <FontAwesomeIcon className="green" icon={faAngleRight} />
                            <text className="ms-3">Our Services</text>
                        </div>
                        <div className="mb-2">
                            <FontAwesomeIcon className="green" icon={faAngleRight} />
                            <text className="ms-3">Terms & condition</text>
                        </div>
                        <div className="mb-2">
                            <FontAwesomeIcon className="green" icon={faAngleRight} />
                            <text className="ms-3">Support</text>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="green mb-4">Business Hours</h3>
                        <p className="mb-1">Monday - Friday</p>
                        <h6 className="text-white">09:00 am - 07:00 pm</h6>
                        <p className="mb-1">Saturday</p>
                        <h6 className="text-white">09:00 am - 12:00 pm</h6>
                        <p className="mb-1">Sunday</p>
                        <h6 className="text-white">closed</h6>                
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="green mb-4">Newsletter</h3>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div class="position-relative w-100">
                            <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                            <button type="button" class="btn-hover btn py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;