import React, { useEffect, useState } from "react";
const Makes = () => {
    const [show, setshow] = useState();
    function clickchange() {
        setshow(!show);
    }
    const [down, setdown] = useState();
    function clickdown() {
        setdown(!down);
    }

    useEffect(() => {
        var skillPers = document.querySelectorAll(".skill-per");

        skillPers.forEach(function (skillPer) {
            var per = parseFloat(skillPer.getAttribute("per"));
            skillPer.style.width = per + "%";

            var animatedValue = 0;
            var startTime = null;

            function animate(timestamp) {
                if (!startTime) startTime = timestamp;
                var progress = timestamp - startTime;
                var stepPercentage = progress / 1000; // Dividing by duration in milliseconds (1000ms = 1s)

                if (stepPercentage < 1) {
                    animatedValue = per * stepPercentage;
                    skillPer.setAttribute("per", Math.floor(animatedValue) + "%");
                    requestAnimationFrame(animate);
                } else {
                    animatedValue = per;
                    skillPer.setAttribute("per", Math.floor(animatedValue) + "%");
                }
            }

            requestAnimationFrame(animate);
        });
    }, []);



    return (
        <>
            <div class="makes">
                <div class="container">
                    <div class="makes-inner">
                        <div class="title">
                            <h2>
                                What makes us special?
                            </h2>
                        </div>
                        <p>
                            We’re made up of a group of diverse and talented individuals with different skills and backgrounds,
                            but the same passion for making online better for businesses of all shapes and sizes.
                        </p>
                        <strong> We work with following Technologies!! </strong>
                        <div class="inner-block">
                            <div class="main-cards">
                                <div class="left-bar">
                                <div class="skill-main">
                                    <div class="skill-wrrap">
                                        <div class="skill-name">Javascript</div>
                                        <div class="skill-bar">
                                            <div class="skill-per html" per="90"></div>
                                        </div>
                                    </div>

                                    <div class="skill-wrrap">
                                        <div class="skill-name">ANDROID</div>
                                        <div class="skill-bar">
                                            <div class="skill-per" per="80"></div>
                                        </div>
                                    </div>

                                    <div class="skill-wrrap">
                                        <div class="skill-name">PHP</div>
                                        <div class="skill-bar">
                                            <div class="skill-per" per="75"></div>
                                        </div>
                                    </div>

                                    <div class="skill-wrrap">
                                        <div class="skill-name">WORDPRESS</div>
                                        <div class="skill-bar">
                                            <div class="skill-per" per="60"></div>
                                        </div>
                                    </div>   <div class="skill-wrrap">
                                        <div class="skill-name">MY SQL</div>
                                        <div class="skill-bar">
                                            <div class="skill-per" per="80"></div>
                                        </div>
                                    </div>   <div class="skill-wrrap">
                                        <div class="skill-name">HTML</div>
                                        <div class="skill-bar">
                                            <div class="skill-per" per="95"></div>
                                        </div>
                                    </div>   <div class="skill-wrrap">
                                        <div class="skill-name">SEO</div>
                                        <div class="skill-bar">
                                            <div class="skill-per" per="82"></div>
                                        </div>
                                    </div>



                                </div>
                                </div>

                                {/* <div class="left-bar">
                                    <div class="text">
                                        <span>PHP</span>
                                        <span>90%</span>
                                    </div>
                                    <form action="">
                                        <input type="range" name="range" min="10" max="60" disabled />
                                    </form>
                                    <div class="text">
                                        <span>PHP</span>
                                        <span>90%</span>
                                    </div>
                                    <form action="">
                                        <input type="range" name="range" min="50" />
                                    </form>
                                    <div class="text">
                                        <span>PHP</span>
                                        <span>90%</span>
                                    </div>
                                    <form action="">
                                        <input type="range" name="range" min="60" />
                                    </form>
                                    <div class="text">
                                        <span>PHP</span>
                                        <span>90%</span>
                                    </div>
                                    <form action="">
                                        <input type="range" name="range" min="50" />
                                    </form>
                                    <div class="text">
                                        <span>PHP</span>
                                        <span>90%</span>
                                    </div>
                                    <form action="">
                                        <input type="range" name="range" min="10" />
                                    </form>
                                    <div class="text">
                                        <span>PHP</span>
                                        <span>90%</span>
                                    </div>
                                    <form action="">
                                        <input type="range" name="range" min="40" />
                                    </form>
                                </div> */}
                                <div class="right-bar">
                                    <div class="cards">
                                        <h3>innovatix technologies</h3><i class="fa-solid fa-angle-down"></i>
                                        <p>

                                            We provide effective solutions that allow you to achieve your business goals and
                                            measurable benefits. We focus on a clear partnership.We take a customer-oriented
                                            approach to every task.
                                        </p>
                                    </div>
                                    <div class="cards">
                                        <h3>Long-Term Relationships </h3><i onClick={clickchange} class="fa-solid fa-angle-down"></i>
                                        {show ?
                                            <p>

                                                Our main purpose is to generate healthy lasting relationships and secured growth with our clients. We make sure to accomplish gains via a standardized level of client satisfaction. To add more to it, our skilled team assists our faithful clients to endeavor long-term and prolific relationships with their customers via our impressive Services.
                                            </p> : null
                                        }
                                    </div>
                                    <div class="cards">
                                        <h3>Investing in technologies</h3><i onClick={clickdown} class="fa-solid fa-angle-down"></i>
                                        {down ?
                                            <p>

                                                Keeping in mind the time-frame intends to deliver the perfect business results at reasonable price. We have the ability to maintain deadlines in a cost-effective way and focusing on the qualitative execution.
                                            </p> : null
                                        }
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
export default Makes;