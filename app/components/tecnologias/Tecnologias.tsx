import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Vite from "./_components/Vite";
import Html from "./_components/Html";
import Node from "./_components/Node";
import ReactImage from "./_components/React";
import PrismaImage from "./_components/Prisma";
import TypeScriptIcon from "./_components/Typescript";
import ReactNativeImage from "./_components/React_Native";
import NextLogo from "./_components/Next";

export const Tecnologias = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.fromTo(
      ".pulse",
      { opacity: 0, scale: 0.5 }, // Começa pequeno e invisível
      {
        opacity: 1,
        scale: 1,
        duration: 1,

        stagger: 0.1, // Faz os elementos surgirem em sequência
        scrollTrigger: {
          trigger: ".pulse-container",
          start: "top 85%",
          end: "bottom 70%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div  id="tecnologias" className="mt-72 pulse-container">
      {/* Título */}
      <div className="flex justify-center">
        <h1 className="pulse text-3xl font-black">Tecnologias</h1>
      </div>

      {/* Subtítulo */}
      <div className="mt-10">
        <p className="pulse justify-center flex font-medium text-zinc-500">
          Tente clicar...
        </p>
      </div>

      {/* Ícones das Tecnologias */}
      <div className="pulse mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 justify-items-center">
        <Vite />
        <Html />
        <Node />
        <ReactImage />
        <PrismaImage />
        <TypeScriptIcon />
        <ReactNativeImage />
        <NextLogo/>
      </div>
    </div>
  );
};
