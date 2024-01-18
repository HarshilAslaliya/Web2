import React from "react";
const Aboutprops = (props) => {
    return (
        <>
            <div class="cards">
                <div class="cards-main">
                    <div class="cards-img">
                        <a href="#"><i class={props.icon}></i></a>
                    </div>
                    <div class="title">
                        <h3>
                            {props.title}
                        </h3>
                    </div>
                    <p>{props.text}</p>
                </div>
            </div>
        </>
    );
}
export default Aboutprops;