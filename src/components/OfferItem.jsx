import React from "react";
import "../App.css";

const OfferItem = ({ title, isNew }) => {
  return (
    <div className="grid-item">
      {isNew && <span className="corner-circle"></span>}
      <div className="service-title-container">
        <div>{title}</div>
        {isNew && <div className="service-title-new">(nowość)</div>}
      </div>
    </div>
  );
};

export default OfferItem;
