import React, { useState } from "react";
import { productsData } from "./data";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const PremiumTools = ({ cartItems, handleAddToCart, handleRemoveFromCart, removeAll }) => {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-center text-gray-900 mb-4">
          Premium Digital Tools
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm md:text-base text-center max-w-xl mx-auto leading-relaxed mb-8">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab("products")}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === "products"
                ? "bg-linear-to-r from-purple-600 to-violet-500 text-white shadow-lg shadow-purple-300/40"
                : "text-gray-600 hover:text-purple-600"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("cart")}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === "cart"
                ? "bg-linear-to-r from-purple-600 to-violet-500 text-white shadow-lg shadow-purple-300/40"
                : "text-gray-600 hover:text-purple-600"
            }`}
          >
            Cart ({cartItems.length})
          </button>
        </div>

        {/* Product Grid */}
        {activeTab === "products" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((product) => (
              <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
            ))}
          </div>
        )}

        {/* cart Section */}
        {activeTab === "cart" && (
          <div className="w-full">
            {cartItems.length > 0 ? (
              <Cart cartItems={cartItems} onRemove={handleRemoveFromCart} removeAll={removeAll}/>
            ) : (
              <div className="py-12 text-center flex flex-col items-center">
                <p className="text-gray-500 text-lg">Your cart is empty.</p>
                <button 
                  onClick={() => setActiveTab("products")} 
                  className="mt-4 text-purple-600 font-medium hover:underline cursor-pointer"
                >
                  Browse Products
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default PremiumTools;
