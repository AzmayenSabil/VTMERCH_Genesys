import React from "react";
import logo from "../../assets/logo/Valuetainment.svg"; // Replace with your logo path

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      {/* Top Div: Logo */}
      <div className="logo-container flex justify-center items-center space-x-4 mb-10">
        <img src={logo} alt="VTMERCH Logo" className="logo-image w-20 h-20" />
        <div className="logo-text text-3xl font-bold">VTMERCH</div>
      </div>

      {/* Bottom Div: 3 Sections */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Div 1: Subscribe */}
        <div className="subscribe space-y-4">
          <h4 className="text-lg font-semibold">Subscribe</h4>
          <p>
            Subscribe and be the first to receive notifications about our
            upcoming releases and the latest news.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded text-gray-900"
          />
          <button className="w-full bg-blue-600 py-2 rounded text-white font-semibold mt-2 hover:bg-blue-700 transition">
            Subscribe
          </button>
        </div>

        {/* Div 2: Customer Services */}
        <div className="customer-services space-y-4">
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
        <div className="products space-y-4">
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
      </div>
    </footer>
  );
};

export default Footer;
