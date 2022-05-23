import React from "react";
import "./home.scss";
// import FadeIn from 'react-fade-in';
import { useMediaQuery } from 'react-responsive'


const Home = () => { 
  
  return (
    
    <div >


<main>
      <section> 
        <h1>
          <span data-aos="fade-down" data-aos-duration="2000" className="sabrina"> Sabrina </span>
          <span data-aos="zoom-in-up" data-aos-duration="3000" className="stefanizzi"> Stefanizzi </span>
        </h1>

        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" 
            className="jrFrontDev">
          <span id="frontEnd" className="jrFront">Jr Front-End Dev</span>
          
        </div>
      </section>
    </main>


  </div>
  
  )
  
}
export default Home;
