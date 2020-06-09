import React, { useState, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import "../css/sidebar.css";
import Logo from "../logo.png";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const [nav, setNav] = useState(true);
  useEffect(() => {
    let scrollPos = 0;
    window.addEventListener("scroll", () => {
      if (document.body.getBoundingClientRect().top > scrollPos) {
        setNav(true);
      } else {
        setNav(false);
        scrollPos = document.body.getBoundingClientRect().top;
      }
    });
  }, []);
  const toTop = () => {
    window.scrollTo(0, 0);
  };
  const showSidebar = () => setSidebar(true);
  const hideSidebar = () => setSidebar(false);
  return (
    <Fragment>
      <div className={nav ? "header" : "hide-header"}>
        <div className="menu" onClick={showSidebar}>
          <p>
            <i className="fa fa-bars" aria-hidden="true"></i>Мени
          </p>
        </div>
        <div className="brainsterLogo">
          <img src={Logo} onClick={toTop} alt="logo" />
        </div>
        <div className="linkovi">
          <a
            href="https://brainster.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="obukiKopce">Обуки за компании</button>
          </a>
          <a
            href="https://brainster.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="vrabotiKopce">Вработи наши студенти</button>
          </a>
        </div>
      </div>
      <div className={sidebar ? "sidebar" : "hide-sidebar"}>
        <div className="menu-open">
          <div className="sidebar-top">
            <div className="sidebar-logo">
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
            </div>
            <div className="zatvori-menu">
              <p onClick={hideSidebar}>
                <span>
                  <i className="fa fa-times" aria-hidden="true"></i>
                </span>
                Затвори
              </p>
            </div>
          </div>
          <div className="sidebar-list">
            <ul>
              <li className="li-1">Регистрирај се</li>
              <li className="li-1">Најави се</li>
              <li>Регистрирај се</li>
              <Link to="/aboutUs">
                <li>За нас</li>
              </Link>
              <a href="https://www.facebook.com/pg/brainster.co/photos/">
                <li>Галерија</li>
              </a>
              <Link to="/contact">
                <li>Контакт</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
