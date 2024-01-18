import React from "react";
import Slider from "./Slider";
import Main from "./Main";
import Vision from "./Vision";
import Makes from "./Makes";
import Scroll from "../Home/Scroll";

const About = () => {
    return (
        <>
         <Scroll/>
  
            <Main />
            <Slider />
            <Vision />
            <Makes />
        </>
    );
}
export default About;