import Main from "./components/Main/Main";
import About from "./components/About/About";
import Offer from "./components/Offer/Offer";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="wrapper">
      <Main />
      <About />
      <Offer />
      <Footer />
    </div>
  );
};

export default App;
