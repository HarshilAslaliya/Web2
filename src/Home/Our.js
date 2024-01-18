import React from "react";
import Ourprops from "./Ourprops";

const Our = () => {
    return (
        <>
            <div class="our">
                <div class="container">
                    <div class="title">
                        <h2>
                            Our Specialization
                        </h2>
                    </div>

                    <div class="inner-block">
                        <div class="our-inner">
                            <Ourprops icon="./assets/img/coding%20-%20Copy.svg" src="./assets/img/coding.svg" title=" Web Development" text="We are creating elite and responsive websites with a cost-effective and flexible approach
                                with our excellent technology"/>

                            <Ourprops     icon="./assets/img/app-development.svg" src="./assets/img/app-development%20-%20Copy.svg" title=" Application Development" text="For industry-leading Android app development.We believe building an app needs amalgamation of passion." />

                            <Ourprops icon="./assets/img/design%20-%20Copy.svg"
                                src="./assets/img/design.svg"

                                title=" Ui Ux Designing" text="Stimulate the “Wow” Response from your Target Audience with Intelligent and Creative UI/UX Designing." />

                            <Ourprops icon="./assets/img/online-shopping%20(1).svg" src="./assets/img/online-shopping%20(1)%20-%20Copy.svg" title=" E -Commerece Development" text="We are creating elite and responsive websites with a cost-effective and flexible approach
                                with our excellent technology"/>

                            <Ourprops  icon="./assets/img/game-dev%20-%20Copy.svg" src="assets/img/game-dev.svg" title="Game Development" text="They do this by coding visual elements, programming features, and testing iterations until a game is ready for market."/>


                            <Ourprops icon="./assets/img/ai-ml%20(1).svg" src="./assets/img/ai-ml.svg" title="AI\ML Development" text="We leverage machine learning technologies and AI algorithms to build innovative and  improve business processes and communication." />

                            <Ourprops    icon="./assets/img/bullhorn%20(1).svg" src="./assets/img/bullhorn.svg" title=" Digital Marekting" text="We have experience to put and discover more leads.Improve visibility for your brand and products" />

                            <Ourprops icon="./assets/img/software-development%20(1).svg"  src="./assets/img/software-development.svg"   title="Custom Software" text="Create your own team of developers for your software development project on short term, at affordable prices." />





                            {/* 

                    
                            */}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Our;