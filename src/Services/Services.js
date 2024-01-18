import React from "react";
import Main from "./Main";
import Web from "./Web";
import Solutions from "./Solutions";
import { App } from "antd";
import Scroll from "../Home/Scroll";
import About from "../Home/About";
const Services = () => {
    return (
        <>
            <Scroll/>
            <Main />
            <Web />
            <Solutions />
           <About/>
        </>
    );
}
export default Services;