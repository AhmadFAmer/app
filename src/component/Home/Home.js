import React from "react";
import { Fragment } from 'react';
import NavBar from "../NavBar/NavBar";
import Header from "./Header";
import Abouts from "./Abouts";
import Product from "./Product";
import GoUp from "../GoUp";
import Featured from "./Featured";
import Video from "./Video";
// import Store from "./Store";
import Contact from "./Contact";
import Footer from "./Footer";
import CopyRight from "./CopyRight";

const Home = ()=>{
    return(
        <Fragment>
            <NavBar/>
            <Header/>
            <Abouts/>
            <Product/>
            <Featured/>
            <Video/>
            {/* <Store/> */}
            <Contact/>
            <GoUp/>
            <Footer/>
            <CopyRight/>
        </Fragment>
    )
}
export default Home;