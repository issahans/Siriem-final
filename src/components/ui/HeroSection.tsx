import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/images/backgroundcharge.png" 
          alt="EV Charging Background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay to make text visible */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Green tint overlay for brand consistency */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-transparent to-green-800/20" />
      </div>
      
      {/* Animated gradient orbs for depth */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-ev-green/20 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-ev-green/15 to-transparent rounded-full blur-3xl" />
      
      {/* Navbar - Using Your Existing Component */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Background SIRIEM Text - BIGGER and WIDER */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion. h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-[35vw] md:text-[24vw] lg:text-[40vw] xl:text-[24vw] font-black tracking-wider leading-none whitespace-nowrap px-4"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.3) 50%, rgba(0,255,102,0.4) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "0 0 80px rgba(0,255,102,0.3), 0 0 40px rgba(255,255,255,0.2)",
            filter: "drop-shadow(0 8px 60px rgba(0,255,102,0.4))",
            letterSpacing: "0.05em"
          }}
        >
          SIRIEM
        </motion.h1>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 h-full flex items-center">
        
        {/* Fast and Secure Text - MOVED UP & BIGGER */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute left-6 md:left-12 top-[12%] md:top-[15%] z-20"
        >
          <p className="text-white text-base md:text-xl lg:text-2xl font-light tracking-[0.3em] uppercase drop-shadow-lg">
            Fast and Secure
          </p>
          <motion. div 
            initial={{ width: 0 }}
            animate={{ width: "4rem" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-3 h-0.5 bg-gradient-to-r from-ev-green to-transparent"
          />
        </motion. div>

        {/* Center Image Area - FOREGROUND ILLUSTRATION with Animation */}
        <motion. div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <img 
            src="/images/charger.png" 
            alt="Electric Vehicle Charging Station" 
            className="max-h-[75vh] w-auto object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Right Side Description - MOVED DOWN & BIGGER */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute right-6 md:right-12 bottom-[5%] md:bottom-[8%] z-20 max-w-[320px] md:max-w-[450px] text-right"
        >
          {/* Text without background box */}
          <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed font-light drop-shadow-2xl mb-6">
            Be part of the transformation electric vehicles 
            via partnership for the provision of Filling 
            Stations Public Electric Vehicles
          </p>
          
          {/* Learn More Button - Keep the box style */}
          <motion.div 
            className="flex justify-end"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <button className="group relative px-8 py-4 bg-transparent backdrop-blur-sm border-2 border-ev-green text-ev-green font-semibold text-sm md:text-base uppercase tracking-wider rounded-lg hover:bg-ev-green hover:text-black transition-all duration-300 overflow-hidden shadow-lg shadow-ev-green/20">
              {/* Animated background on hover */}
              <span className="absolute inset-0 bg-ev-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <span className="relative z-10 flex items-center gap-2">
                Learn More 
                <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
          </motion.div>
        </motion.div>

      </div>

    </section>
  );
};

export default HeroSection;