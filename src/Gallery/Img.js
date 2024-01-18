import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Img = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div class="img-blog">
                <div class="container">
                    <div class="img-inner">
                        <div class="d-flex mt-4 justify-content-center">
                            <ul class="nav nav-pills d-flex m-2 scrollmenu" id="pills-tab" role="tablist" >

                                <li class="nav-item" role="presentation">
                                    <button class="nav-link clr active" id="pills-web-tab" data-bs-toggle="pill" data-bs-target="#pills-web" type="button" role="tab" aria-controls="pills-web" aria-selected="true">Web Development</button>
                                </li>


                                <li class="nav-item" role="presentation">
                                    <button class="nav-link clr  " id="pills-app-tab" data-bs-toggle="pill" data-bs-target="#pills-app" type="button" role="tab" aria-controls="pills-app" aria-selected="false">App Development</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link clr  " id="pills-game-tab" data-bs-toggle="pill" data-bs-target="#pills-game" type="button" role="tab" aria-controls="pills-game" aria-selected="false">Game Development</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link clr  " id="pills-ui-tab" data-bs-toggle="pill" data-bs-target="#pills-ui" type="button" role="tab" aria-controls="pills-ui" aria-selected="false">Ui Ux Design</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link clr  " id="pills-com-tab" data-bs-toggle="pill" data-bs-target="#pills-com" type="button" role="tab" aria-controls="pills-com" aria-selected="false">E - Commerce</button>
                                </li>
                            </ul>
                        </div>

                        <div class="tab-content" id="pills-tabContent">

                            <div class="tab-pane fade show active" id="pills-web" role="tabpanel" aria-labelledby="pills-web-tab" tabindex="0">
                                <div class="inner-block  active-content ">
                                    <div class="bottom ">
                                        <div class="bottom-cards">
                                            <div class="cards-img">
                                                <a href="https://www.travala.com/" target="_blank"><img src="./assets/img/web(1.1).svg" alt="app" /></a>
                                            </div>
                                            <div class="text">
                                                <div class="middle">
                                                    <strong>Travala
                                                    </strong>
                                                    <p>React-Node js
                                                    </p>
                                                </div>
                                            </div>
                                        </div>





                                        <div class="bottom-cards">
                                            <div class="cards-img">
                                                <a href="https://parinlabgrown.com/" target="_blank"><img src="./assets/img/web(2).svg" alt="app" /></a>
                                            </div>
                                            <div class="text">
                                                <div class="middle">
                                                    <strong>Parinlabgrown
                                                    </strong>
                                                    <p>React
                                                    </p>
                                                </div>
                                            </div>
                                        </div>



                                        <div class="bottom-cards">
                                            <div class="cards-img">
                                                <a href="https://www.thedustland.com/" target="_blank"><img src="./assets/img/web(4).svg" alt="app" /></a>
                                            </div>
                                            <div class="text">
                                                <div class="middle">
                                                    <strong>

                                                        Feeld
                                                    </strong>
                                                    <p>React

                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="bottom-cards">
                                            <div class="cards-img">
                                                <a href="https://www.wearfigs.com/" target="_blank"><img src="./assets/img/web(2.2).svg" alt="app" /></a>
                                            </div>
                                            <div class="text">
                                                <div class="middle">
                                                    <strong>

                                                        Wearfigs
                                                    </strong>
                                                    <p>React

                                                    </p>
                                                </div>
                                            </div>
                                        </div>



                                        <div class="bottom-cards">
                                            <div class="cards-img">
                                                <a href="https://staging.d3pupeg590zqt7.amplifyapp.com/" target="_blank"><img src="./assets/img/web(5.5).svg" alt="app" /></a>
                                            </div>
                                            <div class="text">
                                                <div class="middle">
                                                    <strong>Thedustland
                                                    </strong>
                                                    <p>React
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bottom-cards">
                                            <div class="cards-img">
                                                <a href="https://garyapp.netlify.app/" target="_blank"><img src="./assets/img/web(6.6).svg" alt="app" /></a>
                                            </div>
                                            <div class="text">
                                                <div class="middle">
                                                    <strong>gary
                                                    </strong>
                                                    <p>React
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div class="tab-pane fade" id="pills-app" role="tabpanel" aria-labelledby="pills-app-tab" tabindex="0">
                                <div class="inner-block">
                                    <div class="bottom">
                                        <div class="bottom-cards">
                                            <div class="cards-img">
                                                <a href="https://play.google.com/store/apps/details?id=in.diyos.crm" target="_blank"><img src="./assets/img/app(1).svg" alt="app" /></a>
                                            </div>
                                            <div class="text">
                                                <div class="middle">
                                                    <strong>Diyos CRM
                                                    </strong>
                                                    <p>Android-React Native
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bottom-cards">
                                            <div class="cards-img">
                                                <a href="https://apps.apple.com/in/app/unizap/id1438955605" target="_blank"><img src="./assets/img/app(2).svg" alt="app" /></a>
                                            </div>
                                            <div class="text">
                                                <div class="middle">
                                                    <strong>Unizap
                                                    </strong>
                                                    <p>Android-Flutter
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bottom-cards">
                                            <div class="cards-img">
                                                <a href="https://apps.apple.com/in/app/dukaan-create-online-dukan/id1560859298" target="_blank"><img src="./assets/img/app(3).svg" alt="app" /></a>
                                            </div>
                                            <div class="text">
                                                <div class="middle">
                                                    <strong>

                                                        Dukaan
                                                    </strong>
                                                    <p>Flutter-Android

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bottom-cards">
                                            <div class="cards-img">
                                                <a href="https://play.google.com/store/apps/details?id=co.feeld&hl=en-IN" target="_blank"><img src="./assets/img/app(4).svg" alt="app" /></a>
                                            </div>
                                            <div class="text">
                                                <div class="middle">
                                                    <strong>

                                                        Feeld
                                                    </strong>
                                                    <p>Flutter-Android

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bottom-cards">
                                            <div class="cards-img">
                                                <a href="https://play.google.com/store/apps/details?id=com.user.rjmart" target="_blank"><img src="./assets/img/app(5).svg" alt="app" /></a>
                                            </div>
                                            <div class="text">
                                                <div class="middle">
                                                    <strong>Grocery APP
                                                    </strong>
                                                    <p>Android

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bottom-cards">
                                            <div class="cards-img">
                                                <a href="https://play.google.com/store/apps/details?id=com.MashVirtual.ZamitOne" target="_blank"><img src="./assets/img/app(6).svg" alt="app" /></a>
                                            </div>
                                            <div class="text">
                                                <div class="middle">
                                                    <strong>Zamit
                                                    </strong>
                                                    <p>Android
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="tab-pane fade" id="pills-game" role="tabpanel" aria-labelledby="pills-game-tab" tabindex="0">
                                <div class="inner-block">
                                    <div class="bottom">
                                        <div class="bottom-cards">
                                            <div class="cards-img">
                                                <a href="https://play.google.com/store/apps/details?id=com.nividata.mathmatrix" target="_blank"><img src="./assets/img/game(1).svg" alt="app" /></a>
                                            </div>
                                            <div class="text">
                                                <div class="middle">
                                                    <strong>Math Puzzle
                                                    </strong>
                                                    <p>Unity
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bottom-cards">
                                            <div class="cards-img">
                                                <a href="https://play.google.com/store/apps/details?id=com.RayGaming.WishingWell" target="_blank"><img src="./assets/img/game(2).svg" alt="app" /></a>
                                            </div>
                                            <div class="text">
                                                <div class="middle">
                                                    <strong>Wishing Well
                                                    </strong>
                                                    <p>Unity
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bottom-cards">
                                            <div class="cards-img">
                                                <a href="https://cafebazaar.ir/app/com.carromboard.carrompoolcarromboardgame?l=en" target="_blank"><img src="./assets/img/game(3).svg" alt="app" /></a>
                                            </div>
                                            <div class="text">
                                                <div class="middle">
                                                    <strong>

                                                        Carrom Board Game
                                                    </strong>
                                                    <p>Unity

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bottom-cards">
                                            <div class="cards-img">
                                                <a href="https://play.google.com/store/apps/details?id=com.gamingstok.bubbleshooterresuce" target="_blank"><img src="./assets/img/game(4).svg" alt="app" /></a>
                                            </div>
                                            <div class="text">
                                                <div class="middle">
                                                    <strong>

                                                        Bubble Shooter forest
                                                    </strong>
                                                    <p>Unity

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div class="bottom-cards">
                                            <div class="cards-img">
                                                <a href="https://masseycapital.ca/" target="_blank"><img src="./assets/img/web(5).svg" alt="app" /></a>
                                            </div>
                                            <div class="text">
                                                <div class="middle">
                                                    <strong>Grocery APP
                                                    </strong>
                                                    <p>Android

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bottom-cards">
                                            <div class="cards-img">
                                                <a href="https://garyapp.netlify.app/" target="_blank"><img src="./assets/img/web(6.6).svg" alt="app" /></a>
                                            </div>
                                            <div class="text">
                                                <div class="middle">
                                                    <strong>Zamit
                                                    </strong>
                                                    <p>Android
                                                    </p>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>


                            <div class="tab-pane fade" id="pills-ui" role="tabpanel" aria-labelledby="pills-ui-tab" tabindex="0">
                                <div class="inner-block">
                                    <div class="bottom">
                                        <div class="bottom-cards">
                                            <div class="cards-img">
                                                <a href="#" target="_blank"><img src="./assets/img/ui(1).svg" alt="app" /></a>
                                            </div>
                                            <div class="text">
                                                <div class="middle">
                                                    <strong>SaaS Mobile App

                                                    </strong>
                                                    <p>Figma
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bottom-cards">
                                            <div class="cards-img">
                                                <a href="#" target="_blank"><img src="./assets/img/ui(2).svg" alt="app" /></a>
                                            </div>
                                            <div class="text">
                                                <div class="middle">
                                                    <strong>QR Scanner App

                                                    </strong>
                                                    <p>Figma
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bottom-cards">
                                            <div class="cards-img">
                                                <a href="#" target="_blank"><img src="./assets/img/ui(3).svg" alt="app" /></a>
                                            </div>
                                            <div class="text">
                                                <div class="middle">
                                                    <strong>

                                                        VPN App

                                                    </strong>
                                                    <p>Figma
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bottom-cards">
                                            <div class="cards-img">
                                                <a href="#" target="_blank"><img src="./assets/img/ui(4).svg" alt="app" /></a>
                                            </div>
                                            <div class="text">
                                                <div class="middle">
                                                    <strong>

                                                        Bus Booking

                                                    </strong>
                                                    <p>Figma
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bottom-cards">
                                            <div class="cards-img">
                                                <a href="#" target="_blank"><img src="./assets/img/ui(5).svg" alt="app" /></a>
                                            </div>
                                            <div class="text">
                                                <div class="middle">
                                                    <strong>E-Commerce

                                                    </strong>
                                                    <p>Figma
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bottom-cards">
                                            <div class="cards-img">
                                                <a href="#" target="_blank"><img src="./assets/img/ui(6.6).svg" alt="app" /></a>
                                            </div>
                                            <div class="text">
                                                <div class="middle">
                                                    <strong>E-Commerce

                                                    </strong>
                                                    <p>Figma
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="tab-pane fade" id="pills-com" role="tabpanel" aria-labelledby="pills-com-tab" tabindex="0">
                                <div class="inner-block">
                                    <div class="bottom">
                                        <div class="bottom-cards">
                                            <div class="cards-img">
                                                <a href="https://www.thesurgicalist.com/" target="_blank"><img src="./assets/img/com(1).svg" alt="app" /></a>
                                            </div>
                                            <div class="text">
                                                <div class="middle">
                                                    <strong>Diyos CRM
                                                    </strong>
                                                    <p>Wordpress
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bottom-cards">
                                            <div class="cards-img">
                                                <a href="https://chaime.com.au/" target="_blank"><img src="./assets/img/com(2).svg" alt="app" /></a>
                                            </div>
                                            <div class="text">
                                                <div class="middle">
                                                    <strong>Unizap
                                                    </strong>
                                                    <p>Wordpress
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bottom-cards">
                                            <div class="cards-img">
                                                <a href="https://bondisands.com/" target="_blank"><img src="./assets/img/web(3).svg" alt="app" /></a>
                                            </div>
                                            <div class="text">
                                                <div class="middle">
                                                    <strong>

                                                        Dukaan
                                                    </strong>
                                                    <p>Wordpress

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bottom-cards">
                                            <div class="cards-img">
                                                <a href="https://www.aksclothings.com/" target="_blank"><img src="./assets/img/com(3).svg" alt="app" /></a>
                                            </div>
                                            <div class="text">
                                                <div class="middle">
                                                    <strong>

                                                        Feeld
                                                    </strong>
                                                    <p>Shopify

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bottom-cards">
                                            <div class="cards-img">
                                                <a href="https://masseycapital.ca/" target="_blank"><img src="./assets/img/web(5).svg" alt="app" /></a>
                                            </div>
                                            <div class="text">
                                                <div class="middle">
                                                    <strong>Shopify
                                                    </strong>
                                                    <p>Android

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bottom-cards">
                                            <div class="cards-img">
                                                <a href="https://octics.com/" target="_blank"><img src="./assets/img/ui(6).svg" alt="app" /></a>
                                            </div>
                                            <div class="text">
                                                <div class="middle">
                                                    <strong>Zamit
                                                    </strong>
                                                    <p>Shopify
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>






                        {/* <div class="top">
                            <div class="list">
                                <div class="icon">
                            <i class="fa-solid fa-arrow-left"></i>
                        </div>
                                <a href="#"> <span>Web Development</span></a>
                                <a href="#"> <span>Web Development</span></a>
                                <a href="#"> <span>Web Development</span></a>

                                <div class="icon">
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                            </div>
                        </div> */}

                        {/* <div class="inner-block">
                            <div class="bottom">
                                <div class="bottom-cards">
                                    <div class="cards-img">
                                        <a href="#"><img src="" alt="app" width="366" height="218" /></a>
                                    </div>
                                    <div class="text">
                                        <strong>Academy System</strong>
                                        <p>Academy STUDY</p>
                                    </div>
                                </div>
                                <div class="bottom-cards">
                                    <div class="cards-img">
                                        <a href="#"><img src="" alt="app" width="366" height="218" /></a>
                                    </div>
                                    <div class="text">
                                        <strong>Academy System</strong>
                                        <p>Academy STUDY</p>
                                    </div>
                                </div>
                                <div class="bottom-cards">
                                    <div class="cards-img">
                                        <a href="#"><img src="" alt="app" width="366" height="218" /></a>
                                    </div>
                                    <div class="text">
                                        <strong>Academy System</strong>
                                        <p>Academy STUDY</p>
                                    </div>
                                </div>
                                <div class="bottom-cards">
                                    <div class="cards-img">
                                        <a href="#"><img src="" alt="app" width="366" height="218" /></a>
                                    </div>
                                    <div class="text">
                                        <strong>Academy System</strong>
                                        <p>Academy STUDY</p>
                                    </div>
                                </div>
                                <div class="bottom-cards">
                                    <div class="cards-img">
                                        <a href="#"><img src="" alt="app" width="366" height="218" /></a>
                                    </div>
                                    <div class="text">
                                        <strong>Academy System</strong>
                                        <p>Academy STUDY</p>
                                    </div>
                                </div>
                                <div class="bottom-cards">
                                    <div class="cards-img">
                                        <a href="#"><img src="" alt="app" width="366" height="218" /></a>
                                    </div>
                                    <div class="text">
                                        <strong>Academy System</strong>
                                        <p>Academy STUDY</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}


                    </div>
                </div>
            </div>




            <div class="img-text">
                <div class="container">
                    <div class="imgtext-inner">
                        <div class="text">
                            <span>Let'S Discuss</span>
                            <h3>About Your <b> Next Project </b></h3>
                        </div>

                        <div class="btn">
                            {/* <Link to="/contact">GET IN TOUCH</Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Img;