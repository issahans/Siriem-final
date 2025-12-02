"use client";
import React from "react";
import { Link } from "react-router-dom";
import { ImagesSlider } from "@/components/ui/images-slider";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { 
  IconBolt, 
  IconChartBar, 
  IconAdjustments, 
  IconDeviceDesktop, 
  IconCoin, 
  IconHeartbeat 
} from "@tabler/icons-react";

const ACCENT = "#00FF66";
const BG = "#FFFFFF";
const TEXT = "#000000";

const Fleets = (): JSX.Element => {
  // Placeholder images for the slider
  const sliderImages = [
    "/images/fleetimg1.png",
    "/images/fleetimg2.png",
    "/images/fleetimg3.png",
  ];

  const features = [
    {
      title: "Smart Charging Optimization",
      description: "AI-powered scheduling reduces peak demand charges and maximizes vehicle uptime.",
      icon: <IconBolt className="w-6 h-6" stroke={1.5} />,
    },
    {
      title: "Fleet Usage Analytics",
      description: "Real-time insights into charging patterns, energy consumption, and cost per vehicle.",
      icon: <IconChartBar className="w-6 h-6" stroke={1.5} />,
    },
    {
      title: "Load Balancing & Scheduling",
      description: "Dynamic power allocation ensures efficient energy use across your entire depot.",
      icon: <IconAdjustments className="w-6 h-6" stroke={1.5} />,
    },
    {
      title: "Remote Monitoring",
      description: "Cloud-based dashboard for 24/7 visibility into charger status and fleet health.",
      icon: <IconDeviceDesktop className="w-6 h-6" stroke={1.5} />,
    },
    {
      title: "Cost Reduction",
      description: "Lower total energy costs through demand management and smart charging strategies.",
      icon: <IconCoin className="w-6 h-6" stroke={1.5} />,
    },
    {
      title: "EV Health Insights",
      description: "Monitor battery health and vehicle state-of-charge for predictive maintenance.",
      icon: <IconHeartbeat className="w-6 h-6" stroke={1.5} />,
    },
  ];

  const benefits = [
    "Reduce peak demand charges by up to 30%",
    "Increase fleet utilization with predictive charging",
    "Simplify depot operations with centralized control",
    "Scale seamlessly from pilot to enterprise deployment",
  ];

  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-0.5 w-16 mb-6" style={{ background: ACCENT }} />
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Fleet Charging,
              <br />
              <span style={{ color: ACCENT }}>Simplified</span>
            </h1>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed max-w-lg">
              Depot-grade charging infrastructure with intelligent software for commercial and municipal fleets.
              Reduce costs, optimize uptime, and scale with confidence.
            </p>
            <div className="flex gap-4">
              <Link
                to="/page/contact-us"
                className="px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:shadow-lg"
                style={{ background: ACCENT, color: TEXT }}
              >
                Schedule a Demo
              </Link>
              <Link
                to="/our-offerings"
                className="px-6 py-3 rounded-md font-semibold border transition-all duration-300 hover:border-black"
                style={{ borderColor: "rgba(0,0,0,0.2)", color: TEXT }}
              >
                Learn More
              </Link>
            </div>
          </motion. div>

          {/* Right: Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg border border-neutral-100">
              <img
                src="/images/fleetdepot.png"
                alt="Fleet charging depot illustration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full blur-3xl opacity-20" style={{ background: ACCENT }} />
          </motion.div>
        </div>
      </section>

      {/* Images Slider Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <div className="h-0. 5 w-16 mx-auto mb-4" style={{ background: ACCENT }} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fleet Charging in Action</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              See how leading fleets deploy scalable, intelligent charging infrastructure.  
            </p>
          </div>

          <ImagesSlider className="h-[40rem]" images={sliderImages}>
            <motion.div
              initial={{ opacity: 0, y: -80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="z-50 flex flex-col justify-center items-center"
            >
              <motion.p className="font-bold text-xl md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                Smart Depot Charging <br /> for Modern Fleets
              </motion.p>
              <button
                className="px-4 py-2 backdrop-blur-sm border rounded-md border-neutral-300 bg-white/10 text-white mx-auto text-center mt-4"
                style={{ borderColor: ACCENT }}
              >
                Explore Solutions →
              </button>
            </motion.div>
          </ImagesSlider>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <div className="h-0.5 w-16 mx-auto mb-4" style={{ background: ACCENT }} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Capabilities</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              End-to-end fleet charging technology designed for reliability and operational efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-6 rounded-xl border bg-white transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer"
                style={{ borderColor: "rgba(0,0,0,0.1)" }}
                onMouseEnter={(e) => {
                  e.currentTarget. style.borderColor = ACCENT;
                }}
                onMouseLeave={(e) => {
                  e. currentTarget.style.borderColor = "rgba(0,0,0,0.1)";
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300"
                  style={{ background: "rgba(0,255,102,0.1)" }}
                >
                  <div style={{ color: ACCENT }}>{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{feature.description}</p>
              </motion. div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-12">
            <div className="h-0.5 w-16 mb-4" style={{ background: ACCENT }} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Commercial Outcomes</h2>
            <p className="text-neutral-600 max-w-3xl">
              Fleet operators achieve measurable results: lower energy costs, higher vehicle utilization,
              and simplified depot operations. 
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4"
              >
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ background: ACCENT }}
                />
                <p className="text-lg text-neutral-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Block / Illustration */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-0. 5 w-16 mb-4" style={{ background: ACCENT }} />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Integrated Platform Architecture</h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                SIRIEM's fleet solution combines hardware, software, and services into a unified platform. 
                Edge controllers provide local resiliency while cloud orchestration enables centralized
                management, analytics, and remote diagnostics.
              </p>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ background: ACCENT }} />
                  <span>OCPP-compliant chargers with real-time telemetry</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ background: ACCENT }} />
                  <span>Cloud CMS for scheduling, billing, and reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ background: ACCENT }} />
                  <span>APIs for fleet telematics and ERP integration</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl border border-neutral-100">
                <img
                  src="/images/fleetarch.png"
                  alt="System architecture diagram"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="text-sm text-neutral-500 mt-3 text-center">
                [Image: Fleet charging system architecture]
              </figcaption>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to electrify your fleet?
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Talk to our fleet solutions team for site assessments, pilot programs, and full-scale depot deployments.
              We'll help you reduce costs and maximize uptime.   
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/page/contact-us"
                className="px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{ background: ACCENT, color: TEXT }}
              >
                Request Consultation
              </Link>
              <Link
                to="/our-offerings"
                className="px-8 py-4 rounded-md font-semibold text-lg border transition-all duration-300 hover:border-black"
                style={{ borderColor: "rgba(0,0,0,0.2)", color: TEXT }}
              >
                View Products & Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white" style={{ borderColor: "rgba(0,0,0,0. 08)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-3">SIRIEM</h4>
              <p className="text-sm text-neutral-600">Enterprise EV charging for fleets, operators, and OEMs. </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3 text-sm">Products</h5>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li><Link to="/page/ac-chargers" className="hover:text-black transition">AC Chargers</Link></li>
                <li><Link to="/page/dc-chargers" className="hover:text-black transition">DC Chargers</Link></li>
                <li><Link to="/page/charging-management-system" className="hover:text-black transition">CMS</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3 text-sm">Company</h5>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li><Link to="/page/about-us" className="hover:text-black transition">About</Link></li>
                <li><Link to="/page/team" className="hover:text-black transition">Team</Link></li>
                <li><Link to="/page/contact-us" className="hover:text-black transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3 text-sm">Contact</h5>
              <p className="text-sm text-neutral-600">hello@siriem.com</p>
              <p className="text-sm text-neutral-600">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t text-center text-sm text-neutral-500" style={{ borderColor: "rgba(0,0,0,0. 08)" }}>
            © {new Date().getFullYear()} SIRIEM — All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Fleets;