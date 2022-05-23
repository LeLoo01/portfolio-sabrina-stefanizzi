
import { IoLogoReact } from "react-icons/io5"; 
import { ImHtmlFive2 } from "react-icons/im";
import { ImCss3 } from "react-icons/im";
import { DiSass } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiNodedotjs } from "react-icons/si";
import { VscGithubAlt } from "react-icons/vsc";
import { FaWordpressSimple } from "react-icons/fa";
import { SiAdobeindesign } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { SiAdobexd } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";


import style from './skills.module.css'
// import {AOS} from 'aos';

// import { useMediaQuery } from 'react-responsive'

const Skills = () => {

     
    return (
        <div>
        <h2 className={style.skills} data-aos="zoom-in-down"
         data-aos-anchor-placement="top-center"
         data-aos-duration="1000">Skills</h2>
        
        <div id="divIconsgroup" className={style.divIconsgroup}>
         
        <div className={style.iconness}>
        <ul className={style.firstIconGroup}>
    
                <div>
                    <li data-aos="zoom-in-down" data-aos-offset="200" data-aos-duration="1000" className="icon icone1"><ImHtmlFive2/></li>
                    <p className={style.langWeb}>HTML 5</p>
                </div>
                <div className={style.logoHover}><li data-aos="zoom-in-up"      data-aos-offset="200" data-aos-duration="1000" className="icone icone2"><ImCss3/></li>
                    <p className= {style.langWeb}>CSS</p>
                </div>

                <div>
                    <li className={style.icon.icone3} data-aos="zoom-in-down" data-aos-duration="1000"  data-aos-offset="200"><DiSass/></li>
                    <p className= {style.langWeb}>Sass</p>
                </div>

                <div>
                    <li className={style.icon.icone4} data-aos="zoom-in-up" data-aos-duration="1000"  data-aos-offset="200"><IoLogoReact/></li>
                    <p className= {style.langWeb}>React js</p>
                </div>
                    
                <div>
                    <li className={style.icon.icone5} data-aos="zoom-in-down"  data-aos-duration="1000" data-aos-offset="200"><IoLogoJavascript/></li>
                    <p className= {style.langWeb}>JavaScript</p>
                </div> 

                <div>
                    <li className={style.icon.icone6} data-aos="zoom-in-up"  data-aos-duration="1000" data-aos-offset="200"><SiNodedotjs/></li>
                    <p className= {style.langWeb}>Node js</p>
                </div>
                
                <div>
                    <li className={style.icone8} data-aos="zoom-in-down" data-aos-duration="1000" data-aos-offset="200"><FaWordpressSimple/> </li>
                    <p className= {style.langWeb}>Wordpress</p>
                </div> 

            </ul>
            
    
            <ul className="secondIconGroup">
    
                <div>
                    <li className={style.icone9} data-aos="zoom-in-up"  data-aos-duration="1000" data-aos-offset="200"><BsBootstrap/> </li>
                    <p className= {style.langWeb}>Bootstrap</p>
                </div>
                <div>
                    <li className={style.icone10} data-aos="zoom-in-down" data-aos-duration="1000" data-aos-offset="200"><VscGithubAlt/> </li>
                    <p className= {style.langWeb}>Github</p>
                </div>

                <div>
                    <li className={style.icone11} data-aos="zoom-in-up" data-aos-duration="1000" data-aos-offset="200">< SiAdobephotoshop /></li>
                    <p className= {style.langWeb}>Photoshop</p>
                </div>

                <div>
                    <li className={style.icone12} data-aos="zoom-in-down" data-aos-duration="1000" data-aos-offset="200">< SiAdobeillustrator /> </li>
                    <p className= {style.langWeb}>Illustrator</p>
                </div>

                <div>   
                    <li className={style.icone13} data-aos="zoom-in-up"  data-aos-duration="1000" data-aos-offset="200"><SiAdobeindesign/> </li>
                    <p className= {style.langWeb}>InDesign</p>
                </div>

                <div>
                    <li className={style.icone14} data-aos="zoom-in-down" data-aos-duration="1000" data-aos-offset="200">< SiAdobexd/></li>
                    <p className= {style.langWeb}>XD</p>
                </div>

                <div>
                    <li className={style.icone15} data-aos="zoom-in-up" data-aos-duration="1000" data-aos-offset="200"></li>
                    <p className= {style.langWeb}>Animate</p>
                </div>
            </ul>
            </div>
        </div>
        </div>
    )
}
export default Skills; 