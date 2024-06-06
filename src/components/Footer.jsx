import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-menu">
          Nazwa firmy - wszelkie prawa zastrzeżone, 2024
          <nav>
            <ul className="links">
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram fa-2xl"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-square-facebook fa-2xl"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
