import React from "react";
import  "./about.css"
// import Icon from '../skills/skills'


import { RiDoubleQuotesL } from "react-icons/ri";
import { ImFilePdf } from "react-icons/im";

import pdf from "./sabStefa.pdf"


const About = () => {
    return (
    <div className="aboutcadre" >
        <section>
            <h2 className='about' data-aos="zoom-in-down"
             data-aos-anchor-placement="top-center"
             data-aos-duration="2000">About</h2>
            <figure>
                <blockquote data-aos="flip-up"  data-aos-duration="2000">
                <div>
                    <div className="quot"><RiDoubleQuotesL/></div>
                    
                    <span className="citation"> Faites confiance à cette petite voix dans votre tête</span>
                    
                    <span className="citation"> qui dit :  " ne serait-ce pas interréssant si ..." </span>
                    <br />
                    <span className="citation">Et ensuite,  </span>
                    <span className="citation">faites-le ! </span>
                    </div>
                    <figcaption className="citation" ><i>Duane Michals</i></figcaption>    
                </blockquote>
            </figure>

            <div className="cvdiv">
                <a className="pdf" href={pdf} rel="noopener noreferrer" target="_blank">CV</a>
            </div>

                    
            
            

        </section>
    </div>
    );
};
export default About;
