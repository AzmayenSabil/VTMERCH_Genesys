import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo/Valuetainment.svg"; 
import crossCloss from "../../assets/Icon/crossClose.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="header">
      <div className="logo-container">
        <img src={logo} alt="VTMERCH Logo" className="logo-image" />
        <div className="logo-text">VTMERCH</div>
      </div>
      <nav className="navbar">
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? (
            <span className="close-btn">
              <img src={crossCloss} alt="Close" className="close-icon" />
            </span>
          ) : (
            <>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </>
          )}
        </div>
        <div className={`nav-container ${isOpen ? "open" : "hidden"} mt-[2%]`}>
          <ul className="nav-links flex flex-col space-y-4">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#shop">Shop</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Header;
