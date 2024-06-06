import React from "react";
import "../App.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2 className="descr-about">Nasi specjaliści</h2>
        <ul className="employee-list">
          <li className="employee">
            <div className="photo-container">
              <div
                className="employee-photo"
                style={{
                  backgroundImage: `url('./e1.jpg')`,
                }}
              ></div>
            </div>
            <div className="info-container">
              <div className="name">Imię Nazwisko [ dział ]</div>
              <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                vel massa et lacus egestas cursus a non magna. Fusce scelerisque
                blandit nunc, id malesuada ex lobortis a. Integer felis nisi,
                tempor elementum lorem in, varius pellentesque ligula. Duis
                efficitur lacinia enim, non tincidunt libero ultrices in.
              </div>
            </div>
          </li>
          <li className="employee">
            <div className="info-container">
              <div className="name">Imię Nazwisko [ dział ]</div>
              <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                vel massa et lacus egestas cursus a non magna. Fusce scelerisque
                blandit nunc, id malesuada ex lobortis a. Integer felis nisi,
                tempor elementum lorem in, varius pellentesque ligula. Duis
                efficitur lacinia enim, non tincidunt libero ultrices in.
              </div>
            </div>
            <div className="photo-container">
              <div
                className="employee-photo"
                style={{
                  backgroundImage: `url('./e2.jpg')`,
                }}
              ></div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
