"use client";

import { useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DottedMap from "dotted-map";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
  dotColor?: string; // New Prop
}

export default function WorldMap({
  dots = [],
  lineColor = "#00FF66",
  dotColor = "#9CA3AF60", // Default grey for light backgrounds
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredPoint, setHoveredPoint] = useState<{ x: number; y: number; label: string } | null>(null);

  const svgMap = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    return map.getSVG({
      radius: 0.22,
      color: dotColor, // Use the prop
      shape: "circle",
      backgroundColor: "transparent",
    });
  }, [dotColor]);

  // ... (Rest of the component logic remains the same)
  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full aspect-[2/1] bg-transparent rounded-lg relative font-sans">
      <AnimatePresence>
        {hoveredPoint && (
          <div
            className="absolute z-50 pointer-events-none flex flex-col items-center justify-end"
            style={{
              left: `${(hoveredPoint.x / 800) * 100}%`,
              top: `${(hoveredPoint.y / 400) * 100}%`,
              transform: "translate(-50%, -100%)",
              paddingBottom: "10px",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 5, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex flex-col items-center"
            >
              <div className="px-3 py-1.5 bg-black/90 backdrop-blur-md text-white text-xs font-bold rounded-lg shadow-xl border border-white/10 whitespace-nowrap relative z-10">
                {hoveredPoint.label}
              </div>
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-black/90 -mt-[1px]" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />

      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          const pathD = createCurvedPath(startPoint, endPoint);

          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={pathD}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
                opacity="0.4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 * i, ease: "easeOut" }}
              />
              <motion.path
                d={pathD}
                fill="none"
                stroke={lineColor}
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, pathOffset: 0 }}
                animate={{ pathLength: [0, 0.3], pathOffset: [0, 1] }}
                transition={{ duration: 2, delay: 0.5 * i, repeat: Infinity, ease: "linear", repeatDelay: 0 }}
                style={{ filter: "drop-shadow(0 0 4px rgba(0, 255, 102, 0.8))" }}
              />
            </g>
          );
        })}

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);

          return (
            <g key={`points-group-${i}`} className="pointer-events-auto">
              <g 
                className="cursor-pointer hover:opacity-100 transition-opacity"
                onMouseEnter={() => dot.start.label && setHoveredPoint({ ...startPoint, label: dot.start.label })}
                onMouseLeave={() => setHoveredPoint(null)}
              >
                <circle cx={startPoint.x} cy={startPoint.y} r="3" fill={lineColor} filter="url(#glow)" />
                <circle cx={startPoint.x} cy={startPoint.y} r="12" fill="transparent" /> 
                <circle cx={startPoint.x} cy={startPoint.y} r="3" fill={lineColor} opacity="0.5">
                  <animate attributeName="r" from="3" to="10" dur="1.5s" begin="0s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
                </circle>
              </g>

              <g 
                className="cursor-pointer hover:opacity-100 transition-opacity"
                onMouseEnter={() => dot.end.label && setHoveredPoint({ ...endPoint, label: dot.end.label })}
                onMouseLeave={() => setHoveredPoint(null)}
              >
                <circle cx={endPoint.x} cy={endPoint.y} r="3" fill={lineColor} filter="url(#glow)" />
                <circle cx={endPoint.x} cy={endPoint.y} r="12" fill="transparent" /> 
                <circle cx={endPoint.x} cy={endPoint.y} r="3" fill={lineColor} opacity="0.5">
                  <animate attributeName="r" from="3" to="10" dur="1.5s" begin="0s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
                </circle>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}