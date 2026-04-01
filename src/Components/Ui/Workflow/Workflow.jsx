import React from 'react';

const Workflow = () => {
  return (
    <section className="bg-gradient-to-r from-[#7c3aed] to-[#6d28d9] py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
          Ready To Transform Your Workflow?
        </h2>
        
        {/* Subheading */}
        <p className="text-purple-100/90 text-[15px] md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Join thousands of professionals who are already using Digitools to work smarter.
          <br className="hidden md:block" /> Start your free trial today.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-violet-600 font-semibold rounded-full hover:bg-gray-50 transition-colors shadow-lg cursor-pointer">
            Explore Products
          </button>
          <button className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/60 text-white font-semibold rounded-full hover:bg-white/10 transition-colors cursor-pointer">
            View Pricing
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-purple-200/80 text-[13px] md:text-sm font-medium tracking-wide flex flex-wrap justify-center items-center gap-2">
          <span>14-day free trial</span>
          <span className="hidden sm:inline">&bull;</span>
          <span className="sm:hidden text-purple-300/50">|</span>
          <span>No credit card required</span>
          <span className="hidden sm:inline">&bull;</span>
          <span className="sm:hidden text-purple-300/50">|</span>
          <span>Cancel anytime</span>
        </p>
      </div>
    </section>
  );
};

export default Workflow;
