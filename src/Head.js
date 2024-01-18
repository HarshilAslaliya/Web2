import React, { useEffect, useState } from "react";
import { a } from "react-router-dom";
const Head = () => {
    const [show, setshow] = useState();

    function clickchange() {
        setshow(!show);
    }
    const [click, setclick] = useState();

    function clicknow() {
        setclick(!click);
    }

    return (
        <>
            <div class="header">
                <div class="container">
                    <div class="header-inner">
                        <div class="logo">
                            <a href="/"><img src="./assets/img/logo.svg" alt="logo" height="68" width="170" /></a>
                        </div>
                        <div class="menu">
                            <ul>
                                <li ><a href="/">Home</a></li>
                                <li ><a href="/about" >About</a></li>
                                <li class="dropdown"><a href="/services">Services <i class="fa-solid fa-chevron-down"></i></a>
                                    <ul class="drop-menu">
                                        <li > <a href="/services" >Web Devlopment</a></li>
                                        <li > <a href="/app"> Application Development</a></li>
                                        <li > <a href="/design"> Ui-Ux Design</a></li>
                                        <li ><a href="/commerce"> E -Commerece Development</a></li>
                                        <li ><a href="/game"> Game Development</a></li>
                                        <li ><a href="/aiml"> AI-ML Development</a></li>
                                        <li ><a href="/digital"> Digital Marekting</a></li>
                                        <li ><a href="/maintenance">Custom Software </a></li>


                                    </ul>
                                </li>

                                <li><a href="/gallery">Portfolio</a></li>
                                <li><a href="/career">Career</a></li>
                                <li><a href="/contact">Contact us</a></li>
                            </ul>
                        </div>
                        <div class="btn">
                            <a href="/contact">Free Quote</a>
                        </div>

                    </div>
                </div>
            </div>


            <div class="header-top">
                <div class="container">
                    <div class="header-inner">
                        <div class="logo">
                            <a href="/"><img src="./assets/img/logo.svg" alt="logo" height="68" width="170" /></a>
                        </div>
                        <div class="bar">

                            <buthrefn onClick={clickchange}  >  <i class="fa-solid fa-bars"></i>    </buthrefn>
                        </div>
                    </div>
                    {
                        show ? <div class="list">
                            <ul style={{margin:"0"}}>
                                <li ><a href="/">Home</a></li>
                                <li><a href="/about">About</a></li>
                                <li className="dropdown">  <a href="#">Services <buthrefn onClick={clicknow}  > <i class="fa-solid fa-chevron-down"></i>  </buthrefn></a>

                                    {
                                        click ? <ul class="drop-menu">
                                            <li> <a href="/services">Web Devlopment</a></li>
                                            <li> <a href="/app"> Application Development</a></li>
                                            <li> <a href="/design"> Ui-Ux Design</a></li>
                                            <li><a href="/commerce"> E - Commerece Development</a></li>
                                            <li ><a href="/game"> Game Development</a></li>
                                            <li ><a href="/aiml"> AI-ML  Development</a></li>
                                            <li ><a href="/digital"> Digital Marekting</a></li>
                                            <li ><a href="/maintenance">Custom Software </a></li>
                                        </ul> : null
                                    }
                                </li>
                                <li><a href="/gallery">Portfolio</a></li>
                                <li><a href="/career">Career</a></li>
                                <li><a href="/contact">Contact us</a></li>

                            </ul>
                        </div> : null
                    }
                </div>
            </div>




        </>
    );
}
export default Head;