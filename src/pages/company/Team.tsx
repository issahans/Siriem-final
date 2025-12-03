"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const Team = () => {
  const leadership = [
    {
      name: "Rajesh Kumar",
      role: "Co-Founder & CEO",
      description: "Built charging infrastructure across 90+ locations in South India.",
      image: "/images/team/leader1.jpg",
      linkedin: "#",
    },
    {
      name: "Priya Sharma",
      role: "Head of Engineering",
      description: "Designed thermal management systems for 50kW+ DC fast chargers.",
      image: "/images/team/leader2.jpg",
      linkedin: "#",
    },
    {
      name: "Arjun Menon",
      role: "VP of Operations",
      description: "Manages field deployment across 6 states with 99.5% uptime.",
      image: "/images/team/leader3. jpg",
      linkedin: "#",
    },
    {
      name: "Sneha Reddy",
      role: "Head of Product",
      description: "Led development of our cloud-native CMS platform from scratch.",
      image: "/images/team/leader4.jpg",
      linkedin: "#",
    },
  ];

  const culturePoints = [
    {
      title: "We build chargers that actually last",
      description: "Field-tested in 45°C heat and monsoon rains.",
      className: "md:col-span-2",
    },
    {
      title: "We experiment every week",
      description: "New prototypes, new tests, new learnings.",
      className: "md:col-span-1",
    },
    {
      title: "Fast prototypes → Field testing → Deploy",
      description: "From idea to installation in weeks, not months.",
      className: "md:col-span-1",
    },
    {
      title: "Documentation over meetings",
      description: "Write it down.  Keep it simple. Move fast.",
      className: "md:col-span-2",
    },
    {
      title: "Hardware + Cloud = Our playground",
      description: "We solder boards and write APIs in the same day.",
      className: "md:col-span-1",
    },
    {
      title: "Real customer calls > guesswork",
      description: "Every feature comes from actual user feedback.",
      className: "md:col-span-2",
    },
    {
      title: "We don't launch features we wouldn't use",
      description: "If we wouldn't trust it, we don't ship it.",
      className: "md:col-span-1",
    },
  ];

  const extendedTeam = [
    {
      name: "Vikram Patel",
      role: "Hardware Engineer",
      achievement: "Designed our thermal management for Gen-2 chargers.",
      image: "/images/team/member1.jpg",
    },
    {
      name: "Ananya Iyer",
      role: "Embedded Systems Lead",
      achievement: "Built our OCPP 2.0. 1 stack from the ground up.",
      image: "/images/team/member2.jpg",
    },
    {
      name: "Karthik Nair",
      role: "Cloud Architect",
      achievement: "Scaled our CMS to handle 10,000+ concurrent sessions.",
      image: "/images/team/member3.jpg",
    },
    {
      name: "Meera Krishnan",
      role: "UI/UX Designer",
      achievement: "Redesigned our operator dashboard for sub-2-second load times.",
      image: "/images/team/member4.jpg",
    },
    {
      name: "Suresh Babu",
      role: "Field Deployment Manager",
      achievement: "Runs our field test pipeline across Kerala & Tamil Nadu.",
      image: "/images/team/member5.jpg",
    },
    {
      name: "Divya Rao",
      role: "Customer Success Lead",
      achievement: "Achieved 4.8/5 customer satisfaction across 50+ enterprise clients.",
      image: "/images/team/member6.jpg",
    },
  ];

  const workPrinciples = [
    {
      title: "We test everything outdoors first",
      description: "Every charger goes through real-world conditions before deployment.",
    },
    {
      title: "We build our tools ourselves",
      description: "Custom test rigs, monitoring dashboards, deployment scripts.",
    },
    {
      title: "If something fails, we fix it by evening",
      description: "24/7 NOC.  Real-time alerts.  Immediate action.",
    },
    {
      title: "We care about uptime more than marketing",
      description: "99.5% SLA isn't a promise. It's our minimum standard.",
    },
    {
      title: "We write code and solder boards in the same week",
      description: "Full-stack means hardware to cloud.  No silos.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section - Spotlight */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
        {/* Spotlight effect */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#00FF66]/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#00FF66]/20 backdrop-blur-sm rounded-full border border-[#00FF66]/30 mb-6"
            >
              <div className="w-2 h-2 bg-[#00FF66] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white">Our Team</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              The Team Behind
              <br />
              <span className="text-[#00FF66]">SIRIEM</span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Engineers, designers, and problem-solvers working to make EV charging effortless in India.
            </p>

            <a
              href="/company/careers"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00FF66] text-black font-semibold rounded-md hover:shadow-lg hover:shadow-[#00FF66]/50 transition-all duration-300 hover:scale-105 group"
            >
              Work With Us
              <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Leadership Grid - Wavy Background */}
      <section className="relative py-20 bg-gradient-to-b from-[#D1FAE5] to-white overflow-hidden">
        {/* Wavy SVG Background */}
        <div className="absolute inset-0 opacity-30">
          <svg className="absolute bottom-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#00FF66" fillOpacity="0.1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <div className="h-0.5 w-16 mx-auto mb-6" style={{ background: "#00FF66" }} />
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
              Leadership
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, idx) => (
              <motion. div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-200 hover:border-[#00FF66]"
              >
                <div className="aspect-square bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
                  <div className="text-6xl font-black text-neutral-300">{leader.name. charAt(0)}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-1">{leader.name}</h3>
                  <p className="text-sm font-semibold text-[#00FF66] mb-3">{leader.role}</p>
                  <p className="text-sm text-neutral-600 mb-4">{leader.description}</p>
                  <a
                    href={leader.linkedin}
                    className="inline-flex items-center gap-2 text-neutral-400 hover:text-[#00FF66] transition-colors duration-200"
                  >
                    <IconBrandLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture in 8 Frames - Bento Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <div className="h-0.5 w-16 mx-auto mb-6" style={{ background: "#00FF66" }} />
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
              How We Work
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {culturePoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={cn(
                  "bg-gradient-to-br from-[#D1FAE5] to-white rounded-2xl p-8 border border-[#00FF66]/20 hover:border-[#00FF66] transition-all duration-300",
                  point.className
                )}
              >
                <h3 className="text-xl font-bold text-black mb-3">{point.title}</h3>
                <p className="text-neutral-600">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Team - Wavy Background */}
      <section className="relative py-20 bg-gradient-to-b from-white to-[#D1FAE5] overflow-hidden">
        {/* Wavy SVG Background */}
        <div className="absolute inset-0 opacity-30">
          <svg className="absolute top-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#00FF66" fillOpacity="0.1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <div className="h-0.5 w-16 mx-auto mb-6" style={{ background: "#00FF66" }} />
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
              The Team
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extendedTeam.map((member, idx) => (
              <CardSpotlight key={idx} className="h-full" backgroundColor="#FFFFFF">
                <div className="aspect-square bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-6xl font-black text-neutral-300">{member.name.charAt(0)}</div>
                </div>
                <h3 className="text-xl font-bold text-black mb-1">{member.name}</h3>
                <p className="text-sm font-semibold text-[#00FF66] mb-3">{member.role}</p>
                <p className="text-sm text-neutral-600">{member.achievement}</p>
              </CardSpotlight>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work - Sticky Scroll Style */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <div className="h-0.5 w-16 mx-auto mb-6" style={{ background: "#00FF66" }} />
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
              Our Principles
            </h2>
          </div>

          <div className="space-y-8">
            {workPrinciples.map((principle, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="border-l-4 border-[#00FF66] pl-8 py-4"
              >
                <h3 className="text-2xl font-bold text-black mb-2">{principle.title}</h3>
                <p className="text-lg text-neutral-600">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at SIRIEM - Marquee Style */}
      <section className="relative py-20 bg-gradient-to-b from-[#D1FAE5] to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <div className="h-0.5 w-16 mx-auto mb-6" style={{ background: "#00FF66" }} />
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
              Life at SIRIEM
            </h2>
          </div>

          {/* Placeholder for office/field images */}
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {[1, 2, 3, 4, 5, 6]. map((num) => (
              <div
                key={num}
                className="flex-shrink-0 w-80 h-64 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl flex items-center justify-center border-2 border-[#00FF66]/20"
              >
                <p className="text-neutral-400 font-semibold">Office Photo {num}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 leading-tight">
              We're building the EV backbone of India —{" "}
              <span className="text-[#00FF66]">one reliable charger at a time</span>
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Every improvement we make is driven by real data, real customers, and real field experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="relative py-32 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00FF66]/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8">
            Want to Help Build
            <br />
            <span className="text-[#00FF66]">the Future? </span>
          </h2>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/company/careers"
              className="px-8 py-4 bg-[#00FF66] text-black font-semibold rounded-md hover:shadow-lg hover:shadow-[#00FF66]/50 transition-all duration-300 hover:scale-105"
            >
              Open Roles
            </a>
            <a
              href="/company/careers#internships"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-md hover:border-[#00FF66] hover:bg-[#00FF66]/10 transition-all duration-300"
            >
              Internships
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
              <p className="text-sm text-neutral-600">Enterprise EV charging for fleets, operators, and OEMs. </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3 text-sm">Products</h5>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li><a href="/products/ac-chargers" className="hover:text-black transition">AC Chargers</a></li>
                <li><a href="/products/dc-chargers" className="hover:text-black transition">DC Chargers</a></li>
                <li><a href="/products/charging-management-system" className="hover:text-black transition">CMS</a></li>
                <li><a href="/products/onboard-chargers" className="hover:text-black transition">Onboard Chargers</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3 text-sm">Company</h5>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li><a href="/company/about-us" className="hover:text-black transition">About</a></li>
                <li><a href="/company/team" className="hover:text-black transition">Team</a></li>
                <li><a href="/company/contact-us" className="hover:text-black transition">Contact</a></li>
                <li><a href="/company/careers" className="hover:text-black transition">Careers</a></li>
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
    </main>
  );
};

export default Team;