import React from 'react';
import { FiCheck } from 'react-icons/fi';

const pricingData = [
  {
    id: 1,
    name: "Starter",
    description: "Perfect for getting started",
    price: "0",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    buttonText: "Get Started Free",
    isPopular: false,
  },
  {
    id: 2,
    name: "Pro",
    description: "Best for professionals",
    price: "29",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    buttonText: "Start Pro Trial",
    isPopular: true,
  },
  {
    id: 3,
    name: "Enterprise",
    description: "For teams and businesses",
    price: "99",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    buttonText: "Contact Sales",
    isPopular: false,
  }
];

const Pricing = () => {
  return (
    <section className="bg-white py-24 px-4 md:px-0">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-[2.2rem] md:text-5xl font-extrabold text-[#1a1f36] tracking-tight mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 text-[15px] md:text-[17px] tracking-wide">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {pricingData.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative rounded-3xl p-8 md:p-10 transition-all duration-300 flex flex-col h-full ${
                plan.isPopular 
                  ? "bg-violet-600 text-white shadow-2xl md:scale-105 border border-violet-500 z-10" 
                  : "bg-white text-[#1a1f36] shadow-[0_4px_25px_-10px_rgba(0,0,0,0.06)] border border-gray-100/80 hover:shadow-xl"
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 bg-[#fef3c7] text-[#92400e] text-[13px] font-bold px-4 py-1.5 rounded-full shadow-sm whitespace-nowrap">
                  Most Popular
                </div>
              )}

              {/* Plan Header */}
              <h3 className={`text-[1.4rem] font-bold mb-1.5 ${plan.isPopular ? "text-white" : "text-[#1a1f36]"}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.isPopular ? "text-violet-200" : "text-gray-500"}`}>
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-8 flex items-baseline gap-1">
                <span className={`text-[2.75rem] md:text-5xl font-extrabold tracking-tight ${plan.isPopular ? "text-white" : "text-[#1a1f36]"}`}>
                  ${plan.price}
                </span>
                <span className={`text-[15px] font-medium ${plan.isPopular ? "text-violet-200" : "text-gray-500"}`}>
                  /Month
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3.5 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[14.5px]">
                    <FiCheck className={`w-[18px] h-[18px] shrink-0 ${plan.isPopular ? "text-white" : "text-emerald-500"}`} />
                    <span className={plan.isPopular ? "text-violet-50" : "text-gray-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button 
                className={`w-full py-3.5 px-6 rounded-2xl font-semibold text-[15px] transition-all duration-200 cursor-pointer mt-auto ${
                  plan.isPopular
                    ? "bg-white text-violet-600 hover:bg-gray-50 shadow-md"
                    : "bg-violet-600 text-white hover:bg-violet-700 shadow-md shadow-violet-200/50"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
