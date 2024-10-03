import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">VTMERCH</div>
        <nav className="navbar">
          <span>Menu</span>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Future Looks Bright!</h1>
        <div className="featured-products">
          {/* Dummy images */}
          <div className="product-card">Product 1</div>
          <div className="product-card">Product 2</div>
          <div className="product-card">Product 3</div>
          <div className="product-card">Product 4</div>
        </div>
      </section>

      {/* Promotion Section */}
      <section className="promotion-section">
        <h2>Buy 1 Get 1 Free on Best Selling Products</h2>
        <div className="promotion-products">
          <div className="product-card">Hat 1</div>
          <div className="product-card">Hat 2</div>
          <div className="product-card">Hat 3</div>
          <div className="product-card">Hat 4</div>
        </div>
      </section>

      {/* Signed Collection */}
      <section className="signed-collection">
        <h2>Patrick Bet-David's Signed Collection</h2>
        <div className="collection-items">
          <div className="book-card">Book 1</div>
          <div className="book-card">Book 2</div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <h3>Our Mission</h3>
        <p>
          Our mission is to enlighten, entertain, and empower current and future
          leaders around the world.
        </p>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default App;
