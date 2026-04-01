import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";
import { ClipLoader } from "react-spinners";

const Product = ({ product, handleAddToCart }) => {

  const [button , setButton] = useState('Buy Now');
  const [isAdding, setIsAdding] = useState(false);

  const handleBuyNow = () => {
    if (button === "Buy Now") {
      setIsAdding(true);
      setTimeout(() => {
        setIsAdding(false);
        setButton("Added to cart");
        if (handleAddToCart) handleAddToCart(product);
      }, 800);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Header (Icon + Tag) */}
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
          <img
            src={product.icon}
            alt={product.name}
            className="w-7 h-7 object-contain"
          />
        </div>
        {product.tag && (
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              product.tagType === "bestSeller"
                ? "bg-amber-100 text-amber-700"
                : product.tagType === "popular"
                ? "bg-purple-100 text-purple-700"
                : "bg-emerald-100 text-emerald-700"
            }`}
          >
            {product.tag}
          </span>
        )}
      </div>

      {/* Title & Description */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
      <p className="text-gray-500 text-sm mb-6 grow">
        {product.description}
      </p>

      {/* Price */}
      <div className="mb-6 flex items-baseline gap-1">
        <span className="text-3xl font-extrabold text-gray-900">
          ${product.price}
        </span>
        <span className="text-gray-500 text-sm font-medium">
          {product.period}
        </span>
      </div>

      {/* Features */}
      <ul className="mb-8 space-y-3">
        {product.features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-sm text-gray-600"
          >
            <FiCheck className="w-5 h-5 text-emerald-500 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button 
        onClick={handleBuyNow}
        disabled={button === "Added to cart" || isAdding}
        className={`w-full h-[52px] flex justify-center items-center py-3 px-4 rounded-xl font-semibold text-white transition-colors duration-200 mt-auto shadow-md cursor-pointer disabled:cursor-not-allowed ${
          button === "Buy Now" && !isAdding
            ? "bg-violet-600 hover:bg-violet-700 shadow-violet-200"
            : button === "Added to cart" 
            ? "bg-emerald-500 hover:bg-emerald-600 shadow-emerald-200"
            : "bg-violet-500 opacity-80 shadow-violet-200"
        }`}
      >
        {isAdding ? <ClipLoader size={20} color="#ffffff" speedMultiplier={0.8} /> : button}
      </button>
    </div>
  );
};

export default Product;
