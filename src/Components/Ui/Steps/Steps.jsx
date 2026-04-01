import React from 'react';
import userIcon from '../../../assets/user.png';
import packageIcon from '../../../assets/package.png';
import rocketIcon from '../../../assets/rocket.png';

const stepsData = [
  {
    id: 1,
    title: 'Create Account',
    description: 'Sign up for free in seconds. No credit card required to get started.',
    icon: userIcon,
    stepNum: '01',
  },
  {
    id: 2,
    title: 'Choose Products',
    description: 'Browse our catalog and select the tools that fit your needs.',
    icon: packageIcon,
    stepNum: '02',
  },
  {
    id: 3,
    title: 'Start Creating',
    description: 'Download and start using your premium tools immediately.',
    icon: rocketIcon,
    stepNum: '03',
  },
];

const Steps = () => {
  return (
    <section className="bg-slate-50/50 py-20 px-4 md:px-0">
      <div className="max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headings */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[2.2rem] md:text-5xl font-extrabold text-[#1a1f36] tracking-tight mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500 text-[15px] md:text-base tracking-wide">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {stepsData.map((step) => (
            <div 
              key={step.id} 
              className="relative bg-white rounded-3xl p-10 md:p-12 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-[0_12px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300"
            >
              {/* Step Badge */}
              <div className="absolute top-6 right-6 w-[34px] h-[34px] rounded-full bg-violet-600 flex items-center justify-center text-white text-[13px] font-bold shadow-md">
                {step.stepNum}
              </div>

              {/* Icon with soft padded circle */}
              <div className="w-[88px] h-[88px] rounded-full bg-[#f4ebff] flex items-center justify-center mb-6">
                <img 
                  src={step.icon} 
                  alt={step.title} 
                  className="w-11 h-11 object-contain"
                />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl md:text-[1.35rem] font-bold text-[#1a1f36] mb-3">{step.title}</h3>
              <p className="text-[#6b7280] text-[14.5px] leading-relaxed max-w-[250px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Steps;
