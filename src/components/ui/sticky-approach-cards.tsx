"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface ApproachCard {
  title: string;
  description: string;
  steps: string[];
  imageUrl: string;
  icon: React.ReactNode;
  bgColor: string;
}

interface StickyApproachCardsProps {
  cards: ApproachCard[];
}

const Card = ({
  card,
  index,
  total,
}: {
  card: ApproachCard;
  index: number;
  total: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  const { scrollYProgress: exitProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  
  const scale = useTransform(exitProgress, [0, 1], [1, 0.95]);
  const brightness = useTransform(exitProgress, [0, 1], [1, 0.8]);

  return (
    <div
      ref={containerRef}
      className="sticky flex flex-col justify-center"
      style={{
        top: 120 + index * 20, 
        height: '80vh', 
        marginBottom: '0vh', 
        zIndex: index,
      }}
    >
      <motion.div
        style={{
          opacity,
          y,
          scale,
          filter: `brightness(${brightness})`,
          transformOrigin: 'top center',
        }}
        className={`relative grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-8 md:p-12 rounded-3xl shadow-2xl border border-black/5 overflow-hidden ${card.bgColor}`}
      >
        <div className="relative z-10 flex flex-col justify-center order-2 md:order-1">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#00FF66] mb-6 shadow-md">
            <div className="text-black scale-110">{card.icon}</div>
          </div>

          <h3 className="text-2xl md:text-4xl font-black mb-4 text-black tracking-tight leading-tight">
            {card.title}
          </h3>
          <p className="text-neutral-700 mb-8 text-lg font-medium leading-relaxed">
            {card.description}
          </p>

          <ul className="space-y-3">
            {card.steps.map((step, stepIdx) => (
              <li key={stepIdx} className="flex items-start gap-3">
                <div className="mt-1">
                  <CheckCircle2 
                    className="w-5 h-5" 
                    style={{ color: "#00FF66" }} 
                    strokeWidth={2.5} 
                  />
                </div>
                <span className="text-neutral-800 text-base font-semibold">
                  {step}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative h-64 md:h-full min-h-[300px] rounded-2xl overflow-hidden shadow-sm order-1 md:order-2 border border-black/5">
           <img
            src={card.imageUrl}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80";
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

const useScrollAnimation = () => {
  const [inView, setInView] = React.useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, inView] as const;
};

const AnimatedHeader = () => {
  const [headerRef, headerInView] = useScrollAnimation();
  const [pRef, pInView] = useScrollAnimation();

  return (
    <div className="text-center max-w-4xl mx-auto mb-8">
      <div className="h-0.5 w-16 mx-auto mb-6" style={{ background: "#00FF66" }} />
      <h2 
        ref={headerRef}
        className={`text-4xl md:text-5xl font-black transition-all duration-700 ease-out text-black ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        Our Approach
      </h2>
      <p 
        ref={pRef}
        className={`text-lg text-neutral-600 mt-4 transition-all duration-700 ease-out delay-200 ${pInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        Pragmatic engineering, systems thinking, and operational excellence for
        end-to-end EV charging rollouts.
      </p>
    </div>
  );
};

export function StickyApproachCards({ cards }: StickyApproachCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // FADE FIX: 
  // Trigger fade out ONLY in the final 15% of scroll (0.85 -> 1).
  // The 'spacer' below ensures we have enough scroll distance after the last card 
  // is placed to perform this fade smoothly.
  const opacity = useTransform(scrollYProgress, [0.85, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.85, 1], [1, 0.95]);

  return (
    <div className="bg-white font-sans relative z-10">
      <div className="px-[5%]">
        <div className="max-w-7xl mx-auto">
          <motion.section 
            ref={containerRef}
            style={{ opacity, scale }}
            className="pt-12 pb-0 md:pt-20 flex flex-col items-center"
          >
            <AnimatedHeader />

            <div className="w-full relative">
              {cards.map((card, index) => (
                <Card 
                  key={index} 
                  card={card} 
                  index={index} 
                  total={cards.length} 
                />
              ))}
              {/* SPACER: This 50vh buffer ensures the 4th card stays visible 
                  and stuck for a moment before the section fades out. */}
              <div className="h-[50vh] w-full" />
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}