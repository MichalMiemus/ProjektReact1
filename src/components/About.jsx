import React from "react";
import Employee from "./Employee";
import "../App.css";

const employees = [
  {
    name: "Imię Nazwisko 1",
    position: "dział 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices in.",
    photo: `./e1.jpg`,
  },
  {
    name: "Imię Nazwisko 2",
    position: "dział 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices in.",
    photo: `./e2.jpg`,
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
