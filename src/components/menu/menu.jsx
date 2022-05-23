import React from "react";
import style from "./menu.module.scss";
// import "../style/menu.css";

import { Link } from "react-router-dom";

// ####  MENU ####
class Menu extends React.Component {
  state = {
    isMenuOpen: false,
  };

  closeMenu = () =>
    this.setState(({ isMenuOpen }) => ({ isMenuOpen: !isMenuOpen }));

  render() {
    const { isMenuOpen } = this.state;

    return (
      // Permet de grouper un ensemble de balises
      // Un fragement React peut s'ecrire  "<React.Fragement>...</React.Fragment> ou <>...</>
      <>
        <div
          className={`${style.menuBtn} ${isMenuOpen ? style.closer : ""}`}
          onClick={this.closeMenu}
        >
          <div
            className={`${style.btnLine} ${isMenuOpen ? style.closer : ""}`}
          />
          <div
            className={`${style.btnLine} ${isMenuOpen ? style.closer : ""}`}
          />
          <div
            className={`${style.btnLine} ${isMenuOpen ? style.closer : ""}`}
          />
        </div>
        <div className={`${style.menuOverlay} ${isMenuOpen ? style.show : ""}`}>
          
          <nav>
            <ul>
              <li id="home">
                <Link to="/" onClick={this.closeMenu}>
                  HOME
                </Link>
              </li>

              <li id="about">
                <Link to="/about" onClick={this.closeMenu}>
                  ABOUT
                </Link>
              </li>
              <li id="skills">
                <Link to="/skills" onClick={this.closeMenu}>
                  SKILLS
                </Link>
              </li>

              <li id="works">
                <Link to="/works" onClick={this.closeMenu}>
                  WORKS
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
}
// ### FIN MENU ###


export default Menu;
