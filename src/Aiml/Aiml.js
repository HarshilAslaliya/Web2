import React from "react";
import Main from "./Main";
import Aiweb from "./Aiweb";
import Solutions from "./Solutions";
import Scroll from "../Home/Scroll";
import About from "../Home/About";


const Aiml = () => {
    return (
        <>
            <Scroll />
            <Main />
            <Aiweb />
            <Solutions />
            <About />
        </>
    );
}
export default Aiml;