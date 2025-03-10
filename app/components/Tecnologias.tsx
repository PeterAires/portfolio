import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Card } from "./ui/card";
import Vite from "../public/vite.svg";
import Html from "../public/html5.svg";
import Node from "../public/node.svg";
import { AlertCircleIcon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@radix-ui/react-alert-dialog";

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
      onRepeat: () => {
        gsap.set(container, { x: "-100%" }); // Agora não retorna nada
      },
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
      className="models_content inline-flex mt-20 h-40 gap-x-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card2 bg-transparent border-black w-32 items-center">
        <Image src={Vite} width={100} height={100} alt="" />
      </div>

      <Card className="card3 bg-transparent border-black w-32">
        <Image src={Html} width={100} height={100} alt="" />
      </Card>

      <Card className="card4 bg-transparent border-black w-32">
        <Image src={Node} width={100} height={100} alt="" />
      </Card>
    </div>
  );
};
