import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-bg relative w-full min-h-screen overflow-hidden">
      
      {/* Animated gradient orbs for depth */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-ev-green/20 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-ev-green/15 to-transparent rounded-full blur-3xl" />
      
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5">
        <Link to="/" className="flex items-center">
          <Zap className="w-5 h-5 md:w-6 md:h-6 text-foreground fill-foreground" strokeWidth={0} />
        </Link>

        {/* Primary navigation with accessible dropdowns */}
        <div className="flex items-center gap-4 md:gap-8">
          <Link to="/" className="nav-link">HOME</Link>

          <Link to="/our-approach" className="nav-link">OUR APPROACH</Link>

          {/* Offerings dropdown */}
          <details className="relative group">
            <summary className="nav-link list-none cursor-pointer select-none">OUR OFFERINGS ▾</summary>
            <div className="absolute right-0 mt-2 w-[260px] bg-white text-black rounded-md shadow-md ring-1 ring-black/5 invisible group-open:visible opacity-0 group-open:opacity-100 transition-all duration-150 z-50">
              <ul className="p-3 space-y-2">
                <li><Link to="/our-offerings" className="block px-2 py-1 hover:bg-neutral-100 rounded">Overview</Link></li>
                <li><Link to="/page/ac-chargers" className="block px-2 py-1 hover:bg-neutral-100 rounded">AC Chargers</Link></li>
                <li><Link to="/page/dc-chargers" className="block px-2 py-1 hover:bg-neutral-100 rounded">DC Chargers</Link></li>
                <li><Link to="/page/charging-management-system" className="block px-2 py-1 hover:bg-neutral-100 rounded">Charging Management System</Link></li>
                <li><Link to="/page/onboard-chargers" className="block px-2 py-1 hover:bg-neutral-100 rounded">Onboard Charging</Link></li>
                <li><Link to="/page/charger-services" className="block px-2 py-1 hover:bg-neutral-100 rounded">Charger Services</Link></li>
                <li><Link to="/page/cms-services" className="block px-2 py-1 hover:bg-neutral-100 rounded">CMS Services</Link></li>
                <li><Link to="/page/consulting" className="block px-2 py-1 hover:bg-neutral-100 rounded">Consulting</Link></li>
                <li><Link to="/page/solutions" className="block px-2 py-1 hover:bg-neutral-100 rounded">Solutions</Link></li>
              </ul>
            </div>
          </details>

          {/* Verticals dropdown */}
          <details className="relative group hidden md:block">
            <summary className="nav-link list-none cursor-pointer select-none">VERTICALS ▾</summary>
            <div className="absolute right-0 mt-2 w-[260px] bg-white text-black rounded-md shadow-md ring-1 ring-black/5 invisible group-open:visible opacity-0 group-open:opacity-100 transition-all duration-150 z-50">
              <ul className="p-3 space-y-2">
                <li><Link to="/verticals/fleets" className="block px-2 py-1 hover:bg-neutral-100 rounded">Fleets</Link></li>
                <li><Link to="/verticals/workplace" className="block px-2 py-1 hover:bg-neutral-100 rounded">Workplace</Link></li>
                <li><Link to="/verticals/residential" className="block px-2 py-1 hover:bg-neutral-100 rounded">Residential</Link></li>
                <li><Link to="/verticals/cpos" className="block px-2 py-1 hover:bg-neutral-100 rounded">CPOs</Link></li>
                <li><Link to="/verticals/retail-hospitality" className="block px-2 py-1 hover:bg-neutral-100 rounded">Retail & Hospitality</Link></li>
                <li><Link to="/verticals/energy-storage" className="block px-2 py-1 hover:bg-neutral-100 rounded">Energy Storage</Link></li>
              </ul>
            </div>
          </details>

          {/* Innovation dropdown */}
          <details className="relative group hidden md:block">
            <summary className="nav-link list-none cursor-pointer select-none">INNOVATION ▾</summary>
            <div className="absolute right-0 mt-2 w-[220px] bg-white text-black rounded-md shadow-md ring-1 ring-black/5 invisible group-open:visible opacity-0 group-open:opacity-100 transition-all duration-150 z-50">
              <ul className="p-3 space-y-2">
                <li><Link to="/innovation/tech-speak" className="block px-2 py-1 hover:bg-neutral-100 rounded">Tech Speak</Link></li>
                <li><Link to="/innovation/upcoming-releases" className="block px-2 py-1 hover:bg-neutral-100 rounded">Upcoming Releases</Link></li>
              </ul>
            </div>
          </details>

          {/* Company */}
          <details className="relative group hidden md:block">
            <summary className="nav-link list-none cursor-pointer select-none">COMPANY ▾</summary>
            <div className="absolute right-0 mt-2 w-[200px] bg-white text-black rounded-md shadow-md ring-1 ring-black/5 invisible group-open:visible opacity-0 group-open:opacity-100 transition-all duration-150 z-50">
              <ul className="p-3 space-y-2">
                <li><Link to="/page/about-us" className="block px-2 py-1 hover:bg-neutral-100 rounded">About Us</Link></li>
                <li><Link to="/page/team" className="block px-2 py-1 hover:bg-neutral-100 rounded">Team</Link></li>
                <li><Link to="/page/evoems" className="block px-2 py-1 hover:bg-neutral-100 rounded">EV OEMs</Link></li>
                <li><Link to="/page/evseoems" className="block px-2 py-1 hover:bg-neutral-100 rounded">EVSE OEMs</Link></li>
              </ul>
            </div>
          </details>

          {/* Simple contact link on the right */}
          <Link to="/page/contact-us" className="nav-link">CONTACT</Link>
        </div>
      </nav>

      {/* Background CHARGING Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" style={{ top: '-18%' }}>
        <h1 className="gradient-text text-[22vw] md:text-[20vw] font-black tracking-tighter leading-none whitespace-nowrap">
          CHARGING
        </h1>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 h-screen">
        
        {/* Fast and Secure Text - Left Side */}
        <div className="absolute left-6 md:left-12 top-[15%] z-20">
          <p className="italic-heading text-sm md:text-base lg:text-lg">Fast and Secure</p>
          <div className="mt-3 h-0.5 w-16 bg-gradient-to-r from-ev-green to-transparent" />
        </div>

        {/* Center Image Area */}
        <div className="absolute inset-0 flex items-center justify-center pt-8">
          <img 
            src="/images/charger. png" 
            alt="Electric Vehicle Charging Station" 
            className="max-h-[85vh] w-auto object-contain drop-shadow-2xl scale-110 md:scale-125"
          />
        </div>

        {/* Right Side Description */}
        <div className="absolute right-6 md:right-12 bottom-[15%] md:bottom-[18%] z-20 max-w-[280px] md:max-w-[380px] text-right">
          <p className="text-foreground/90 text-sm md:text-lg lg:text-xl leading-relaxed font-light">
            Be part of the transformation to electric vehicles 
            via partnership for the provision of Filling 
            Stations Public Electric Vehicles
          </p>
          <div className="mt-4 flex justify-end">
            <Link to="/our-offerings" className="group inline-flex items-center gap-2 text-xs md:text-sm font-medium text-foreground/90 hover:text-ev-green transition-colors duration-300">
              Learn More 
              <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom Notch/Curve - Modern Design */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        {/* White base that extends full width */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white" />
        {/* Centered notch */}
        <div className="relative flex justify-center">
          <svg width="280" height="70" viewBox="0 0 280 70" fill="none" xmlns="http://www.w3. org/2000/svg">
            <path 
              d="M0 70V0H100C100 0 115 0 130 35C145 70 140 70 140 70C140 70 135 70 150 35C165 0 180 0 180 0H280V70H0Z" 
              fill="white"
            />
            {/* Inner accent line */}
            <path 
              d="M110 8C110 8 125 8 138 38C142 47 140 50 140 50C140 50 138 47 142 38C155 8 170 8 170 8" 
              stroke="hsl(142 70% 45%)"
              strokeWidth="2"
              fill="none"
              opacity="0.6"
            />
          </svg>
          {/* Scroll indicator */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
            <div className="w-1 h-3 bg-ev-green/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;