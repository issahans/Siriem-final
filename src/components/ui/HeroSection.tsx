import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      
      {/* Full-width Background Hero Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/images/Herobanner.png" 
          alt="EV Charging Station"
          className="w-full h-full object-cover opacity-90"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Navbar - Using Unified Component */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Hero Content - Refined Typography */}
      <div className="relative z-10 min-h-screen pt-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
          <div className="max-w-2xl">
            
            {/* Left Side - Balanced Typography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              {/* Main Headline - Smaller, More Refined */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight"
              >
                POWERING THE
                <br />
                <span className="text-[#00FF66]">FUTURE</span> OF
                <br />
                ELECTRIC MOBILITY
              </motion.h1>

              {/* Subheadline - Concise */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-base md:text-lg text-neutral-300 leading-relaxed font-light max-w-lg"
              >
                Seamless AC & DC charging solutions built for reliability, scalability, and a cleaner tomorrow.
              </motion.p>

              {/* Microcopy */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-xs text-neutral-400 uppercase tracking-widest font-medium"
              >
                Trusted by EV fleets, enterprises, and smart city operators worldwide. 
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="pt-2"
              >
                <a
                  href="/our-offerings"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#00FF66] text-[#00FF66] font-semibold text-xs uppercase tracking-wider hover:bg-[#00FF66] hover:text-black transition-all duration-300 group"
                >
                  Start Charging Smarter
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </motion.div>

              {/* Stats - Compact */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="flex items-center gap-8 pt-8 border-t border-white/10"
              >
                <div>
                  <p className="text-2xl md:text-3xl font-black text-white mb-0. 5">1000+</p>
                  <p className="text-[10px] text-neutral-400 uppercase tracking-wider">Installations</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-black text-white mb-0. 5">50+</p>
                  <p className="text-[10px] text-neutral-400 uppercase tracking-wider">Clients</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-black text-white mb-0. 5">99.5%</p>
                  <p className="text-[10px] text-neutral-400 uppercase tracking-wider">Uptime</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade with Scroll Indicator */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
        <div className="h-32 bg-gradient-to-b from-transparent via-white/50 to-white" />
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="flex flex-col items-center gap-1"
          >
            <div className="text-xs text-neutral-800 font-semibold uppercase tracking-wider mb-1">
              Scroll
            </div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#00FF66]"
            >
              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion. div>
          
          <motion.div
            className="w-0.5 h-16 bg-gradient-to-b from-[#00FF66] to-transparent rounded-full"
            animate={{
              height: ["40px", "64px", "40px"],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>

    </section>
  );
};

export default HeroSection;