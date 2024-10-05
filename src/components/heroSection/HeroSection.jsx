import React from "react";
import Slider from "react-slick"; // Importing the slider library
import img_1 from "../../assets/img/img_16.png";
import img_2 from "../../assets/img/img_19.jpeg";
import img_3 from "../../assets/img/img_20.png";
import img_4 from "../../assets/img/img_18.png";
import "slick-carousel/slick/slick.css"; // Import slick carousel CSS
import "slick-carousel/slick/slick-theme.css";
import "./HeroSection.css";

const HeroSection = () => {
  // Product data stored in an array
  const products = [
    {
      id: 1,
      image: img_1,
      name: "Army Green Active Short Sleeve",
      price: "$34.95",
      oldPrice: "$34.95",
    },
    {
      id: 2,
      image: img_2,
      name: "Army Green Active Short Sleeve",
      price: "$34.95",
      oldPrice: "$34.95",
    },
    {
      id: 3,
      image: img_3,
      name: "Army Green Active Short Sleeve",
      price: "$34.95",
      oldPrice: "$34.95",
    },
    {
      id: 4,
      image: img_4,
      name: "Army Green Active Short Sleeve",
      price: "$34.95",
      oldPrice: "$34.95",
    },
  ];

  // Slider settings for responsive carousel
  const settings = {
    infinite: true,
    slidesToShow: 4, // Display 4 items at once
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000, // Transition speed
    autoplaySpeed: 0, // Keep autoplay constantly moving
    cssEase: "linear",
    arrows: false, // Remove arrows
    pauseOnHover: true, // Continues moving even on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Display 3 items at once for medium devices
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Display 2 items at once for small devices
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Display 1 item at once for extra small devices
        },
      },
    ],
  };

  return (
    <section className="hero-section py-10 px-6 relative h-[812px]">
      {/* Header with Fade-in Animation */}
      <h1
        className="tracking-[1px] relative z-10 mt-[50px] md:mt-[100px] fade-in xl:ml-[150px]
             text-[40px] leading-[50px] 
             md:text-[70px] md:leading-[80px] 
             lg:text-[80px] lg:leading-[100px] 
             xl:text-[90px] xl:leading-[120px] 
             2xl:text-[140px] 2xl:leading-[168px]"
        style={{
          fontFamily: "Act of Rejection",
          color: "#fff",
          opacity: "0.5",
          textAlign: "left", // Ensures left alignment
        }}
      >
        Future Looks Bright!
      </h1>

      <div
        className="mt-[200px] w-full overflow-hidden z-20 max-w-[1700px] mx-auto"
        style={{ position: "absolute", top: "0", right: "0" }}
      >
        <Slider {...settings}>
          {/* Map through products array to create product cards */}
          {products.map((product) => (
            <div
              key={product.id}
              className="max-w-[357px] h-[468px] mb-[20px] mt-[50px] rounded-lg px-[10px]" // Add padding to create gaps
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg mb-4"
              />
              <p className="font-medium text-left text-[16px] leading-[19.2px] tracking-[0.005em]">
                {product.name}
              </p>
              <div className="flex items-center mt-2">
                <p className="text-white mr-2 text-[16px] leading-[19.2px] tracking-[0.005em] font-medium">
                  {product.price}
                </p>
                <p className="line-through text-white text-[16px] leading-[19.2px] tracking-[0.005em] font-medium">
                  {product.oldPrice}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroSection;
