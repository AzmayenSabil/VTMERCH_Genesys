import React from "react";
import quotesIcon from "../../assets/Icon/quotes.svg";
import actorImage from "../../assets/img/img_8.png";

//TESTING
const Mission = () => {
  return (
    <section className="mission-section min-h-[577px] flex flex-col md:flex-row items-start relative">
      <div>
        <h3 className="flex items-center gap-2 mb-0 relative z-10">
          <img
            src={quotesIcon}
            alt="Quotes"
            className="quotes-icon w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] lg:w-[221px] lg:h-[221px]" // Responsive sizing
          />
        </h3>
        <p
          className="w-full font-montserrat text-[18px] sm:text-[20px] md:text-[24px] lg:text-[30px] xl:text-[40px] 2xl:text-[48px] font-bold 
  leading-[30px] sm:leading-[35px] md:leading-[40px] lg:leading-[40.6px] xl:leading-[50.6px] 2xl:leading-[57.6px] tracking-[0.005em] text-left uppercase z-10 relative 
  -mt-[7%] ml-[5%] 
  break-normal sm:break-words" // Allowing text to break normally
        >
          Our mission is to enlighten, entertain{" "}
          <br className="hidden md:block" />
          and empower current and future <br className="hidden md:block" />
          leaders around the world.
        </p>
      </div>

      <div className="absolute bottom-0 right-0 flex items-end justify-center z-0 w-full md:w-1/2 mt-8 md:mt-0">
        <img
          src={actorImage}
          alt="Hero"
          className="w-[250px] sm:w-[250px] md:w-[400px] lg:w-[571px] h-auto max-h-[calc(100%+200px)] object-contain" // Responsive width
        />
      </div>
    </section>
  );
};

export default Mission;
