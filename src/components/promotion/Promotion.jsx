import React from "react";
import hat1 from "../../assets/img/img_22.jpeg"; 
import hat2 from "../../assets/img/img_17.jpeg"; 
import hat3 from "../../assets/img/img_11.jpeg"; 
import hat4 from "../../assets/img/img_9.jpeg"; 
import ProductCard from "./ProductCard"; 
import "./Promotion.css";

const Promotion = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 md:px-8 lg:px-10 mt-[110px] mb-[102px] overflow-hidden min-h-[80vh] sm:min-h-[70vh] md:min-h-[60vh] lg:min-h-[674px]">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-[48px]">
          {/* First heading */}
          <h2 className="font-montserrat font-semibold text-[40px] sm:text-[30px] md:text-[50px] lg:text-[60px] xl:text-[70px] leading-[48px] sm:leading-[36px] md:leading-[60px] lg:leading-[70px] xl:leading-[84px] tracking-[0.5px] text-left mb-6">
            BUY 1 GET 1 FREE
          </h2>

          {/* Second heading with custom styling */}
          <h2 className="text-[40px] sm:text-[30px] md:text-[50px] lg:text-[60px] xl:text-[70px] leading-[48px] sm:leading-[36px] md:leading-[60px] lg:leading-[70px] xl:leading-[84px] tracking-widest font-montserrat text-left">
            <span className="font-semibold tracking-[0.5px]">ON</span>{" "}
            <span className="outlined-text font-montserrat font-semibold tracking-[0.5px] text-transparent">
              BEST SELLING PRODUCTS
            </span>
          </h2>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <ProductCard
            image={hat1}
            title="Army Green Active Short Sleeve"
            price="34.95"
          />
          <ProductCard
            image={hat2}
            title="Army Green Active Short Sleeve"
            price="34.95"
          />
          <ProductCard
            image={hat3}
            title="Army Green Active Short Sleeve"
            price="34.95"
          />
          <ProductCard
            image={hat4}
            title="Army Green Active Short Sleeve"
            price="34.95"
          />
        </div>
      </div>
    </section>
  );
};

export default Promotion;
