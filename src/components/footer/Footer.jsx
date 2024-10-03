import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="subscribe">
          <h4>Subscribe</h4>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        <div className="footer-links">
          <ul>
            <li>Customer Service</li>
            <li>Products</li>
            <li>Contact</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
