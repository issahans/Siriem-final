"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const productLineup = [
  {
    title: "AC Charging Solutions",
    description: "Smart AC charging for homes, apartments & workplaces. Power range 3.7kW–22kW.",
    imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80", 
    link: "/page/ac-chargers",
  },
  {
    title: "DC Fast Charging",
    description: "High-power CCS fast chargers for fleets & public stations. Modular 50kW-350kW platforms.",
    imageUrl: "https://images.unsplash.com/photo-1646736283893-6a3c6356770e?w=800&q=80",
    link: "/page/dc-chargers",
  },
  {
    title: "CMS Software",
    description: "Cloud-native CMS to monitor, optimize & automate your entire charging network.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", 
    link: "/page/charging-management-system",
  },
  {
    title: "Onboard Charging",
    description: "Efficient onboard chargers for OEM integrations with multi-voltage inputs.",
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    link: "/page/onboard-chargers",
  },
];

export const ExploreLineup = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // --- WINDOW ANIMATION LOGIC (SHIFTED EARLIER) ---

  // 1. Green Wipe Background (0 -> 0.3)
  // STARTS IMMEDIATELY at 0 to prevent white space scroll
  const wipeWidth = useTransform(scrollYProgress, [0, 0.3], ["0%", "100%"]);

  // 2. White "Window" Morph (0.1 -> 0.5)
  // Starts shortly after wipe begins
  const windowScale = useTransform(scrollYProgress, [0.1, 0.5], [1, 0.9]);
  const windowRadius = useTransform(scrollYProgress, [0.1, 0.5], [0, 40]);

  // 3. Content Entry (0.4 -> 0.6)
  const contentOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.4, 0.6], [40, 0]);

  return (
    <div ref={targetRef} className="relative h-[400vh] bg-white">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        
        {/* Layer 1: The Green Wipe Background */}
        <div className="absolute inset-0 flex justify-end z-0">
          <motion.div 
            style={{ width: wipeWidth }}
            className="h-full bg-[#00FF66]" 
          />
        </div>

        {/* Layer 2: The "Window" Container */}
        <motion.div 
          style={{ 
            scale: windowScale,
            borderRadius: windowRadius,
          }}
          className="relative z-20 w-full h-full bg-white overflow-hidden shadow-2xl origin-center flex flex-col"
        >
          
          {/* Content Area */}
          {/* Adjusted padding to ensure 4th card/button fits */}
          <div className="flex-1 flex flex-col justify-center px-4 md:px-12 pt-24 pb-12 h-full overflow-y-auto no-scrollbar">
            
            <div className="max-w-[95rem] mx-auto w-full flex flex-col h-full justify-center">
              
              {/* Title Section */}
              <motion.div 
                style={{ opacity: contentOpacity, y: contentY }}
                className="text-center mb-8 flex-shrink-0"
              >
                <h2 className="text-4xl md:text-6xl font-black text-black mb-3 tracking-tight">
                  Explore Our Line-Up
                </h2>
                <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                  Complete charging solutions backed by intelligent software.
                </p>
              </motion.div>

              {/* Cards Grid */}
              <motion.div 
                style={{ opacity: contentOpacity, y: contentY }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 flex-grow items-center"
              >
                {productLineup.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    className="group relative bg-white border border-neutral-200 rounded-[2rem] overflow-hidden flex flex-col h-full max-h-[500px] shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    {/* Image Section */}
                    <div className="relative h-60 md:h-64 lg:h-72 overflow-hidden flex-shrink-0">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80";
                        }}
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                      
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <ArrowUpRight className="w-5 h-5 text-black" />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col flex-grow bg-white">
                      <h3 className="text-xl font-bold text-black mb-2 leading-tight tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center gap-2 text-xs font-bold text-[#00c951] uppercase tracking-wider group-hover:gap-3 transition-all pt-4 border-t border-neutral-100 mt-auto">
                        Learn More 
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#00FF66] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </a>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div 
                style={{ opacity: contentOpacity }}
                className="text-center mt-8 flex-shrink-0"
              >
                <a
                  href="/our-offerings"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-black text-white font-bold rounded-full hover:bg-[#00FF66] hover:text-black border-2 border-black hover:border-[#00FF66] transition-all duration-300 hover:scale-105 shadow-xl text-lg"
                >
                  View All Products & Services
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};