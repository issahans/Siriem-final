"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

interface BentoGridShowcaseProps {
  integrations: React.ReactNode;
  featureTags: React.ReactNode;
  mainFeature: React.ReactNode;
  secondaryFeature: React.ReactNode;
  statistic: React.ReactNode;
  journey: React.ReactNode;
  sustainability: React.ReactNode;
  globalReach: React.ReactNode;
  className?: string;
}

export const BentoGridShowcase = ({
  integrations,
  featureTags,
  mainFeature,
  secondaryFeature,
  statistic,
  journey,
  sustainability,
  globalReach,
  className,
}: BentoGridShowcaseProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "grid w-full grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 lg:gap-6",
        // Force minimum row height to ensure boxes look substantial
        "auto-rows-[minmax(180px,auto)] md:auto-rows-[minmax(240px,auto)]",
        className
      )}
    >
      {/* --- ROW 1 --- */}
      {/* 1. Top Left: Integrations */}
      <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1">
        {integrations}
      </motion.div>

      {/* 2. Top Center: Main Feature (Big Box) */}
      {/* Spans 2 cols and 2 rows */}
      <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2">
        {mainFeature}
      </motion.div>

      {/* 3. Top Right: Feature Tags */}
      <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1">
        {featureTags}
      </motion.div>

      {/* --- ROW 2 --- */}
      {/* 4. Middle Left: Secondary Feature */}
      <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1">
        {secondaryFeature}
      </motion.div>

      {/* (Main Feature occupies middle center slots) */}

      {/* 5. Middle Right: Statistic */}
      <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1">
        {statistic}
      </motion.div>

      {/* --- ROW 3 --- */}
      {/* 6. Bottom Left: Journey */}
      <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1">
        {journey}
      </motion.div>

      {/* 7. Bottom Center: Sustainability (Wide) */}
      <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-1">
        {sustainability}
      </motion.div>

      {/* 8. Bottom Right: Global Reach */}
      <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1">
        {globalReach}
      </motion.div>
    </motion.section>
  );
};