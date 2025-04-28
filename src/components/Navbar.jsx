import React from "react";
import "../style/Navbar.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">EduCom</h1>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url}>
                  <i className={item.icons}></i>{item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
