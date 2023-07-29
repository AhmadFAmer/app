import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot ,faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons';
const Contact = ()=>{
    return(
        <div className="container-xxl">
            <div className="container">
                <div className="section-title text-center mx-auto m-w-500">
                    <p className="green">Contact Us</p>
                    <h1>Contact us right now</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <p className="text-center">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
                        <div className="row g-5">
                            <div className="col-md-4 text-center">
                                <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
                                <div>info@example.com{<br/>}support@example.com</div>
                            </div>
                            <div className="col-md-4 text-center">
                                <FontAwesomeIcon className="contact-icon" icon={faPhone} />
                                <div>+012 345 67890{<br/>}+012 345 67890</div>
                            </div>
                            <div className="col-md-4 text-center">
                                <FontAwesomeIcon className="contact-icon" icon={faLocationDot} />
                                <div>123 Street{<br/>}New York, USA</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;