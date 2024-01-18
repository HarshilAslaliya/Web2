
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './About/About';
import Home from './Home/Home';
import Aiml from "./Aiml/Aiml";
import App from "./App/App";
import Career from "./Career/Career";
import Commerce from "./Commerce/Commerce";
import Contact from "./Contact/Contact";
import Design from "./Design/Design";
import Digital from "./Digital/Digital";
import Gallery from "./Gallery/Gallery";
import Game from "./Game/Game";
import Maintenance from "./Maintenance.js/Maintenance";
import Services from "./Services/Services";
import Footer from './Footer';
import Head from './Head';
import Count from './Count';
const Main = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    })
    return (
        <>
            <div>
                {loading ? (

                    <Count />
                ) : (
                    <div>
                        <BrowserRouter>

                            <Head />
                            <Routes>
                                <Route path="/" element={<Home />}></Route>
                                <Route path="/about" element={<About />}></Route>
                                <Route path="/services" element={<Services />}></Route>
                                <Route path="/app" element={<App />}></Route>
                                <Route path="/maintenance" element={<Maintenance />}></Route>
                                <Route path="/commerce" element={<Commerce />}></Route>
                                <Route path="/digital" element={<Digital />}></Route>
                                <Route path="/design" element={<Design />}></Route>
                                <Route path="/gallery" element={<Gallery />}></Route>
                                <Route path="/game" element={<Game />}></Route>
                                <Route path="/career" element={<Career />}></Route>
                                <Route path="/contact" element={<Contact />}></Route>
                                <Route path="/aiml" element={<Aiml />}></Route>
                            </Routes>
                            <Footer />
                        </BrowserRouter>
                    </div>
                )}
            </div>
        </>
    );
}
export default Main;