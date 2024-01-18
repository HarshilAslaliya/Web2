import React from "react";
import Main from "./Main";
import Solu from "./Solu";
import Card from "./Card";
import Solutions from "./Solutions";
import Scroll from "../Home/Scroll";
import About from "../Home/About";


const Maintenance = () => {
    return (
        <>
            <Scroll/>
            <Main />
            <Solu />
            {/* <Card/> */}
            <Solutions/>
            <About/>
        </>
    );
}
export default Maintenance;