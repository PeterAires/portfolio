import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import Vite from "./components/Vite";
import Html from "./components/Html";
import Node from "./components/Node";
export const Tecnologias = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    animationRef.current = gsap.to(container, {
      x: window.innerWidth,
      duration: 30,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  const handleMouseEnter = () => {
    animationRef.current?.pause();
  };

  const handleMouseLeave = () => {
    animationRef.current?.resume();
  };

  return (
    <div
      ref={containerRef}
      className=" inline-flex mt-20 h-20 gap-x-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Vite />
      <Html />
      <Node />
    </div>
  );
};
