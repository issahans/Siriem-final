"use client";
import { cn } from "@/lib/utils";
import { 
  IconMenu2, 
  IconX, 
  IconChevronDown,
  IconChargingPile,
  IconDeviceDesktopAnalytics,
  IconCpu,
  IconPlugConnected,
  IconTool,
  IconHeadset,
  IconBulb,
  IconPackage,
  IconTruckDelivery,
  IconBuildingSkyscraper,
  IconHome,
  IconBuildingStore,
  IconBatteryAutomotive,
  IconSettings,
  IconUsers,
  IconMail,
  IconBriefcase
} from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

// --- Configuration for Mega Menus ---

const offeringsData = [
  {
    title: "Products",
    description: "Hardware & Software",
    icon: <IconChargingPile className="w-6 h-6 text-[#00FF66]" />,
    links: [
      { name: "AC Chargers", link: "/page/ac-chargers" },
      { name: "DC Chargers", link: "/page/dc-chargers" },
      { name: "CMS Platform", link: "/page/charging-management-system" },
      { name: "Onboard Chargers", link: "/page/onboard-chargers" },
    ]
  },
  {
    title: "Services",
    description: "Operational Excellence",
    icon: <IconHeadset className="w-6 h-6 text-[#00FF66]" />,
    links: [
      { name: "Charger Services", link: "/page/charger-services" },
      { name: "CMS Management", link: "/page/cms-services" },
      { name: "Consulting", link: "/page/consulting" },
    ]
  },
  {
    title: "Our Solutions",
    description: "End-to-End Packages",
    icon: <IconPackage className="w-6 h-6 text-[#00FF66]" />,
    link: "/page/solutions", 
    isSpecial: true
  }
];

const verticalsData = [
  {
    title: "Commercial",
    icon: <IconBuildingSkyscraper className="w-5 h-5" />,
    items: [
      { name: "Fleets", link: "/verticals/fleets", desc: "Depot & en-route charging" },
      { name: "Workplace", link: "/verticals/workplace", desc: "Employee charging programs" },
      { name: "Retail & Hospitality", link: "/verticals/retail-hospitality", desc: "Customer experience" },
    ]
  },
  {
    title: "Infrastructure",
    icon: <IconPlugConnected className="w-5 h-5" />,
    items: [
      { name: "CPOs", link: "/verticals/cpos", desc: "Network operators" },
      { name: "Residential", link: "/verticals/residential", desc: "Multi-unit dwellings" },
      { name: "Energy Storage", link: "/verticals/energy-storage", desc: "Grid balancing" },
    ]
  },
  {
    title: "Partnerships",
    icon: <IconSettings className="w-5 h-5" />,
    items: [
      { name: "EV OEMs", link: "/page/evoems", desc: "Vehicle integration" },
      { name: "EVSE OEMs", link: "/page/evseoems", desc: "Hardware certification" },
    ]
  }
];

const companyData = [
  { name: "About Us", link: "/page/about-us", icon: <IconBulb className="w-5 h-5" />, desc: "Our mission & vision" },
  { name: "Team", link: "/page/team", icon: <IconUsers className="w-5 h-5" />, desc: "Meet the experts" },
  { name: "Careers", link: "/page/careers", icon: <IconBriefcase className="w-5 h-5" />, desc: "Join SIRIEM" },
  { name: "Contact", link: "/page/contact-us", icon: <IconMail className="w-5 h-5" />, desc: "Get in touch" },
];

const Navbar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mobile sub-menus
  const [mobileOfferingsOpen, setMobileOfferingsOpen] = useState(false);
  const [mobileVerticalsOpen, setMobileVerticalsOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.div
      ref={ref}
      className="fixed inset-x-0 top-0 z-[100] w-full flex justify-center pt-4"
    >
      {/* --- DESKTOP NAVBAR --- */}
      <motion.nav
        initial={{ y: 0, width: "95%" }}
        animate={{
          width: scrolled ? "70%" : "95%",
          y: scrolled ? 10 : 0,
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(12px)",
          boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.1)" : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="hidden lg:flex items-center justify-between px-8 py-3 rounded-full border border-white/20 relative"
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 z-50">
          <img src="/images/logo-1.png" alt="SIRIEM" className="h-8 w-auto" />
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-1">
          <NavLink name="Home" link="/" />
          
          {/* OUR OFFERINGS */}
          <NavDropdown 
            name="Our Offerings" 
            id="offerings" 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
          >
            <div className="grid grid-cols-3 gap-6 p-6 w-[800px]">
              {/* Product Column */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-[#00FF66]/10 rounded-lg">{offeringsData[0].icon}</div>
                  <div>
                    <h4 className="font-bold text-black">{offeringsData[0].title}</h4>
                    <p className="text-xs text-neutral-500">{offeringsData[0].description}</p>
                  </div>
                </div>
                <div className="space-y-1">
                  {offeringsData[0].links.map((item, idx) => (
                    <a 
                      key={idx} 
                      href={item.link} 
                      className="block px-3 py-2 text-sm text-neutral-600 rounded-md transition-colors hover:bg-[#00FF66] hover:text-white"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Services Column */}
              <div className="space-y-4 border-l border-neutral-100 pl-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-[#00FF66]/10 rounded-lg">{offeringsData[1].icon}</div>
                  <div>
                    <h4 className="font-bold text-black">{offeringsData[1].title}</h4>
                    <p className="text-xs text-neutral-500">{offeringsData[1].description}</p>
                  </div>
                </div>
                <div className="space-y-1">
                  {offeringsData[1].links.map((item, idx) => (
                    <a 
                      key={idx} 
                      href={item.link} 
                      className="block px-3 py-2 text-sm text-neutral-600 rounded-md transition-colors hover:bg-[#00FF66] hover:text-white"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Solutions Column */}
              <a href={offeringsData[2].link} className="group relative flex flex-col justify-end p-6 rounded-2xl bg-neutral-900 overflow-hidden text-white no-underline">
                <div className="absolute inset-0 bg-[#00FF66] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-20 transition-opacity" />
                <div className="relative z-10">
                  <div className="mb-2 p-2 bg-white/10 w-fit rounded-lg backdrop-blur-sm group-hover:bg-black/10 group-hover:text-black transition-colors">
                    <IconPackage className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg group-hover:text-black transition-colors">Explore Solutions</h4>
                  <p className="text-xs text-neutral-300 group-hover:text-black/70 transition-colors mt-1">
                    Pre-configured stacks for Fleets, CPOs and Residential.
                  </p>
                </div>
              </a>
            </div>
          </NavDropdown>

          {/* VERTICALS */}
          <NavDropdown 
            name="Verticals" 
            id="verticals" 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
          >
            <div className="grid grid-cols-3 gap-6 p-6 w-[850px]">
              {verticalsData.map((category, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="flex items-center gap-2 text-[#00FF66] font-bold text-sm uppercase tracking-wider">
                    {category.icon}
                    {category.title}
                  </div>
                  <div className="grid gap-2">
                    {category.items.map((item, i) => (
                      <a 
                        key={i} 
                        href={item.link} 
                        className="group flex items-start gap-3 p-3 rounded-xl transition-all border border-transparent hover:bg-[#00FF66]"
                      >
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-white transition-colors" />
                        <div>
                          <div className="text-sm font-semibold text-neutral-800 group-hover:text-white transition-colors">{item.name}</div>
                          <div className="text-xs text-neutral-500 mt-0.5 group-hover:text-white/90 transition-colors">{item.desc}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </NavDropdown>

          {/* COMPANY */}
          <NavDropdown 
            name="Company" 
            id="company" 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
          >
            <div className="grid grid-cols-2 gap-4 p-4 w-[500px]">
              {companyData.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.link}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all group border border-transparent hover:bg-[#00FF66]"
                >
                  <div className="p-3 bg-neutral-100 rounded-lg text-neutral-600 group-hover:bg-white group-hover:text-[#00FF66] transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-neutral-800 group-hover:text-white transition-colors">{item.name}</h4>
                    <p className="text-xs text-neutral-500 mt-0.5 group-hover:text-white/90 transition-colors">{item.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </NavDropdown>
        </div>

        {/* CTA Button */}
        <a
          href="/page/contact-us"
          className="group relative px-6 py-2.5 bg-[#00FF66] text-black text-sm font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-black hover:ring-offset-2 border-2 border-transparent hover:border-black"
        >
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            Talk to Our Expert
          </span>
          <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </a>
      </motion.nav>

      {/* --- MOBILE NAVBAR (unchanged layout, same data) --- */}
      <div className="lg:hidden w-full px-4">
        <div className="flex items-center justify-between bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-neutral-100">
          <a href="/" className="flex items-center gap-2">
            <img src="/images/logo-1.png" alt="SIRIEM" className="h-7 w-auto" />
          </a>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <IconX className="w-6 h-6" /> : <IconMenu2 className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              className="mt-2 bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-100"
            >
              <div className="p-4 flex flex-col gap-2 max-h-[70vh] overflow-y-auto">
                <a href="/" className="p-3 font-bold text-lg hover:bg-neutral-50 rounded-xl">Home</a>
                
                {/* Mobile Offerings */}
                <div className="border-t border-neutral-100 pt-2">
                  <button 
                    onClick={() => setMobileOfferingsOpen(!mobileOfferingsOpen)}
                    className="w-full flex items-center justify-between p-3 font-bold text-lg hover:bg-neutral-50 rounded-xl"
                  >
                    Our Offerings <IconChevronDown className={`w-5 h-5 transition ${mobileOfferingsOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileOfferingsOpen && (
                    <div className="pl-4 pb-2 space-y-4">
                      {offeringsData.map((group, i) => (
                        <div key={i}>
                          <div className="text-xs font-bold text-[#00FF66] uppercase mb-2">{group.title}</div>
                          <div className="space-y-2 border-l-2 border-neutral-100 pl-3">
                            {group.links?.map((link, j) => (
                              <a key={j} href={link.link} className="block text-sm text-neutral-600 py-1 hover:text-[#00FF66]">{link.name}</a>
                            ))}
                            {group.link && (
                              <a href={group.link} className="block text-sm font-bold text-black py-1">View Solutions →</a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Verticals */}
                <div className="border-t border-neutral-100 pt-2">
                  <button 
                    onClick={() => setMobileVerticalsOpen(!mobileVerticalsOpen)}
                    className="w-full flex items-center justify-between p-3 font-bold text-lg hover:bg-neutral-50 rounded-xl"
                  >
                    Verticals <IconChevronDown className={`w-5 h-5 transition ${mobileVerticalsOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileVerticalsOpen && (
                    <div className="pl-4 pb-2 grid gap-2">
                      {verticalsData.flatMap(g => g.items).map((item, i) => (
                        <a key={i} href={item.link} className="block text-sm text-neutral-600 py-2 border-b border-neutral-50 last:border-0 hover:text-[#00FF66]">
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Company */}
                <div className="border-t border-neutral-100 pt-2">
                  <button 
                    onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                    className="w-full flex items-center justify-between p-3 font-bold text-lg hover:bg-neutral-50 rounded-xl"
                  >
                    Company <IconChevronDown className={`w-5 h-5 transition ${mobileCompanyOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileCompanyOpen && (
                    <div className="pl-4 pb-2 grid gap-2">
                      {companyData.map((item, i) => (
                        <a key={i} href={item.link} className="block text-sm text-neutral-600 py-2 hover:text-[#00FF66]">
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <a 
                  href="/page/contact-us"
                  className="mt-4 w-full py-4 bg-black text-white text-center font-bold rounded-xl"
                >
                  Talk to Our Expert
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// --- Sub-components for Clean Code ---

const NavLink = ({ name, link }: { name: string; link: string }) => (
  <a
    href={link}
    // CHANGED: Black text by default, Green Background + Black Text on Hover
    className="relative px-4 py-2 text-sm font-semibold text-neutral-800 transition-all rounded-full hover:bg-[#00FF66] hover:text-black"
  >
    {name}
  </a>
);

const NavDropdown = ({ 
  name, 
  id, 
  children, 
  activeTab, 
  setActiveTab 
}: { 
  name: string; 
  id: string; 
  children: React.ReactNode; 
  activeTab: string | null; 
  setActiveTab: (val: string | null) => void;
}) => {
  const isOpen = activeTab === id;

  return (
    <div 
      className="relative"
      onMouseEnter={() => setActiveTab(id)}
      onMouseLeave={() => setActiveTab(null)}
    >
      <button 
        // CHANGED: 
        // Default: Neutral Text
        // Hover: Green Background, Black Text
        // Open: Green Background, Black Text (to indicate active state)
        className={cn(
          "flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-all rounded-full",
          isOpen ? "bg-[#00FF66] text-black" : "text-neutral-800 hover:bg-[#00FF66] hover:text-black"
        )}
      >
        {name}
        <IconChevronDown className={cn("w-4 h-4 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
          >
            {/* White Card Container */}
            <div className="bg-white rounded-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] border border-neutral-100 overflow-hidden relative">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00FF66] via-emerald-400 to-[#00FF66]" />
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;