import React from "react";
import logo from "../../assets/logo/Valuetainment.svg"; 

import visa_1 from "../../assets/Icon/visa_1.svg";
import visa_2 from "../../assets/Icon/visa_2.svg";
import dinersClub from "../../assets/Icon/diners-club.svg";
import paypal from "../../assets/Icon/paypal.svg";
import amex from "../../assets/Icon/amex.svg";
import americanExpress from "../../assets/Icon/american-express.svg";
import applePay from "../../assets/Icon/apple-pay.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 lg:h-[748px]">
      {/* Top Div: Logo */}
      <div className="logo-container mx-auto flex items-center space-x-4 mb-10 mt-10 px-[200px]">
        <img
          src={logo}
          alt="VTMERCH Logo"
          className="logo-image h-[100px] object-contain" 
        />
        <div className="logo-text text-[100px] font-extrabold leading-[120px] tracking-[5px] font-montserrat text-red-600">
          VTMERCH
        </div>
      </div>

      {/* Bottom Div: 4 Sections in the Same Row */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-16 px-6">
        {/* Div 1: Subscribe */}
        <div className="subscribe space-y-4 flex-1 lg:flex-[0_0_35%]">
          {" "}
          <h4 className="text-lg font-semibold">Subscribe</h4>
          <p>
            Subscribe and be the first to receive notifications about our
            upcoming releases and the latest news.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded bg-black text-white placeholder:text-white text-center border border-white"
          />
          <button className="w-full bg-white text-gray-900 py-2 rounded font-semibold mt-2 hover:bg-gray-100 transition">
            Subscribe
          </button>
        </div>

        {/* Div 2: Customer Services */}
        <div className="customer-services space-y-4 flex-1 lg:flex-1">
          {" "}
          <h4 className="text-lg font-semibold">Customer Services</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Search
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Track Order
              </a>
            </li>
          </ul>
        </div>

        {/* Div 3: Products */}
        <div className="products space-y-4 flex-1 lg:flex-1">
          {" "}
          <h4 className="text-lg font-semibold">Products</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-400">
                Featured Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Bestseller
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Latest Product
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                All Collections
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                All Products
              </a>
            </li>
          </ul>
        </div>

        {/* Div 4: Contact Us */}
        <div className="contact-us space-y-4 flex-1 lg:flex-1">
          {" "}
          <h4 className="text-lg font-semibold">Contact Us</h4>
          <p>Available between 8AM to 8PM. Ready to answer your questions.</p>
          <p>Phone: 013456789</p>
          <p>
            Email:{" "}
            <a
              href="mailto:store@valuetainment.com"
              className="hover:text-blue-400"
            >
              store@valuetainment.com
            </a>
          </p>
        </div>
      </div>

      {/* Combined Copyright and Card Images Section */}
      <div className="flex justify-between items-center mt-[180px] px-6 px-[200px]">
        <p className="text-left">
          © 2024 Valuetainment Store. All rights reserved.
        </p>

        {/* Card Images Section */}
        <div className="flex flex-wrap gap-2 justify-end">
          <img src={visa_1} alt="Visa 1" className="w-[32px] h-auto" />
          <img src={visa_2} alt="Visa 2" className="w-[32px] h-auto" />
          <img src={dinersClub} alt="Diners Club" className="w-[32px] h-auto" />
          <img src={paypal} alt="PayPal" className="w-[32px] h-auto" />
          <img src={amex} alt="American Express" className="w-[32px] h-auto" />
          <img
            src={americanExpress}
            alt="American Express"
            className="w-[32px] h-auto"
          />
          <img src={applePay} alt="Apple Pay" className="w-[32px] h-auto" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
