import React from "react";
import hat1 from "../../assets/img/img_22.jpeg"; // Replace with actual path to Hat 1 image
import hat2 from "../../assets/img/img_17.jpeg"; // Replace with actual path to Hat 2 image
import hat3 from "../../assets/img/img_11.jpeg"; // Replace with actual path to Hat 3 image
import hat4 from "../../assets/img/img_9.jpeg"; // Replace with actual path to Hat 4 image

const Promotion = () => {
  return (
    <section className="bg-white py-10 px-6">
      <div className="ml-[148px] mt-[101px] mb-[102px] mr-[154px] h-[674px]">
        {/* First heading */}
        <h2 className="font-montserrat font-semibold text-[70px] leading-[84px] tracking-[0.5px] text-left mb-6">
          BUY 1 GET 1 FREE
        </h2>

        {/* Second heading with custom styling */}
        <h2 className="text-[70px] leading-[84px] tracking-widest font-montserrat text-left mb-6">
          <span className="font-semibold tracking-[0.5px]">ON</span>{" "}
          <span className="outlined-text">BEST SELLING PRODUCTS</span>
        </h2>

        {/* Products grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {/* Product 1 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <img src={hat1} alt="Hat 1" className="w-full h-auto mb-2" />
            <p className="font-bold">Army Green Active Short Sleeve</p>
            <div className="flex flex-row mt-2">
              {/* Original Price */}
              <p className="text-black mr-2">$34.95</p>
              {/* Strikethrough Price */}
              <p className="line-through text-gray-500">$34.95</p>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <img src={hat3} alt="Hat 3" className="w-full h-auto mb-2" />
            <p className="font-bold">Army Green Active Short Sleeve</p>
            <div className="flex flex-row mt-2">
              {/* Original Price */}
              <p className="text-black mr-2">$34.95</p>
              {/* Strikethrough Price */}
              <p className="line-through text-gray-500">$34.95</p>
            </div>
          </div>

          {/* Product 4 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <img src={hat4} alt="Hat 4" className="w-full h-auto mb-2" />
            <p className="font-bold">Army Green Active Short Sleeve</p>
            <div className="flex flex-row mt-2">
              {/* Original Price */}
              <p className="text-black mr-2">$34.95</p>
              {/* Strikethrough Price */}
              <p className="line-through text-gray-500">$34.95</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <img src={hat2} alt="Hat 2" className="w-full h-auto mb-2" />
            <p className="font-bold">Army Green Active Short Sleeve</p>
            <div className="flex flex-row mt-2">
              {/* Original Price */}
              <p className="text-black mr-2">$34.95</p>
              {/* Strikethrough Price */}
              <p className="line-through text-gray-500">$34.95</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
