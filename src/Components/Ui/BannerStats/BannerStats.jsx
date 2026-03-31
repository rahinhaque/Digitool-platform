import React from "react";

const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "200+", label: "Premium Tools" },
  { value: "4.9", label: "Rating" },
];

const BannerStats = () => {
  return (
    <section className="bg-gradient-to-r from-[#6c3ce0] to-[#3b82f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-8 md:py-10">
          {stats.map((stat, index) => (
            <React.Fragment key={stat.label}>
              <div className="flex flex-col items-center px-8 md:px-16">
                <span className="text-white text-3xl md:text-4xl font-extrabold tracking-tight">
                  {stat.value}
                </span>
                <span className="text-purple-100 text-sm md:text-base font-medium mt-1">
                  {stat.label}
                </span>
              </div>

              {/* Divider — skip after the last item */}
              {index < stats.length - 1 && (
                <div className="w-px h-12 bg-white/30" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerStats;
