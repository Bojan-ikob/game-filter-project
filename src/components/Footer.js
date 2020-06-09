import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.png";
import "../css/footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="f-linkovi">
        <ul>
          <Link to="/aboutUs">
            <li>About Us</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>

          <a href="https://www.facebook.com/pg/brainster.co/photos/">
            <li>Galery</li>
          </a>
        </ul>
      </div>
      <div className="f-Logo">
        <img src={Logo} alt="slika" />
      </div>
      <div className="f-f-awsome">
        <a href="https://www.linkedin.com/school/brainster-co/">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a href="https://twitter.com/BrainsterCo">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="https://www.facebook.com/brainster.co">
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
