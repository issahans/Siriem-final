"use client";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { useSpring } from "framer-motion";

export const World = ({
  globeConfig,
  data,
}: {
  globeConfig: any;
  data: any[];
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const rotation = useSpring(0);

  useEffect(() => {
    let phi = 0;
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef. current.offsetWidth;
      }
    };

    window. addEventListener("resize", onResize);
    onResize();

    if (! canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 0,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      markerColor: [0, 1, 0.41], // Green color #00FF66
      glowColor: [0.5, 0.5, 0.5],
      markers: data.map((arc) => ({
        location: [arc.startLat, arc.startLng],
        size: 0.05,
      })),
      onRender: (state) => {
        if (! pointerInteracting.current) {
          phi += 0.005;
        }
        state.phi = phi + rotation.get();
        state. width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    }, 0);

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [data, rotation]);

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grabbing";
          }
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef. current) {
            canvasRef.current.style.cursor = "grab";
          }
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grab";
          }
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            rotation.set(delta / 200);
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting. current !== null && e.targetTouches[0]) {
            const delta = e. targetTouches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            rotation.set(delta / 100);
          }
        }}
        className="w-full h-full cursor-grab opacity-0 transition-opacity duration-500"
        style={{
          aspectRatio: "1",
        }}
      />
    </div>
  );
};