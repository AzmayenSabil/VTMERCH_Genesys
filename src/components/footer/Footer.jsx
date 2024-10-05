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
      <div className="logo-container mx-auto flex items-center space-x-4 mb-10 mt-10 px-4 lg:px-[200px]">
        <img
          src={logo}
          alt="VTMERCH Logo"
          className="logo-image h-[70px] lg:h-[100px] object-contain" 
        />
        <div className="logo-text text-[40px] lg:text-[100px] font-extrabold leading-[48px] lg:leading-[120px] tracking-[2px] lg:tracking-[5px] font-montserrat text-red-600">
          VTMERCH
        </div>
      </div>

      {/* Bottom Div: 4 Sections in the Same Row */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-10 lg:gap-16 px-6">
        {/* Div 1: Subscribe */}
        <div className="subscribe space-y-4 flex-1 lg:flex-[0_0_35%]">
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
          <h4 className="text-lg font-semibold">Customer Services</h4>
          <ul className="space-y-2">
            {[
              "About Us",
              "Search",
              "Privacy Policy",
              "Contact Us",
              "Terms of Service",
              "Refund Policy",
              "Track Order",
            ].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-blue-400">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Div 3: Products */}
        <div className="products space-y-4 flex-1 lg:flex-1">
          <h4 className="text-lg font-semibold">Products</h4>
          <ul className="space-y-2">
            {[
              "Featured Products",
              "Bestseller",
              "Latest Product",
              "All Collections",
              "All Products",
            ].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-blue-400">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Div 4: Contact Us */}
        <div className="contact-us space-y-4 flex-1 lg:flex-1">
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
      <div className="flex flex-col lg:flex-row justify-between items-center mt-[50px] lg:mt-[180px] px-6 lg:px-[200px]">
        <p className="text-left">
          © 2024 Valuetainment Store. All rights reserved.
        </p>

        {/* Card Images Section */}
        <div className="flex flex-wrap gap-2 justify-center lg:justify-end mt-4 lg:mt-0">
          {[
            visa_1,
            dinersClub,
            paypal,
            visa_2,
            amex,
            americanExpress,
            applePay,
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Payment method ${index}`}
              className="w-[32px] h-auto"
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
