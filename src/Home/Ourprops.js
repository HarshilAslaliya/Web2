import React, { useRef, useState } from "react";
const Ourprops = (props) => {
// const [name, setName] = useState(false);


// const mytext = useRef();
// const text = useRef();
// function handlehover() {
// mytext.current.style.display = "none";
// text.current.style.display = "block";
// }

return (
<>
    <div class="cards">
        <div class="cards-main">
            <div class="cards-img">
                <a href="#"><img class="icon " src={props.icon} alt="icon" width="70" height="70" /></a>

                <a href="#"> <img class="icon-blog " src={props.src} alt="icon" width="70" height="70" /></a>

                {/* {name == true ?
                <>
                    <a href="#"><img class="icon" src={props.icon} alt="icon" width="70" height="70" /></a>
                </> : <>
                    <a href="#"><img src={props.src} alt="icon" width="70" height="70" /></a>
                </>}

                <a href="#"><img class="icon-blog" src={props.src} alt="icon" width="70" height="70" /></a> */}
            </div>
            {/* <div class="hover-blog">
                <a href="#"> <img class="icon-blog" src={props.src} alt="icon" width="70" height="70" /></a>
            </div> */}

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
export default Ourprops;