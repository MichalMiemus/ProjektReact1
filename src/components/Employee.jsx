import React from "react";
import "../App.css";

const Employee = ({ name, position, description, photo }) => {
  return (
    <li className="employee">
      <div className="photo-container">
        <div
          className="employee-photo"
          style={{ backgroundImage: `url(${photo})` }}
        ></div>
      </div>
      <div className="info-container">
        <div className="name">
          {name} [{position}]
        </div>
        <div className="description">{description}</div>
      </div>
    </li>
  );
};

export default Employee;
