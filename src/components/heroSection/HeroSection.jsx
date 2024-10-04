import React from "react";
import Slider from "react-slick"; // Importing the slider library
import img_1 from "../../assets/img/img_16.png";
import img_2 from "../../assets/img/img_19.jpeg";
import img_3 from "../../assets/img/img_20.png";
import img_4 from "../../assets/img/img_18.png";
import "slick-carousel/slick/slick.css"; // Import slick carousel CSS
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  // Slider settings for infinite carousel
  const settings = {
    infinite: true,
    slidesToShow: 4, // Display 4 items at once
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500, // Transition speed
    autoplaySpeed: 0, // Keep autoplay constantly moving
    cssEase: "linear",
    arrows: false, // Remove arrows
    pauseOnHover: true, // Continues moving even on hover
  };

  return (
    <section className="hero-section py-10 px-6 relative">
      {/* Header */}
      <h1
        className="text-[140px] font-normal leading-[168px] tracking-[1px] text-center relative z-10"
        style={{ fontFamily: "Act of Rejection", color: "#fff" }}
      >
        Future Looks Bright!
      </h1>

      {/* Infinite Carousel for Products */}
      <div
        className="mt-12 w-full overflow-hidden z-20"
        style={{ position: "absolute", top: "0", left: "0" }}
      >
        <Slider {...settings}>
          {/* Product 1 */}
          <div
            className="product-card bg-transparent p-4 mx-2 rounded-lg shadow"
            style={{ marginBottom: "20px" }}
          >
            <img
              src={img_1}
              alt="Product 1"
              className="w-[250px] h-[250px] object-fit mb-4"
            />
            <p className="font-bold text-center">
              Army Green Active Short Sleeve
            </p>
            <div className="flex justify-center items-center mt-2">
              <p className="text-black mr-2">$34.95</p>
              <p className="line-through text-gray-500">$34.95</p>
            </div>
          </div>

          {/* Product 2 */}
          <div
            className="product-card bg-transparent p-4 mx-2 rounded-lg shadow"
            style={{ marginBottom: "20px" }}
          >
            <img
              src={img_2}
              alt="Product 2"
              className="w-[250px] h-[250px] object-fit mb-4"
            />
            <p className="font-bold text-center">
              Army Green Active Short Sleeve
            </p>
            <div className="flex justify-center items-center mt-2">
              <p className="text-black mr-2">$34.95</p>
              <p className="line-through text-gray-500">$34.95</p>
            </div>
          </div>

          {/* Product 3 */}
          <div
            className="product-card bg-transparent p-4 mx-2 rounded-lg shadow"
            style={{ marginBottom: "20px" }}
          >
            <img
              src={img_3}
              alt="Product 3"
              className="w-[250px] h-[250px] object-fit mb-4"
            />
            <p className="font-bold text-center">
              Army Green Active Short Sleeve
            </p>
            <div className="flex justify-center items-center mt-2">
              <p className="text-black mr-2">$34.95</p>
              <p className="line-through text-gray-500">$34.95</p>
            </div>
          </div>

          {/* Product 4 */}
          <div
            className="product-card bg-transparent p-4 mx-2 rounded-lg shadow"
            style={{ marginBottom: "20px" }}
          >
            <img
              src={img_4}
              alt="Product 4"
              className="w-[250px] h-[250px] object-fit mb-4"
            />
            <p className="font-bold text-center">
              Army Green Active Short Sleeve
            </p>
            <div className="flex justify-center items-center mt-2">
              <p className="text-black mr-2">$34.95</p>
              <p className="line-through text-gray-500">$34.95</p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HeroSection;
