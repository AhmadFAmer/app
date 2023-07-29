import React from "react";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons';
const Header = ()=>{
    return(
        <div class="header d-flex mb-5 justify-content-center align-items-center">
            <button className="btn LR left"><FontAwesomeIcon icon={faChevronLeft} style={{color: "#ffffff",}} /></button>
            <div class="text-center landText mx-5">
                <p class="text-light fs-4">Welcome to<text class="text-dark">TEA House</text></p>
                <h1 class="display-1 text-center text-dark my-4 animated zoomIn landHead headTitle">Organic & Quality{<br/>} Tea Production</h1>
                <button class="btn btn-light rounded-pill py-3 px-5 fs-5 animated zoomIn" href="">Explore More</button>
            </div>
            <button className="btn LR right"><FontAwesomeIcon icon={faChevronRight} style={{color: "#ffffff",}} /></button>
        </div>    );
}
export default Header;