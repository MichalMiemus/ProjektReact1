import Header from "../Header/Header";
import "./Main.css";

function Description() {
  return (
    <section className="descr-section" id="main">
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
    </section>
  );
}

export default Description;
