import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-menu">
          Nazwa firmy - wszelkie prawa zastrzeżone, 2024
          <nav>
            <ul className="links">
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} size="2xl" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} size="2xl" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
