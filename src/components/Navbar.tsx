"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX, IconChevronDown } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import React, { useRef, useState } from "react";

const Navbar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [offeringsOpen, setOfferingsOpen] = useState(false);
  const [verticalsOpen, setVerticalsOpen] = useState(false);
  const [innovationOpen, setInnovationOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  // Mobile dropdown states
  const [mobileOfferingsOpen, setMobileOfferingsOpen] = useState(false);
  const [mobileVerticalsOpen, setMobileVerticalsOpen] = useState(false);
  const [mobileInnovationOpen, setMobileInnovationOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  const offeringsItems = [
    {
      category: "Products",
      items: [
        { name: "AC Chargers", link: "/page/ac-chargers" },
        { name: "DC Chargers", link: "/page/dc-chargers" },
        { name: "Charging Management System", link: "/page/charging-management-system" },
        { name: "Onboard Chargers", link: "/page/onboard-chargers" },
      ],
    },
    {
      category: "Services",
      items: [
        { name: "Charger Services", link: "/page/charger-services" },
        { name: "Charging Management Services", link: "/page/charging-management-services" },
        { name: "Consulting", link: "/page/consulting" },
      ],
    },
    {
      category: "Solutions",
      items: [
        { name: "View All Solutions", link: "/our-offerings" },
      ],
    },
  ];

  const verticalsItems = [
    { name: "Fleets", link: "/page/fleets" },
    { name: "Workplace", link: "/page/workplace" },
    { name: "Residential", link: "/page/residential" },
    { name: "CPOs", link: "/page/cpos" },
    { name: "Retail and Hospitality", link: "/page/retail-hospitality" },
    {
      name: "OEMs",
      submenu: [
        { name: "EV OEMs", link: "/page/ev-oems" },
        { name: "EVSE OEMs", link: "/page/evse-oems" },
      ],
    },
    { name: "Energy Storage", link: "/page/energy-storage" },
  ];

  const innovationItems = [
    { name: "Tech Speak", link: "/page/tech-speak" },
    { name: "Upcoming Releases", link: "/page/upcoming-releases" },
  ];

  const companyItems = [
    { name: "About Us", link: "/page/about-us" },
    { name: "Team", link: "/page/team" },
    { name: "Contact Us", link: "/page/contact-us" },
    { name: "Careers", link: "/page/careers" },
  ];

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Our Offerings", link: "#", hasDropdown: true, dropdown: "offerings" },
    { name: "Verticals", link: "#", hasDropdown: true, dropdown: "verticals" },
    { name: "Innovation", link: "#", hasDropdown: true, dropdown: "innovation" },
    { name: "Company", link: "#", hasDropdown: true, dropdown: "company" },
  ];

  return (
    <motion.div
      ref={ref}
      className="fixed inset-x-0 top-0 z-50 w-full"
    >
      {/* Desktop Navbar */}
      <motion.div
        animate={{
          backdropFilter: visible ? "blur(16px)" : "blur(0px)",
          backgroundColor: visible ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0)",
          borderRadius: visible ? "9999px" : "0px",
          width: visible ? "70%" : "100%",
          y: visible ? 20 : 0,
          paddingLeft: visible ? "24px" : "48px",
          paddingRight: visible ? "24px" : "48px",
          boxShadow: visible ? "0 4px 24px rgba(0, 0, 0, 0.1)" : "none",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
        }}
        className="relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start px-12 py-4 lg:flex"
      >
        {/* Logo */}
        <a href="/" className="relative z-20 flex items-center space-x-2">
          <img
            src="/lovable-uploads/4e67d66f-c0e8-4f31-8fcf-d0611ede8aaa.png"
            alt="SIRIEM Logo"
            className="h-8 w-auto"
          />
        </a>

        {/* Nav Items */}
        <div className="flex flex-1 flex-row items-center justify-center space-x-1">
          {navItems.map((item, idx) => (
            <div key={`desktop-link-${idx}`} className="relative">
              {item.hasDropdown ? (
                <div
                  className="relative"
                  onMouseEnter={() => {
                    if (item.dropdown === "offerings") setOfferingsOpen(true);
                    if (item.dropdown === "verticals") setVerticalsOpen(true);
                    if (item. dropdown === "innovation") setInnovationOpen(true);
                    if (item.dropdown === "company") setCompanyOpen(true);
                  }}
                  onMouseLeave={() => {
                    if (item.dropdown === "offerings") setOfferingsOpen(false);
                    if (item.dropdown === "verticals") setVerticalsOpen(false);
                    if (item. dropdown === "innovation") setInnovationOpen(false);
                    if (item.dropdown === "company") setCompanyOpen(false);
                  }}
                >
                  <motion.button
                    animate={{
                      color: visible ?  "#000000" : "#FFFFFF",
                    }}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium hover:text-[#00FF66] transition-colors duration-200 whitespace-nowrap"
                  >
                    {item.name}
                    <IconChevronDown className="h-4 w-4" />
                  </motion.button>

                  {/* Our Offerings Dropdown */}
                  {item.dropdown === "offerings" && (
                    <AnimatePresence>
                      {offeringsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-white backdrop-blur-xl rounded-lg shadow-xl border border-neutral-200 overflow-hidden"
                        >
                          {offeringsItems.map((category, cidx) => (
                            <div key={`category-${cidx}`} className="border-b border-neutral-100 last:border-b-0">
                              <div className="px-4 py-2 bg-neutral-50 text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                                {category.category}
                              </div>
                              {category.items.map((product, pidx) => (
                                <a
                                  key={`product-${pidx}`}
                                  href={product.link}
                                  className="block px-4 py-3 text-sm text-black hover:bg-[#00FF66]/20 hover:text-[#00FF66] transition-colors duration-200"
                                >
                                  {product.name}
                                </a>
                              ))}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}

                  {/* Verticals Dropdown */}
                  {item.dropdown === "verticals" && (
                    <AnimatePresence>
                      {verticalsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white backdrop-blur-xl rounded-lg shadow-xl border border-neutral-200 overflow-hidden"
                        >
                          {verticalsItems.map((vertical, vidx) => (
                            <div key={`vertical-${vidx}`}>
                              {vertical.submenu ?  (
                                <div className="group relative">
                                  <div className="px-4 py-3 text-sm text-black hover:bg-[#00FF66]/20 hover:text-[#00FF66] transition-colors duration-200 cursor-pointer flex items-center justify-between">
                                    {vertical.name}
                                    <IconChevronDown className="h-4 w-4 -rotate-90" />
                                  </div>
                                  <div className="hidden group-hover:block absolute left-full top-0 ml-2 w-48 bg-white backdrop-blur-xl rounded-lg shadow-xl border border-neutral-200 overflow-hidden">
                                    {vertical.submenu.map((sub, sidx) => (
                                      <a
                                        key={`sub-${sidx}`}
                                        href={sub.link}
                                        className="block px-4 py-3 text-sm text-black hover:bg-[#00FF66]/20 hover:text-[#00FF66] transition-colors duration-200"
                                      >
                                        {sub.name}
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <a
                                  href={vertical.link}
                                  className="block px-4 py-3 text-sm text-black hover:bg-[#00FF66]/20 hover:text-[#00FF66] transition-colors duration-200"
                                >
                                  {vertical.name}
                                </a>
                              )}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}

                  {/* Innovation Dropdown */}
                  {item.dropdown === "innovation" && (
                    <AnimatePresence>
                      {innovationOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white backdrop-blur-xl rounded-lg shadow-xl border border-neutral-200 overflow-hidden"
                        >
                          {innovationItems.map((innovation, iidx) => (
                            <a
                              key={`innovation-${iidx}`}
                              href={innovation.link}
                              className="block px-4 py-3 text-sm text-black hover:bg-[#00FF66]/20 hover:text-[#00FF66] transition-colors duration-200"
                            >
                              {innovation.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}

                  {/* Company Dropdown */}
                  {item. dropdown === "company" && (
                    <AnimatePresence>
                      {companyOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white backdrop-blur-xl rounded-lg shadow-xl border border-neutral-200 overflow-hidden"
                        >
                          {companyItems.map((company, cidx) => (
                            <a
                              key={`company-${cidx}`}
                              href={company.link}
                              className="block px-4 py-3 text-sm text-black hover:bg-[#00FF66]/20 hover:text-[#00FF66] transition-colors duration-200"
                            >
                              {company.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ) : (
                <motion.a
                  href={item.link}
                  animate={{
                    color: visible ?  "#000000" : "#FFFFFF",
                  }}
                  className="px-3 py-2 text-sm font-medium hover:text-[#00FF66] transition-colors duration-200"
                >
                  {item.name}
                </motion. a>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="/page/contact-us"
          className="px-6 py-2 bg-[#00FF66] text-black text-sm font-semibold rounded-full hover:bg-[#00FF66]/90 transition-all duration-200 whitespace-nowrap"
        >
          Talk to Our Expert →
        </a>
      </motion.div>

      {/* Mobile Navbar */}
      <motion.div
        animate={{
          backdropFilter: visible ? "blur(16px)" : "blur(0px)",
          backgroundColor: visible ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0)",
          borderRadius: visible ? "16px" : "0px",
          width: visible ? "90%" : "100%",
          y: visible ? 20 : 0,
          paddingLeft: visible ? "16px" : "24px",
          paddingRight: visible ? "16px" : "24px",
          boxShadow: visible ? "0 4px 24px rgba(0, 0, 0, 0.1)" : "none",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
        }}
        className="relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-6 py-4 lg:hidden"
      >
        <div className="flex w-full flex-row items-center justify-between">
          {/* Logo */}
          <a href="/" className="relative z-20 flex items-center">
            <img
              src="/lovable-uploads/4e67d66f-c0e8-4f31-8fcf-d0611ede8aaa.png"
              alt="SIRIEM Logo"
              className="h-8 w-auto"
            />
          </a>

          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            animate={{
              color: visible ? "#000000" : "#FFFFFF",
            }}
            className="z-20"
          >
            {mobileMenuOpen ? <IconX className="h-6 w-6" /> : <IconMenu2 className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="w-full flex flex-col items-start gap-3 pt-4 mt-4 border-t border-neutral-300 max-h-[70vh] overflow-y-auto"
            >
              {/* Home */}
              <a
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-black hover:text-[#00FF66] transition-colors duration-200 text-base font-medium"
              >
                Home
              </a>

              {/* Our Offerings */}
              <div className="w-full">
                <button
                  onClick={() => setMobileOfferingsOpen(! mobileOfferingsOpen)}
                  className="flex items-center justify-between w-full text-black hover:text-[#00FF66] transition-colors duration-200 text-base font-medium"
                >
                  Our Offerings
                  <IconChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${mobileOfferingsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileOfferingsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col gap-2 mt-2 ml-4"
                    >
                      {offeringsItems.map((category, cidx) => (
                        <div key={`mobile-category-${cidx}`}>
                          <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">
                            {category.category}
                          </div>
                          {category.items.map((item, iidx) => (
                            <a
                              key={`mobile-item-${iidx}`}
                              href={item.link}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block text-neutral-600 hover:text-[#00FF66] transition-colors duration-200 text-sm py-1"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Verticals */}
              <div className="w-full">
                <button
                  onClick={() => setMobileVerticalsOpen(!mobileVerticalsOpen)}
                  className="flex items-center justify-between w-full text-black hover:text-[#00FF66] transition-colors duration-200 text-base font-medium"
                >
                  Verticals
                  <IconChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${mobileVerticalsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileVerticalsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col gap-2 mt-2 ml-4"
                    >
                      {verticalsItems.map((vertical, vidx) => (
                        <div key={`mobile-vertical-${vidx}`}>
                          {vertical.submenu ? (
                            <div>
                              <div className="text-neutral-600 text-sm font-medium mb-1">{vertical.name}</div>
                              {vertical.submenu.map((sub, sidx) => (
                                <a
                                  key={`mobile-sub-${sidx}`}
                                  href={sub.link}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block text-neutral-500 hover:text-[#00FF66] transition-colors duration-200 text-sm py-1 ml-3"
                                >
                                  {sub.name}
                                </a>
                              ))}
                            </div>
                          ) : (
                            <a
                              href={vertical.link}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block text-neutral-600 hover:text-[#00FF66] transition-colors duration-200 text-sm"
                            >
                              {vertical.name}
                            </a>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Innovation */}
              <div className="w-full">
                <button
                  onClick={() => setMobileInnovationOpen(!mobileInnovationOpen)}
                  className="flex items-center justify-between w-full text-black hover:text-[#00FF66] transition-colors duration-200 text-base font-medium"
                >
                  Innovation
                  <IconChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${mobileInnovationOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileInnovationOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col gap-2 mt-2 ml-4"
                    >
                      {innovationItems.map((innovation, iidx) => (
                        <a
                          key={`mobile-innovation-${iidx}`}
                          href={innovation.link}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-neutral-600 hover:text-[#00FF66] transition-colors duration-200 text-sm"
                        >
                          {innovation.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Company */}
              <div className="w-full">
                <button
                  onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                  className="flex items-center justify-between w-full text-black hover:text-[#00FF66] transition-colors duration-200 text-base font-medium"
                >
                  Company
                  <IconChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${mobileCompanyOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileCompanyOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col gap-2 mt-2 ml-4"
                    >
                      {companyItems.map((company, cidx) => (
                        <a
                          key={`mobile-company-${cidx}`}
                          href={company.link}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-neutral-600 hover:text-[#00FF66] transition-colors duration-200 text-sm"
                        >
                          {company.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="/page/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full px-6 py-3 bg-[#00FF66] text-black text-sm font-semibold rounded-full hover:bg-[#00FF66]/90 transition-all duration-200 text-center mt-2"
              >
                Talk to Our Expert →
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion. div>
    </motion.div>
  );
};

export default Navbar;