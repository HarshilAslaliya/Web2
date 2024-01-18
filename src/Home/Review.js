import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Review = () => {
    const xyz = {
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    }
    return (
        <>
            <div class="review">
                <div class="container">
                    <div class="review-inner">
                        <div class="title">
                            <h2>What They Say<br />
                                About Our Company?</h2>
                        </div>

                        <OwlCarousel className='owl-theme' loop margin={10} nav {...xyz}>
                            <div class='item'>

                                <div class="text">
                                    <p>											Great work as fast and reliable. Always able to find the right
                                        solutions and very often suggest enhancements that makes the
                                        projects better - the best freelancer.</p>
                                </div>
                                <div class="name">
                                    <h4>Emilia Clarke</h4>
                                    <span>Founder</span>
                                </div>
                            </div>
                            <div class='item'>

                                <div class="text">
                                    <p>I would recommend this company to everyone! Responds quickly and
                                        always satisfies my needs. He knows a lot and is also
                                        giving me tips and stuff.</p>
                                </div>
                                <div class="name">
                                    <h4>Sumit Gajera</h4>
                                    <span>Founder</span>
                                </div>
                            </div>
                            <div class='item'>

                                <div class="text">
                                    <p>Innovatix Technologies gives amazing work wow i am so happy with
                                        the results thank you million times and also I'll
                                        create best relationship with Innovatix.
                                    </p>
                                </div>
                                <div class="name">
                                    <h4>Mohit Mindray</h4>
                                    <span>Founder</span>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Review;