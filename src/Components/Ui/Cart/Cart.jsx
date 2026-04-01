import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';

const Cart = ({ cartItems, onRemove, removeAll }) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      toast.success("Proceeding to checkout successfully!");
      if (removeAll) removeAll();
    }, 1500);
  };

  return (
    <div className="border border-purple-300 rounded-lg p-6 md:p-8 max-w-4xl mx-auto w-full bg-white shadow-md">
      <h3 className="text-lg font-bold text-gray-900 mb-6 text-left">Your Cart</h3>

      <div className="space-y-4 mb-8 text-left">
        {cartItems.map((item) => (
          <div key={item.id} className="bg-gray-50/70 rounded-xl p-4 flex items-center justify-between border border-transparent hover:border-gray-100 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-gray-100 shrink-0">
                <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-900 text-sm md:text-base">{item.name}</h4>
                <p className="text-gray-500 text-sm mt-0.5">${item.price}</p>
              </div>
            </div>
            <button 
              onClick={() => onRemove(item.id)}
              className="text-rose-500 font-medium text-sm hover:text-rose-600 transition-colors cursor-pointer px-2 py-1"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-end mb-6">
        <span className="text-gray-500 text-sm">Total:</span>
        <span className="text-xl font-bold text-gray-900">${total}</span>
      </div>
      
      <button
        onClick={handleCheckout} 
        disabled={isCheckingOut}
        className="w-full h-[52px] flex justify-center items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition-colors duration-200 cursor-pointer shadow-md shadow-violet-200 disabled:opacity-75 disabled:cursor-not-allowed"
      >
        {isCheckingOut ? (
          <ClipLoader size={22} color="#ffffff" speedMultiplier={0.8} />
        ) : (
          "Proceed To Checkout"
        )}
      </button>
    </div>
  );
};

export default Cart;