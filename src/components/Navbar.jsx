import React, { useState } from "react";
import "../style/Navbar.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">EduCom</h1>

        <div className="menu-icons" onClick={() => setClicked(!clicked)}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  <i className={item.icons}></i>
                  {item.title}
                </a>
              </li>
            );
          })}
          <button>Get Certificate</button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
