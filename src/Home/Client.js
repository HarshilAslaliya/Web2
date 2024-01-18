import React, { useEffect } from "react";
const Client = () => {

    // useEffect(() => {
    //     const counters = document.querySelectorAll(".counter");

    //     counters.forEach((counter) => {
    //         counter.innerText = "0";

    //         const updateCounter = () => {
    //             const target = +counter.getAttribute("data-target");
    //             const c = +counter.innerText;

    //             const increment = target / 200;
    //             console.log("<<<<",increment);

    //             if (c < target) {
    //                 counter.innerText = `${Math.ceil(c + increment)}`;
    //                 setTimeout(updateCounter, 100);
    //             } else {
    //                 counter.innerText = `${target}+`;
    //             }
    //         };

    //         updateCounter();
    //     });
    // }, []);


    return (
        <>
            {/* <div class="counter-container">
    <i class="fab fa-twitter fax-3x"></i>
    <div class="counter" data-target="12000"></div>
    <span>Twitter Followers</span>
  </div>

  <div class="counter-container">
    <i class="fab fa-youtube fax-3x"></i>
    <div class="counter" data-target="5000"></div>
    <span>Youtube Subscribers</span>
  </div>

  <div class="counter-container">
    <i class="fab fa-facebook fax-3x"></i>
    <div class="counter" data-target="7500"></div>
    <span>Facebook Fans</span>
  </div> */}



            <div class="client">
                <div class="container">
                    <div class="inner-block">
                        <div class="client-inner">


                            {/* <div class="counters">
                                <span class="counter" data-target="12000">60</span>
                                <span>+</span>
                            </div>
                            <div class="client-text">
                                <h6> ACTIVE CLIENTS</h6>
                            </div> */}


                            <div class="counter-container client-cards">
                                <div class="counter" data-target="120">260+</div>
                                <h6>ACTIVE CLIENTS</h6>
                            </div>



                            <div class="counter-container client-cards">
                                <div class="counter" data-target="10">150+</div>
                                <h6>PROJECTS DONE</h6>
                            </div>

                            <div class="counter-container client-cards">

                                <div class="counter" data-target="500">70+</div>
                                <h6>IT EXPERTS</h6>
                            </div>

                            <div class="counter-container client-cards">

                                <div class="counter" data-target="75">6+</div>
                                <h6>GLORIOUS YEARS</h6>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Client;