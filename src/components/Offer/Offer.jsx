import OfferItem from "../OfferItem/OfferItem";
import offers from "../../data/offers";
import "./Offer.css";

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
