import React from "react";
import OfferItem from "./OfferItem";
import "../App.css";

const offers = [
  { title: "Usługa 1", isNew: true },
  { title: "Usługa 2", isNew: false },
  { title: "Usługa 3", isNew: false },
  { title: "Usługa 4", isNew: false },
  { title: "Usługa 5", isNew: false },
  { title: "Usługa 6", isNew: true },
  { title: "Usługa 7", isNew: false },
  { title: "Usługa 8", isNew: false },
];

const Offer = () => {
  return (
    <section className="offer-section" id="offer">
      <div className="container">
        <h2 className="descr-offer">Czym zajmuje się nasza firma?</h2>
        <div className="grid-container">
          {offers.map((offer, index) => (
            <OfferItem key={index} title={offer.title} isNew={offer.isNew} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
