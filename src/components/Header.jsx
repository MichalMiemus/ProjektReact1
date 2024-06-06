import React from "react";
import "../App.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-menu">
          moja firma
          <nav>
            <ul className="links">
              <li>
                <a href="#about">o nas</a>
              </li>
              <li>
                <a href="#offer">oferta</a>
              </li>
              <li className="nocursor">kontakt</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
