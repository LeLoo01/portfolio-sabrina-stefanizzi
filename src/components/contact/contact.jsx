import React from 'react';
 import { AiOutlineMail } from "react-icons/ai";
 import { RiLinkedinLine } from "react-icons/ri";
 import { VscGithubAlt } from "react-icons/vsc";


import style from'./contact.module.css'

const Contact = () => {
    return(
        <div id={style.contact}>
            
                <div id={style.iconsContact}>
                    <a href='mailto:sabrina.stefa@gmail.com' target='blank' ><AiOutlineMail id={style.linkInSide}/></a>
                </div>

                <div id={style.iconsContact}>
                    <a href='https://www.linkedin.com/in/sabrina-stefanizzi/' target='blank' ><RiLinkedinLine id={style.linkInSide}/></a></div>
                <div>

                <div id={style.iconsContact}>
                    <a href='https://github.com/LeLoo01' target='blank' ><VscGithubAlt id={style.linkInSide}/></a></div>
                </div>


                    
        </div>
        
        
        )
    }
    export default Contact; 
    
    
    
    
    
    // <div style={{ width: '100%' }} className='bgContact'>
    //     <section>
    //         <h2 className='titleContact' data-aos="zoom-in-down"
    //          data-aos-anchor-placement="top-center"
    //          data-aos-duration="2000">Contact</h2>
    //         <div className='contactIcones'> 

    //             <div>
    //                 <a href='mailto:sabrina.stefa@gmail.com' target='blank' ><AiOutlineMail/></a>
    //             </div>
    //             <div>
    //                 <a href='https://www.linkedin.com/in/sabrina-stefanizzi/' target='blank'><RiLinkedinLine/></a></div>

    //             <div>
    //                 <a href='https://github.com/LeLoo01' target='blank'><VscGithubAlt/></a></div>
    //             </div>
            
    //     </section>
    // </div>