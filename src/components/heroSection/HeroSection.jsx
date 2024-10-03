import React from "react";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
