"use client";
import HeroSection from "@/components/ui/HeroSection";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { StickyApproachCards } from "@/components/ui/sticky-approach-cards";
import WorldMap from "@/components/ui/world-map";
import { ExploreLineup } from "@/components/ui/explore-lineup";
import { WhySiriemBento } from "@/components/WhySiriemBento"; 
import { motion } from "framer-motion";
import { Zap, Layers, Clock, Wrench } from "lucide-react";
import { Footer7 } from "@/components/ui/footer-7"; 
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

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
      imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80",
      icon: <Zap className="w-6 h-6" strokeWidth={2.5} />,
      bgColor: "bg-white",
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
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      icon: <Layers className="w-6 h-6" strokeWidth={2.5} />,
      bgColor: "bg-white",
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
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      icon: <Clock className="w-6 h-6" strokeWidth={2.5} />,
      bgColor: "bg-white",
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
      imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
      icon: <Wrench className="w-6 h-6" strokeWidth={2.5} />,
      bgColor: "bg-white",
    },
  ];

  const clientTestimonials = [
    {
      quote:
        "SIRIEM's fleet charging solution reduced our peak demand charges by 28% while improving vehicle uptime.  The CMS platform is intuitive and reliable.",
      name: "Transit Authority",
      title: "Municipal Fleet Operations",
    },
    {
      quote:
        "The turn-key deployment was seamless. From site assessment to commissioning, SIRIEM handled everything.  Our depot is now fully operational.",
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

  // Footer Data
  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "AC Chargers", href: "/page/ac-chargers" },
        { name: "DC Chargers", href: "/page/dc-chargers" },
        { name: "CMS Platform", href: "/page/charging-management-system" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/page/about-us" },
        { name: "Leadership", href: "/page/team" },
        { name: "Contact", href: "/page/contact-us" },
      ],
    },
    {
      title: "Contact",
      links: [
        { name: "hello@siriem.com", href: "mailto:hello@siriem.com" },
        { name: "+1 (555) 123-4567", href: "tel:+15551234567" },
        { name: "Sales Support", href: "/page/contact-us" },
      ],
    },
  ];

  const footerSocials = [
    { icon: <Linkedin className="size-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="size-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="size-5" />, href: "#", label: "Instagram" },
    { icon: <Facebook className="size-5" />, href: "#", label: "Facebook" },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Our Approach Section */}
      <StickyApproachCards cards={approachCards} />

      {/* Explore Line-Up Section */}
      <ExploreLineup />

      {/* Why SIRIEM Section */}
      <section className="py-32 bg-white relative z-20 overflow-hidden">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <WhySiriemBento />
        </div>
      </section>

      {/* World Map Section */}
      <section className="py-24 bg-[#022c22] border-t border-[#00FF66]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <div className="h-1 w-20 mx-auto mb-8 bg-[#00FF66] rounded-full" />
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Remote{" "}
            <span className="text-neutral-400">
              {"Connectivity".split("").map((char, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block"
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                  viewport={{ once: true }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-16 leading-relaxed">
            Cloud-based infrastructure enables remote diagnostics, firmware updates, and
            centralized management across all your charging sites worldwide.
          </p>
          
          {/* RE-ADDED dotColor="#ffffff30" HERE */}
          <WorldMap 
            dotColor="#ffffff30"
            dots={[
              { start: { lat: 40.7128, lng: -74.006, label: "New York" }, end: { lat: 51.5074, lng: -0.1278, label: "London" } },
              { start: { lat: 51.5074, lng: -0.1278, label: "London" }, end: { lat: 28.6139, lng: 77.209, label: "New Delhi" } },
              { start: { lat: 28.6139, lng: 77.209, label: "New Delhi" }, end: { lat: 35.6762, lng: 139.6503, label: "Tokyo" } },
              { start: { lat: 35.6762, lng: 139.6503, label: "Tokyo" }, end: { lat: -33.8688, lng: 151.2093, label: "Sydney" } },
              { start: { lat: 40.7128, lng: -74.006, label: "New York" }, end: { lat: -23.5505, lng: -46.6333, label: "São Paulo" } },
              { start: { lat: -23.5505, lng: -46.6333, label: "São Paulo" }, end: { lat: -1.2921, lng: 36.8219, label: "Nairobi" } },
            ]}
            lineColor="#00FF66"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <div className="h-1 w-20 mx-auto mb-8 bg-[#00FF66] rounded-full" />
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              From municipal transit to commercial fleets and workplace programs —
              organizations worldwide rely on SIRIEM for their charging infrastructure.
            </p>
          </div>

          <InfiniteMovingCards items={clientTestimonials} direction="left" speed="slow" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#00FF66] border-t border-black/10">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6 tracking-tight leading-tight">
            Ready to Deploy Charging Infrastructure?
          </h2>
          <p className="text-xl text-black/80 font-medium mb-12 leading-relaxed max-w-2xl mx-auto">
            Schedule a consultation with our team to discuss your requirements.  
            We'll provide a customized proposal for your site.  
          </p>
          
          <div className="flex gap-6 justify-center flex-wrap">
            <a
              href="/page/contact-us"
              className="px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-white hover:text-black hover:shadow-xl hover:scale-105 transition-all duration-300 hover:-translate-y-1 border-2 border-transparent"
            >
              Request Consultation
            </a>
            
            <a
              href="/our-offerings"
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-black hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300 hover:-translate-y-1 border-2 border-transparent"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer7 
        logo={{
          url: "/",
          src: "/images/logo-1.png",
          alt: "SIRIEM Logo",
          title: "",
        }}
        description="Enterprise EV charging for fleets, operators, and OEMs. Building the future of sustainable mobility."
        sections={footerSections}
        socialLinks={footerSocials}
        copyright={`© ${new Date().getFullYear()} SIRIEM — All rights reserved.`}
        legalLinks={[
          { name: "Privacy Policy", href: "#" },
          { name: "Terms & Conditions", href: "#" },
        ]}
      />
    </main>
  );
};

export default Index;