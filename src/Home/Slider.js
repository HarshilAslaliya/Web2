import React, { useEffect } from "react";
import ReactDOM from 'react-dom/client';
import TextTransition, { presets } from 'react-text-transition';

const Slider = () => {
    const [index, setIndex] = React.useState(0);
    const TEXTS = ['Application Development', 'Web Development', 'UI-UX Design ', 'Digital Marketing'];
    useEffect(() => {

        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            1700, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <>
            <div class="slider">
                <div class="container">
                    <div class="inner-block">
                        <div class="slider-inner">
                            <div class="text">
                                <b> Creative Multi-Services IT Agency </b>
                                <h1>We’re Digital <br />
                                    <TextTransition springConfig={presets.wobbly} style={{ color: "#00b6e8" }}>{TEXTS[index % TEXTS.length]}</TextTransition>
                                    Agency
                                </h1>
                                <p> Innovatix Technologies is your one-stop destination for top-notch Website & Application Development solutions. We help you get go digital and unlock your business potential. </p>

                                <a href="#">Explore More<i class="fa-solid fa-arrow-right"></i> </a>
                            </div>

                            <div class="main-img">
                                <img src="./assets/img/2590504.svg" alt="main-img " height={529} width={529} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Slider;