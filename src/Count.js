import React, { useEffect, useState } from 'react';


const CounterPreloader = () => {
    const [counter, setCounter] = useState(0);
    const targetNumber = 100;

    useEffect(() => {
        const updateCounter = () => {

            if (counter < targetNumber) {
                setCounter(counter + 1);
            } else {
                // Hide the preloader or do any other action when the counter reaches the target
                document.getElementById("preloader").style.display = "none";
            }
        };

            var interval = setInterval(updateCounter, 15); // Adjust the delay as needed
     

        return () => clearInterval(interval);
    }, [counter]);

    return (
        // <div id="preloader" className="preloader-container">
        //     <div className="counter">{counter}%</div>
        // </div>
        <div>
            <div class="preloader" id='preloader'>
                <div class="preloader-after" ></div>
                <div class="preloader-before"></div>
                <div class="preloader-block">
                    <div class="title">Innovatix INFOTECH</div>
                    <div class="percent counter" id="percent" >{counter}%</div>
                    <div class="loading">loading...</div>
                </div>
                <div class="preloader-bar ">
                    <div class="preloader-progress"></div>
                </div>

            </div>
        </div>
    );
};

export default CounterPreloader;
