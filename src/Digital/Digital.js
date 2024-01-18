import React from "react";
import Main from "./Main";
import Solu from "./Solu";
import Best from "./Best";
import Solutions from "./Solutions";
import Scroll from "../Home/Scroll";
import About from "../Home/About";

const Digital = () => {
    return (
        <>
            <Scroll />
            <Main />
            <Solu />
            <Solutions />
            <Best />
            <About />
        </>
    );
}
export default Digital;