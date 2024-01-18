import React, { useState } from "react";



const Offer = () => {
    const [show, setshow] = useState();
    function clickchange() {
        setshow(!show);
    }


    return (
        <>
            <div class="offer">
                <div class="container">
                    <div class="inner-block">
                        <div class="title">
                            <h2>We don’t offer Jobs. We offer Careers.</h2>
                        </div>
                        <div class="offer-inner">
                            <div class="offer-cards">
                                <div class="cards-main">
                                    <a href="#">
                                        <h3>PHP DEVELOPER</h3>
                                        <i class="fa-solid fa-circle-down"></i>
                                    </a>
                                    <div class="text">
                                        <span> Experience & Qualification </span>
                                        <ol type="I">
                                            <li><i class="fa-solid fa-right-from-bracket"></i>0 - 1 Year Exp.</li>
                                            <li> <i class="fa-solid fa-right-from-bracket"></i>Fresher - 2 Positions</li>
                                        </ol>
                                        <span> Location </span>
                                        <ol type="I">
                                            <li><i class="fa-solid fa-right-from-bracket"></i>
                                                Surat
                                            </li>
                                        </ol>
                                        <span> Skills Required </span>
                                        <ol type="I">
                                            <li><i class="fa-solid fa-right-from-bracket"></i>Good Knowledge on PHP, HTML/CSS, Javascript/Ajax & Jquery.</li>
                                            <li><i class="fa-solid fa-right-from-bracket"></i>Having Good Coding Skills in core
                                                PHP.</li>
                                            <li><i class="fa-solid fa-right-from-bracket"></i>Knowledge of JavaScripts, JQuery
                                                and AJAX.</li>
                                            <li><i class="fa-solid fa-right-from-bracket"></i>Understanding of various Content
                                                Managements Systems- Ability to take up R&D
                                                activities and resolve issues.</li>
                                        </ol>
                                        <div class="btn">
                                            <a href="#">Apply</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="offer-cards">
                                <div class="cards-main">
                                    <a href="#">
                                        <h3>FLUTTER DEVELOPER</h3>
                                        <i class="fa-solid fa-circle-down"></i>
                                    </a>
                                    <div class="text">
                                        <span> Experience & Qualification </span>
                                        <ol type="I">
                                            <li><i class="fa-solid fa-right-from-bracket"></i>2 - 3 Year Exp.</li>
                                            <li> <i class="fa-solid fa-right-from-bracket"></i>2 Positions</li>
                                        </ol>
                                        <span> Location </span>
                                        <ol type="I">
                                            <li><i class="fa-solid fa-right-from-bracket"></i>
                                                Surat
                                            </li>
                                        </ol>
                                        <span> Skills Required </span>
                                        <ol type="I">
                                            <li><i class="fa-solid fa-right-from-bracket"></i>Good Knowledge on Dart, PHP, MYSQL, Github.</li>
                                            <li><i class="fa-solid fa-right-from-bracket"></i>Having Good Coding Skills in core
                                                Flutter.</li>
                                            <li><i class="fa-solid fa-right-from-bracket"></i>Knowledge of Firebase</li>
                                            <li><i class="fa-solid fa-right-from-bracket"></i>Understanding of various Content
                                                Managements Systems- Ability to take up R&D
                                                activities and resolve issues.</li>
                                        </ol>
                                        <div class="btn">
                                            <a href="#">Apply</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default Offer;