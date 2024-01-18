import React, { useRef, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Work = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>

            <div class="work">
                <div class="container">
                    <div class="work-inner">
                        <div class="title">
                            <h2>Technologies we work with</h2>
                        </div>
                        <div class="d-flex mt-4 justify-content-center ">
                            <ul class="nav  nav-pills d-flex m-2  scrollmenu" id="pills-tab" role="tablist">
                                <li class="nav-item " role="presentation">
                                    <button class="nav-link clr      active" id="pills-Frontend-tab" data-bs-toggle="pill" data-bs-target="#pills-Frontend" type="button" role="tab" aria-controls="pills-Frontend" aria-selected="true">Frontend</button>
                                </li>

                                <li class="nav-item " role="presentation">
                                    <button class="nav-link clr  " id="pills-Backend-tab" data-bs-toggle="pill" data-bs-target="#pills-Backend" type="button" role="tab" aria-controls="pills-Backend" aria-selected="false">Backend</button>
                                </li>
                                <li class="nav-item " role="presentation">
                                    <button class="nav-link clr  " id="pills-database-tab" data-bs-toggle="pill" data-bs-target="#pills-database" type="button" role="tab" aria-controls="pills-database" aria-selected="false"> Databases</button>
                                </li>
                                <li class="nav-item " role="presentation">
                                    <button class="nav-link clr  " id="pills-mobile-tab" data-bs-toggle="pill" data-bs-target="#pills-mobile" type="button" role="tab" aria-controls="pills-mobile" aria-selected="false"> Mobile Development</button>
                                </li>
                                <li class="nav-item " role="presentation">
                                    <button class="nav-link clr  " id="pills-commerce-tab" data-bs-toggle="pill" data-bs-target="#pills-commerce" type="button" role="tab" aria-controls="pills-commerce" aria-selected="false">E-Commerce</button>
                                </li>

                                <li class="nav-item " role="presentation">
                                    <button class="nav-link clr  " id="pills-project-tab" data-bs-toggle="pill" data-bs-target="#pills-project" type="button" role="tab" aria-controls="pills-project" aria-selected="false">Project Manger</button>
                                </li>




                            </ul>
                        </div>


                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-Frontend" role="tabpanel" aria-labelledby="pills-Frontend-tab" tabindex="0">
                                <div class="bottom frontend  active-content" >
                                    <div class="inner-block">
                                        <div class="work-bottom">
                                            <div class="work-cards  ">
                                                <a href="#"   ><img data-aos="fade-up"
                                                    data-aos-anchor-placement="top-bottom" src="./assets/img/react.svg"
                                                    alt="react" height="70" width="70" /></a>
                                                <h4>React.js</h4>
                                            </div>
                                            <div class="work-cards">
                                                <a href="#"><img data-aos="fade-up"
                                                    data-aos-anchor-placement="top-bottom" src="./assets/img/angular.svg" alt="" height="70" width="70" /></a>
                                                <h4>Angular</h4>
                                            </div>

                                            <div class="work-cards">
                                                <a href="#"><img data-aos="fade-up"
                                                    data-aos-anchor-placement="top-bottom" src=" ./assets/img/300px-Vue-removebg-preview.png" alt="" height="70" width="70" /></a>
                                                <h4>vue.js</h4>
                                            </div>
                                            <div >
                                            </div>


                                            <div class="work-cards">
                                                <a href="#"><img data-aos="fade-up"
                                                    data-aos-anchor-placement="top-bottom" src=" ./assets/img/nextjs.svg" alt="" height="70" width="70" /></a>
                                                <h4>Next js</h4>
                                            </div>
                                            <div class="work-cards">
                                                <a href="#"><img data-aos="fade-up"
                                                    data-aos-anchor-placement="top-bottom" src="./assets/img/materialui.svg" alt="" height="70" width="70" /></a>
                                                <h4>Material ui</h4>
                                            </div>
                                            <div class="work-cards">
                                                <a href="#"><img data-aos="fade-up"
                                                    data-aos-anchor-placement="top-bottom" src="./assets/img/bootstrep.svg" alt="" height="70" width="70" /></a>
                                                <h4>Bootstrap</h4>
                                            </div>


                                            <div class="work-cards">
                                                <a href="#"><img data-aos="fade-up"
                                                    data-aos-anchor-placement="top-bottom" src=" ./assets/img/html-5.png" alt="" height="70" width="70" /></a>
                                                <h4>html</h4>
                                            </div>
                                            <div class="work-cards">
                                                <a href="#"><img data-aos="fade-up"
                                                    data-aos-anchor-placement="top-bottom" src=" ./assets/img/kisspng-web-development-cascading-style-sheets-css3-comput-css-5ada20be146fc2.8807141415242446700837-removebg-preview.png" alt="" height="70" width="70" /></a>
                                                <h4>css</h4>
                                            </div>
                                            <div class="work-cards">
                                                <a href="#"><img data-aos="fade-up"
                                                    data-aos-anchor-placement="top-bottom" src=" ./assets/img/Untitled-removebg-preview.png" alt="" height="70" width="70" /></a>
                                                <h4>Tailwindcss</h4>
                                            </div>
                                            <div class="work-cards">
                                                <a href="#"><img data-aos="fade-up"
                                                    data-aos-anchor-placement="top-bottom" src=" ./assets/img/ant-design-logo-EAB6B3D5D9-seeklogo.com-removebg-preview.png" alt="" height="70" width="70" /></a>
                                                <h4>ant design</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div class="tab-pane fade" id="pills-Backend" role="tabpanel" aria-labelledby="pills-Backend-tab" tabindex="0">
                                <div class="bottom backend">
                                    <div class="inner-block">
                                        <div class="work-bottom">
                                            <div class="work-cards  ">
                                                <a href="#"><img data-aos="fade-up"
                                                    data-aos-anchor-placement="top-bottom" src="./assets/img/nodejs.svg" alt="react" height="70" width="70" /></a>
                                                <h4>node.js</h4>
                                            </div>
                                            <div class="work-cards">
                                                <a href="#"><img data-aos="fade-up"
                                                    data-aos-anchor-placement="top-bottom" src="./assets/img/nestjs.svg" alt="" height="70" width="70" /></a>
                                                <h4>Nest</h4>
                                            </div>

                                            <div class="work-cards">
                                                <a href="#"><img data-aos="fade-up"
                                                    data-aos-anchor-placement="top-bottom" src=" ./assets/img/laravel.svg" alt="" height="70" width="70" /></a>
                                                <h4>laravel</h4>
                                            </div>






                                            <div class="work-cards">
                                                <a href="#"><img data-aos="fade-up"
                                                    data-aos-anchor-placement="top-bottom" src=" ./assets/img/php.svg" alt="" height="70" width="70" /></a>
                                                <h4>php</h4>
                                            </div>
                                            <div class="work-cards">
                                                <a href="#"><img data-aos="fade-up"
                                                    data-aos-anchor-placement="top-bottom" src="./assets/img/python.svg" alt="" height="70" width="70" /></a>
                                                <h4>python</h4>
                                            </div>
                                            <div class="work-cards">
                                                <a href="#"><img data-aos="fade-up"
                                                    data-aos-anchor-placement="top-bottom" src="./assets/img/flask.svg" alt="" height="70" width="70" /></a>
                                                <h4>flask</h4>
                                            </div>
                                            <div class="work-cards">
                                                <a href="#"><img data-aos="fade-up"
                                                    data-aos-anchor-placement="top-bottom" src=" ./assets/img/django.svg" alt="" height="70" width="70" /></a>
                                                <h4>Django</h4>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="tab-pane fade" id="pills-database" role="tabpanel" aria-labelledby="pills-database-tab" tabindex="0">



                                <div class="bottom database">

                                    <div class="inner-block">
                                        <div class="work-bottom">
                                            <div class="work-cards  ">
                                                <a href="#"><img data-aos="fade-up"
                                                    data-aos-anchor-placement="top-bottom" src="./assets/img/mongodb.svg" alt="react" height="70" width="70" /></a>
                                                <h4>mongodb</h4>
                                            </div>
                                            <div class="work-cards">
                                                <a href="#"><img data-aos="fade-up"
                                                    data-aos-anchor-placement="top-bottom" src="./assets/img/mysql.svg" alt="" height="70" width="70" /></a>
                                                <h4>mysql</h4>
                                            </div>

                                            <div class="work-cards">
                                                <a href="#"><img data-aos="fade-up"
                                                    data-aos-anchor-placement="top-bottom" src=" ./assets/img/postgresql.svg" alt="" height="70" width="70" /></a>
                                                <h4>Postgresql</h4>
                                            </div>
                                            <div class="work-cards">
                                                <a href="#"><img data-aos="fade-up"
                                                    data-aos-anchor-placement="top-bottom" src=" ./assets/img/firebase.svg" alt="" height="70" width="70" /></a>
                                                <h4>Firebase</h4>
                                            </div>
                                            <div class="work-cards">
                                                <a href="#"><img data-aos="fade-up"
                                                    data-aos-anchor-placement="top-bottom" src="./assets/img/Sqlite.svg" alt="" height="70" width="70" /></a>
                                                <h4>Sqlite</h4>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="pills-mobile" role="tabpanel" aria-labelledby="pills-mobile-tab" tabindex="0">

                                <div class="bottom  mobile" >
                                    <div class="inner-block">
                                        <div class="work-bottom">
                                            <div class="work-cards  ">
                                                <a href="#"><img data-aos="fade-up"
                                                    data-aos-anchor-placement="top-bottom" src="./assets/img/Apple.svg" alt="react" height="70" width="70" /></a>
                                                <h4>ios</h4>
                                            </div>
                                            <div class="work-cards">
                                                <a href="#"><img data-aos="fade-up"
                                                    data-aos-anchor-placement="top-bottom" src="./assets/img/android.svg" alt="" height="70" width="70" /></a>
                                                <h4>Android</h4>
                                            </div>

                                            <div class="work-cards">
                                                <a href="#"><img data-aos="fade-up"
                                                    data-aos-anchor-placement="top-bottom" src=" ./assets/img/flutter.svg" alt="" height="70" width="70" /></a>
                                                <h4>Flutter</h4>
                                            </div>
                                            <div class="work-cards">
                                                <a href="#"><img data-aos="fade-up"
                                                    data-aos-anchor-placement="top-bottom" src=" ./assets/img/reactnative.svg" alt="" height="70" width="70" /></a>
                                                <h4>React Native</h4>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="tab-pane fade" id="pills-commerce" role="tabpanel" aria-labelledby="pills-commerce-tab" tabindex="0">

                                <div class="bottom e-commerce">
                                    <div class="inner-block">
                                        <div class="work-bottom">
                                            <div class="work-cards  ">
                                                <a href="#"><img data-aos="fade-up"
                                                    data-aos-anchor-placement="top-bottom" src="./assets/img/shopify.svg" alt="react" height="70" width="70" /></a>
                                                <h4>Shopify</h4>
                                            </div>
                                            <div class="work-cards">
                                                <a href="#"><img data-aos="fade-up"
                                                    data-aos-anchor-placement="top-bottom" src="./assets/img/wordpress.svg" alt="" height="70" width="70" /></a>
                                                <h4>Wordpress</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="tab-pane fade" id="pills-project" role="tabpanel" aria-labelledby="pills-project-tab" tabindex="0">

                                <div class="bottom project" >
                                    <div class="inner-block">
                                        <div class="work-bottom">
                                            <div class="work-cards  ">
                                                <a href="#"><img data-aos="fade-up"
                                                    data-aos-anchor-placement="top-bottom" src="./assets/img/jira.svg" alt="react" height="70" width="70" /></a>
                                                <h4>Jira</h4>
                                            </div>
                                            <div class="work-cards  ">
                                                <a href="#"><img data-aos="fade-up"
                                                    data-aos-anchor-placement="top-bottom" src="./assets/img/asana.svg" alt="react" height="70" width="70" /></a>
                                                <h4>Asana</h4>
                                            </div>
                                            <div class="work-cards  ">
                                                <a href="#"><img data-aos="fade-up"
                                                    data-aos-anchor-placement="top-bottom" src="./assets/img/slack.svg" alt="react" height="70" width="70" /></a>
                                                <h4>Slack</h4>
                                            </div>



                                            <div class="work-cards">
                                                <a href="#"><img data-aos="fade-up"
                                                    data-aos-anchor-placement="top-bottom" src="./assets/img/images-removebg-preview.png" alt="" height="70" width="70" /></a>
                                                <h4>trello</h4>
                                            </div>
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
export default Work;