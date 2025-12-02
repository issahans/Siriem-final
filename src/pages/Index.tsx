"use client";
import HeroSection from "@/components/ui/HeroSection";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import WorldMap from "@/components/ui/world-map";
import { motion } from "framer-motion";
import {
  IconPlug,
  IconBolt,
  IconDeviceDesktop,
  IconCpu,
  IconShieldCheck,
  IconCloud,
  IconUsers,
  IconChartLine,
} from "@tabler/icons-react";

const Index = () => {
  const approachCards = [
    {
      title: "Future-Proof Architecture",
      description: "Standards-first design ensures compatibility with OCPP, ISO 15118, and future charging protocols.",
      steps: [
        "OCPP 1.6 & 2.0.1 compliant",
        "ISO 15118 Plug & Charge ready",
        "Over-the-air firmware updates",
        "Future protocol compatibility",
      ],
    },
    {
      title: "Scalable Solutions",
      description: "Modular hardware and software architecture allows seamless upgrades without replacing entire systems.",
      steps: [
        "Hot-swap power modules",
        "Modular CMS architecture",
        "Horizontal scaling support",
        "Zero-downtime upgrades",
      ],
    },
    {
      title: "24/7 Reliability",
      description: "SLA-driven support with real-time telemetry and remote diagnostics ensures maximum uptime.",
      steps: [
        "99.5% uptime SLA",
        "Real-time diagnostics",
        "Predictive maintenance",
        "24/7 NOC monitoring",
      ],
    },
    {
      title: "Hassle-Free Implementation",
      description: "End-to-end deployment from site assessment to managed operations.",
      steps: [
        "Site assessment & design",
        "Turnkey installation",
        "System integration",
        "Managed operations",
      ],
    },
  ];

  const productLineup = [
    {
      title: "AC Charging Solutions",
      description:
        "Smart AC charging for homes, apartments & workplaces.    Power range 3. 7kW–22kW with Wi-Fi, Ethernet, and optional LTE connectivity.",
      link: "/page/ac-chargers",
      icon: <IconPlug className="w-6 h-6" stroke={1.5} />,
    },
    {
      title: "DC Fast Charging Solutions",
      description:
        "High-power CCS fast chargers for fleets & public stations.  Modular 50kW, 150kW, and 350kW platforms with hot-swap power modules.",
      link: "/page/dc-chargers",
      icon: <IconBolt className="w-6 h-6" stroke={1.5} />,
    },
    {
      title: "Charging Management Software",
      description:
        "Cloud-native CMS to monitor, optimize & automate your entire charging network with real-time telemetry and billing integration.",
      link: "/page/charging-management-system",
      icon: <IconDeviceDesktop className="w-6 h-6" stroke={1.5} />,
    },
    {
      title: "Onboard Charging & Power Modules",
      description:
        "Efficient onboard chargers for OEM integrations.   High-efficiency OBCs with multi-voltage inputs and vehicle telematics support.",
      link: "/page/onboard-chargers",
      icon: <IconCpu className="w-6 h-6" stroke={1.5} />,
    },
  ];

  const whySiriemCards = [
    {
      title: "Enterprise Support",
      icon: <IconShieldCheck className="w-8 h-8" stroke={1.5} />,
      description: "SLA-backed 24/7 monitoring and field service with trained technicians.",
      features: [
        "99.5% uptime guarantee",
        "24/7 NOC monitoring",
        "On-site field service",
        "Spare parts logistics",
      ],
    },
    {
      title: "Cloud-Native CMS",
      icon: <IconCloud className="w-8 h-8" stroke={1.5} />,
      description: "Real-time telemetry and remote diagnostics across your network.",
      features: [
        "Remote firmware updates",
        "Real-time analytics",
        "Predictive maintenance",
        "API integration",
      ],
    },
    {
      title: "Proven Track Record",
      icon: <IconUsers className="w-8 h-8" stroke={1.5} />,
      description: "Deployed across fleets, workplaces, and public charging sites.",
      features: [
        "1000+ installations",
        "50+ enterprise clients",
        "Multi-region support",
        "Industry certifications",
      ],
    },
    {
      title: "Cost Optimization",
      icon: <IconChartLine className="w-8 h-8" stroke={1.5} />,
      description: "Reduce demand charges through intelligent load management.",
      features: [
        "Smart load balancing",
        "Peak demand reduction",
        "Time-of-use optimization",
        "Energy cost analytics",
      ],
    },
  ];

  const clientTestimonials = [
    {
      quote:
        "SIRIEM's fleet charging solution reduced our peak demand charges by 28% while improving vehicle uptime.    The CMS platform is intuitive and reliable.",
      name: "Transit Authority",
      title: "Municipal Fleet Operations",
    },
    {
      quote:
        "The turn-key deployment was seamless. From site assessment to commissioning, SIRIEM handled everything.    Our depot is now fully operational.",
      name: "Logistics Company",
      title: "Commercial Fleet Manager",
    },
    {
      quote:
        "We needed a charging partner who understood both hardware and software. SIRIEM delivered on both fronts with exceptional support.",
      name: "EV Manufacturer",
      title: "OEM Integration Partner",
    },
    {
      quote:
        "Remote diagnostics and proactive maintenance have been game-changers. We've had zero unplanned downtime since deployment.",
      name: "Retail Chain",
      title: "Workplace Charging Program",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Our Approach Section - Green Shade Background */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <div className="h-0.5 w-16 mx-auto mb-6" style={{ background: "#00FF66" }} />
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
              Our Approach
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Pragmatic engineering, systems thinking, and operational excellence for
              end-to-end EV charging rollouts.  We combine standards-first design with
              field-proven reliability.   
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {approachCards.map((card, idx) => (
              <CardSpotlight key={idx} className="h-full border-green-200" backgroundColor="#D1FAE5">
                <p className="text-xl font-bold relative z-20 mt-2 text-black">
                  {card.title}
                </p>
                <div className="text-neutral-700 mt-4 relative z-20">
                  <p className="mb-4 text-sm">{card. description}</p>
                  <ul className="list-none mt-2 space-y-2">
                    {card.steps.map((step, stepIdx) => (
                      <StepGreen key={stepIdx} title={step} />
                    ))}
                  </ul>
                </div>
              </CardSpotlight>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Line-Up Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <div className="h-0.5 w-16 mx-auto mb-6" style={{ background: "#00FF66" }} />
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
              Explore Our Line-Up
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Complete charging solutions from AC wallboxes to high-power DC fast chargers,
              backed by intelligent software and managed services.
            </p>
          </div>

          <HoverEffect items={productLineup} />

          <div className="text-center mt-12">
            <a
              href="/our-offerings"
              className="inline-block px-8 py-4 bg-[#00FF66] text-black font-semibold rounded-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              View All Products & Services →
            </a>
          </div>
        </div>
      </section>

      {/* Why SIRIEM Section - Green Shade Background */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <div className="h-0.5 w-16 mx-auto mb-6" style={{ background: "#00FF66" }} />
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
              Why SIRIEM
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Partner with a team that understands both the technical and operational challenges
              of deploying EV charging infrastructure at scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {whySiriemCards. map((card, idx) => (
              <CardSpotlight key={idx} className="h-full border-green-200" backgroundColor="#D1FAE5">
                <div className="flex items-center gap-4 mb-4 relative z-20">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: "#00FF66" }}>
                    <div className="text-white">{card.icon}</div>
                  </div>
                  <p className="text-xl font-bold text-black">
                    {card.title}
                  </p>
                </div>
                <div className="text-neutral-700 mt-4 relative z-20">
                  <p className="mb-4 text-sm">{card.description}</p>
                  <ul className="list-none mt-2 space-y-2">
                    {card.features.map((feature, featureIdx) => (
                      <StepGreen key={featureIdx} title={feature} />
                    ))}
                  </ul>
                </div>
              </CardSpotlight>
            ))}
          </div>
        </div>
      </section>

      {/* World Map / Remote Connectivity Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <div className="h-0.5 w-16 mx-auto mb-6" style={{ background: "#00FF66" }} />
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            Remote{" "}
            <span className="text-neutral-400">
              {"Connectivity".split(""). map((char, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                >
                  {char}
                </motion. span>
              ))}
            </span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Cloud-based infrastructure enables remote diagnostics, firmware updates, and
            centralized management across all your charging sites worldwide.
          </p>
          
          <WorldMap 
            dots={[
              { start: { lat: 40.7128, lng: -74.006 }, end: { lat: 51.5074, lng: -0.1278 } },
              { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 28.6139, lng: 77.209 } },
              { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 35.6762, lng: 139.6503 } },
              { start: { lat: 35.6762, lng: 139.6503 }, end: { lat: -33.8688, lng: 151.2093 } },
              { start: { lat: 40.7128, lng: -74.006 }, end: { lat: -23.5505, lng: -46.6333 } },
              { start: { lat: -23.5505, lng: -46.6333 }, end: { lat: -1.2921, lng: 36.8219 } },
            ]}
            lineColor="#00FF66"
          />
        </div>
      </section>

      {/* Testimonials / Business Clients Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <div className="h-0.5 w-16 mx-auto mb-6" style={{ background: "#00FF66" }} />
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              From municipal transit to commercial fleets and workplace programs —
              organizations worldwide rely on SIRIEM for their charging infrastructure.
            </p>
          </div>

          <InfiniteMovingCards items={clientTestimonials} direction="left" speed="slow" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            Ready to Deploy Charging Infrastructure?
          </h2>
          <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
            Schedule a consultation with our team to discuss your requirements.   
            We'll provide a customized proposal for your site.  
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/page/contact-us"
              className="px-8 py-4 bg-[#00FF66] text-black font-semibold rounded-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Request Consultation
            </a>
            <a
              href="/our-offerings"
              className="px-8 py-4 border-2 border-neutral-300 text-black font-semibold rounded-md hover:border-black transition-all duration-300"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-3">SIRIEM</h4>
              <p className="text-sm text-neutral-600">Enterprise EV charging for fleets, operators, and OEMs.   </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3 text-sm">Products</h5>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li><a href="/page/ac-chargers" className="hover:text-black transition">AC Chargers</a></li>
                <li><a href="/page/dc-chargers" className="hover:text-black transition">DC Chargers</a></li>
                <li><a href="/page/charging-management-system" className="hover:text-black transition">CMS</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3 text-sm">Company</h5>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li><a href="/page/about-us" className="hover:text-black transition">About</a></li>
                <li><a href="/page/team" className="hover:text-black transition">Team</a></li>
                <li><a href="/page/contact-us" className="hover:text-black transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3 text-sm">Contact</h5>
              <p className="text-sm text-neutral-600">hello@siriem.com</p>
              <p className="text-sm text-neutral-600">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t text-center text-sm text-neutral-500" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
            © {new Date().getFullYear()} SIRIEM — All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
};

// Helper components
const StepGreen = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-black text-sm">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-[#00FF66] mt-1 shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

export default Index;