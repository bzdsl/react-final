import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import logo from "../assets/imgs/logo-header.svg";
import bg_header from "../assets/imgs/bg-header.png";

const Header = () => {
    return (
        <div
        // className="bg-left-top bg-cover bg-no-repeat "
        // style={{ backgroundImage: `url(${bg_header})` }}
        >
            <Navbar />
            <Hero />
        </div>
    );
};

export default Header;
