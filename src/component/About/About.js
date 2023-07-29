import React from "react";
import { Fragment } from 'react';
import NavBar from "../NavBar/NavBar";
import Abouts from "../Home/Abouts";
import Footer from "../Home/Footer";
import CopyRight from "../Home/CopyRight";
function About() {
    return (
        <Fragment>
            <NavBar />
            <Abouts />
            <Footer />
            <CopyRight />
        </Fragment>);
}
export default About;