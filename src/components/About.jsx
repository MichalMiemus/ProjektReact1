import React from "react";
import Employee from "./Employee";
import "../App.css";

const employees = [
  {
    name: "Imię Nazwisko 1",
    position: "dział 1",
    description:
      "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices in.",
    photo: `./img/e1.jpg`,
  },
  {
    name: "Imię Nazwisko 2",
    position: "dział 2",
    description:
      "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices in.",
    photo: `./img/e2.jpg`,
  },
  {
    name: "Imię Nazwisko 3",
    position: "dział 3",
    description:
      "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices in.",
    photo: `./img/e1.jpg`,
  },
];

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2 className="descr-about">Nasi specjaliści</h2>
        <ul className="employee-list">
          {employees.map((employee, index) => (
            <Employee
              key={index}
              name={employee.name}
              position={employee.position}
              description={employee.description}
              photo={employee.photo}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
