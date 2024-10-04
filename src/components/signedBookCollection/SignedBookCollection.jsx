import React from "react";
import book_1 from "../../assets/img/img_14.png";
import book_2 from "../../assets/img/img_23.png"; 
import signature from "../../assets/img/img_21.png";
import "./SignedBookCollection.css"; 

const SignedBookCollection = () => {
  return (
    <section className="bg-black text-white py-10 px-6 lg:h-[852px]">
      <div className="flex lg:flex-row flex-col">
        {/* Section Title - 50% Width */}
        <div className="flex flex-col mb-8 lg:w-1/2 w-full mt-[133px]">
          {/* First Heading */}
          <h2 className="font-montserrat text-[49px] font-medium leading-[58.8px] tracking-[0.5px] text-left mb-4 ml-[150px] uppercase">
            PATRICK BET-DAVID'S
          </h2>
          {/* Second Heading */}
          <h2 className="font-montserrat text-[70px] font-bold leading-[84px] tracking-[0.5px] text-left mb-4 text-red-600 ml-[150px]">
            SIGNED <br />
            COLLECTION
          </h2>

          {/* Signature Section */}
          <div className="signature mt-6 flex flex-col items-start gap-4">
            {/* Shop Now Button */}
            <button className="bg-white text-black py-2 px-4 rounded h-[54px] flex items-center ml-[150px]">
              Shop Now
            </button>
            {/* Signature Image */}
            <img
              src={signature} // Signature image
              alt="Patt Bet-David Signature"
              className="w-[754px] h-[223px] object-contain opacity-100 ml-[120px]" // Adjusted width and height
            />
          </div>
        </div>

        {/* Collection Items - 50% Width */}
        <div className="flex lg:w-1/2 w-full justify-center opacity-100 mt-[101px]">
          {/* Book Card 1 */}
          <div className="book-card rounded-lg w-[398px] h-[588px]">
            <img
              src={book_1} 
              alt="Book 1"
              className="w-full h-full rounded-lg object-contain"
            />
          </div>

          {/* Book Card 2 */}
          <div className="book-card rounded-lg w-[398px] h-[588px]">
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
