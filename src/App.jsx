import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Offer from "./components/Offer";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="wrapper">
      <div className="descr-section" id="main">
        <Header />
        <div className="fs-overlay">
          <div className="container">
            <div className="site-descr">
              <h1 className="descr-main">
                Nasza firma oferuje najwyższej jakości produkty.
              </h1>
              <div className="descr-secondary">
                Nie wierz nam na słowo - sprawdź
              </div>
              <a href="#offer" className="button">
                oferta
              </a>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Offer />
      <Footer />
    </div>
  );
};

export default App;
