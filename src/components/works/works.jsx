import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';

import "./works.css";



import Gallery from '../a/gallery'
import GalleryGraphic from '../b/galleyGraphic'

import Card from "../card/card";
import styled from "styled-components";
import img1 from "../../img/jdldCover.png";
import img2 from "../../img/hkt.png";
import img4 from "../../img/comDemoiselles.jpg";
import img5 from "../../img/ElPatio-logo.jpg";

// import style from './works.module.scss'
const CardContainer = styled.div`
width: 100vw;
height: 100vh;

display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
`;

const Separator = styled.span`
    margin-left: 25px;
    margin-right: 25px;
`;

const Works = () => {
    return (
        <div style={{ width: "100%" }} className="bgWorks">
        <section>
            <a href="../works/works.jsx"><h2
                data-aos="zoom-in-down"
                data-aos-anchor-placement="top-center"
                data-aos-duration="2000"
                className="titleWorks"
            >
                Works
            </h2></a>
            
        </section>

        <TypeWriterEffect
            textStyle={{ fontFamily: 'Poppins', 
            color:'white', 
            fontSize:'4rem', 
            textAlign:'center', 
            marginTop:"100px",
            marginBottom:0
            }}

            startDelay={100}
            cursorColor="white"
            text="The Web Section"
            typeSpeed={100}
            // scrollArea={works}
          />
        
        {/* TODOMettre une capture d'ecran de l'annimation du hackaton */}
        
        <CardContainer>
            
            <Card title={"Com des Demoiselles"}  imgUrl={img4} txtBody={"Site pour une agence de communication bruxelloise"} linkWeb={"http://localhost:8888/comdd/"}/>
            <Separator />

            <Card title={"El Patio : Paradise of Koi"}  imgUrl={img5} txtBody={"Site réalisé lors d'un stage avril/mai 2022 dans la cadre de la formation chez Interface3"} linkWeb={"https://elpatio.be"}/>
            <Separator />
           
           <Card title={"On connait la chanson"}  imgUrl={img2} txtBody={"Hackaton de 2.5 jours, suite à la formation suivie chez Interface3 en 2021 - 2022 "} linkWeb={"https://quizzmusical.interface3.be/"} linkGit={"https://github.com/LeLoo01/hkt-quizzMusical"}/>
        <Separator />

           <Card title={"Jdld - j'aurais du lui dire"}  imgUrl={img1} txtBody={"Projet réalisé en groupe suite à la formation suivie chez Interface3 en 2021 - 2022 "} linkWeb={"https://jdld.interface3.be"} linkGit={"https://github.com/LeLoo01/portfolioSabrina"}/>
        </CardContainer>

        <TypeWriterEffect
                textStyle={{ fontFamily: 'Poppins', 
                color:'white', 
                fontSize:'4rem', 
                textAlign:'center', 
                marginBottom:'100px',
                marginTop:0
                 }}
                startDelay={100}
                cursorColor="white"
                text="The Pictures Section"
                typeSpeed={100}
                // scrollArea={works}
              />

              <Gallery/>

              <TypeWriterEffect
                textStyle={{ fontFamily: 'Poppins', 
                color:'white', 
                fontSize:'4rem', 
                textAlign:'center', 
                marginBottom:'100px',
                marginTop:"100px"
                 }}
                startDelay={100}
                cursorColor="white"
                text="The Graphic Section"
                typeSpeed={100}
                // scrollArea={works}
              />

            <GalleryGraphic/>

        </div>
        
        
    );
};


export default Works;
