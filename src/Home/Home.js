import React from "react";
import Slider from "./Slider";
import Our from "./Our";
import Conatct from "./Contact";
import About from "./About";
import Review from "./Review";
import Client from "./Client";
import Work from "./Work";
import Scroll from "./Scroll";
const Home = () => {
  return (

    <>
      <Scroll />
      <Slider />
      <Client />
      <Our />
      <Work />
      <Conatct />
      <Review />
      <About />

    </>
  );
}
export default Home;