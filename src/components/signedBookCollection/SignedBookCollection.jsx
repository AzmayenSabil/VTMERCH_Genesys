import React from "react";
import book_1 from "../../assets/img/img_14.png";
import book_2 from "../../assets/img/img_23.png";
import signature from "../../assets/img/img_21.png";
import "./SignedBookCollection.css";

const SignedBookCollection = () => {
  return (
    <section className="bg-black text-white py-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:h-[852px]">
      <div className="flex lg:flex-row flex-col">
        {/* Section Title - 50% Width */}
        <div className="flex flex-col mb-8 lg:w-1/2 w-full mt-[50px] md:mt-[90px] lg:mt-[133px]">
          {/* First Heading */}
          <h2 className="font-montserrat text-[20px] sm:text-[30px] md:text-[40px] lg:text-[49px] xl:text-[55px] font-medium leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[58.8px] tracking-[0.5px] text-center lg:text-left mb-4 mx-auto lg:ml-[150px] uppercase">
            PATRICK BET-DAVID'S
          </h2>

          {/* Second Heading */}
          <h2 className="font-montserrat text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] font-bold leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[70px] xl:leading-[84px] tracking-[0.5px] text-center lg:text-left mb-4 text-red-600 mx-auto lg:ml-[150px]">
            SIGNED <br />
            COLLECTION
          </h2>

          {/* Signature Section */}
          <div className="signature mt-6 flex flex-col items-center lg:items-start gap-4">
            {/* Shop Now Button */}
            <button className="bg-white text-black py-2 px-4 rounded-lg h-[44px] sm:h-[50px] md:h-[54px] flex items-center justify-around mx-auto lg:ml-[150px] w-[160px] sm:w-[180px] md:w-[186px] transition duration-300 ease-in-out transform hover:bg-red-600 hover:text-white hover:scale-105">
              <p>Shop Now</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Signature Image */}
            <img
              src={signature}
              alt="Patt Bet-David Signature"
              className="w-[200px] sm:w-[350px] md:w-[400px] lg:w-[550px] xl:w-[700px] 2xl:w-[754px] h-[100px] sm:h-[150px] md:h-[200px] lg:h-[223px] object-contain opacity-100 mx-auto lg:ml-[120px]" // Responsive width and height
            />
          </div>
        </div>

        {/* Collection Items - 50% Width */}
        <div className="flex lg:w-1/2 w-full justify-center opacity-100 mt-[50px] mb-[30px] sm:mt-[40px] sm:mb-[30px] lg:mt-[71px] lg:mb-[41px] space-x-4">
          {/* Book Card 1 */}
          <div className="book-card rounded-lg w-[120px] sm:w-[220px] md:w-[280px] lg:w-[350px] xl:w-[400px] 2xl:w-[398px] h-[180px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[588px]">
            <img
              src={book_1}
              alt="Book 1"
              className="w-full h-full rounded-lg object-contain"
            />
          </div>

          {/* Book Card 2 */}
          <div className="book-card rounded-lg w-[120px] sm:w-[220px] md:w-[280px] lg:w-[350px] xl:w-[400px] 2xl:w-[398px] h-[180px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[588px]">
            <img
              src={book_2}
              alt="Book 2"
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignedBookCollection;
