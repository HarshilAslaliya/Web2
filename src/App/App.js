import React from "react";
import Main from "./Main";
import Solu from "./Solu";
import Solutions from "./Solutions";
import Scroll from "../Home/Scroll";
import About from "../Home/About";



const App = () => {
    return (
        <>
            <Scroll />
            <Main />
            <Solu />
            <Solutions />
            <About />
        </>
    );
}
export default App;