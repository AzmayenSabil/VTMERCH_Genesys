import React from "react";
import quotesIcon from "../../assets/icon/quotes.svg";
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
          className="w-full max-w-[1116px] font-montserrat text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold 
        leading-[40px] sm:leading-[45px] md:leading-[50px] lg:leading-[57.6px] tracking-[0.005em] text-left uppercase z-10 relative 
        -mt-[7%] ml-[5%]"
        >
          Our mission is to enlighten, entertain <br />
          and empower current and future <br />
          leaders around the world.
        </p>
      </div>

      <div className="absolute bottom-0 right-0 flex items-end justify-center z-0 w-1/2">
        <img
          src={actorImage}
          alt="Hero"
          className="w-[571px] h-auto max-h-[calc(100%+200px)] object-contain sm:w-[400px] md:w-[500px] lg:w-[571px]" // Responsive width
        />
      </div>
    </section>
  );
};

export default Mission;
