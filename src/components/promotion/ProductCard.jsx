import React from "react";

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow min-w-[240px]">
      <img src={image} alt={title} className="w-full h-auto mb-2" />
      <p className="font-bold">{title}</p>
      <div className="flex flex-row mt-2">
        <p className="text-black mr-2">${price}</p>
        <p className="line-through text-gray-500">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
