import React from "react";
import Main from "./Main";
import Gameweb from "./Gameweb";
import Solutions from "./Solutions";
import Scroll from "../Home/Scroll";
import About from "../Home/About";

const Game = () =>{
    return(
        <>
        <Scroll/>
        <Main/>
        <Gameweb/>
        <Solutions/>
        <About/>

        </>
    );
}
export default Game;