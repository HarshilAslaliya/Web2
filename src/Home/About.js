import React from "react";
import Aboutprops from "./Aboutprops";
const About = () => {
    return (
        <>
            <div class="about">
                <div class="container">
                    <div class="title">
                        <h2>
                            Let's Talk About Your Requirement
                        </h2>
                    </div>

                    <div class="inner-block">
                        <div class="about-inner">
                            <Aboutprops icon="fa-solid fa-message" title=" we will call you!" text="Your Details please!!" />
                            <Aboutprops icon="fa-brands fa-skype" title="Skype Us" text="Live:innovatix Tech" />
                            <Aboutprops icon="fa-brands fa-google" title="Email Us" text="contact@innovatix.tech" />
                            <Aboutprops icon="fa-solid fa-phone" title=" Let's Talk" text=" (+91) 93289 49821" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
export default About;