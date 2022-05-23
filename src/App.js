// import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
// BrowserRouter :  est une implémentation de routeur qui utilise l'API d'historique HTML5 (pushState, replaceState et l'événement popstate) pour maintenir votre interface utilisateur synchronisée avec l'URL. C'est le composant parent qui est utilisé pour stocker tous les autres composants.

// Routes : c'est un nouveau composant introduit dans la v6 et une mise à jour du composant. Les principaux avantages des Routes over Switch sont :

// Relatif s et s
// Les itinéraires sont choisis en fonction de la meilleure correspondance au lieu d'être parcourus dans l'ordre.

// Route : La route est le composant affiché de manière conditionnelle qui restitue une interface utilisateur lorsque son chemin correspond à l'URL actuelle.

// Lien : le composant Lien est utilisé pour créer des liens vers différents itinéraires et implémenter la navigation dans l'application. Cela fonctionne comme une balise d' ancrage HTML .

// import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { createTheme, ThemeProvider } from "@material-ui/core/styles";

// CSS 
import './App.css';
import 'aos/dist/aos.css';


import AOS from 'aos';
import {useEffect} from 'react'

// COMPONENTS PAGES 
import Menu from "./components/menu/menu";
import HomePage from "./components/HomePage/home";
import About from './components/about/about';
import Works from './components/works/works'
import Skills from './components/skills/skills'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

// import CardGraphic from './components/cardGraphic/cardGraphic'

//Components




const App = () => {

  useEffect (() => {
    AOS.init()
    
    });

return (
    <div>
      <Router>
          <div className="App">
            
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="about" element={<About/>} />
              <Route path="skills" element={<Skills/>} />
              <Route path="works" element={<Works/>} />
            </Routes>
              
          </div>
          
              
              <About/>
              <Skills/>
              <Works/>
              
              <Menu/>
              <Contact/>
              <Footer/>
      </Router>

    </div>
  );

}
export default App;
