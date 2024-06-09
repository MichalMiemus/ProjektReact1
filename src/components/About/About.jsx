import Employee from "../Employee/Employee";
import employees from "../../data/employees";
import "./About.css";

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
