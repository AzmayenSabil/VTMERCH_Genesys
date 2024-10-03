import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo/Valuetainment.svg"; // Adjust path if needed
import crossCloss from "../../assets/icon/crossClose.svg"; // Adjust path if needed

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
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
        <div className={`nav-container ${isOpen ? "open" : ""}`}>
          <ul className={`nav-links`}>
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
    </header>
  );
};

export default Header;
