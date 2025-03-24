import { useLayoutEffect } from "react";
import { gsap } from "gsap";

import Vite from "./_components/Vite";
import Html from "./_components/Html";
import Node from "./_components/Node";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactImage from "./_components/React";
import PrismaImage from "./_components/Prisma";
import TypeScriptIcon from "./_components/Typescript";
import ReactNativeImage from "./_components/React_Native";

export const Tecnologias = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.fromTo(
      ".tecnologiasImage",
      {
        opacity: "0.1",
        y: "500px",
      },
      {
        opacity: "1",
        y: "0px",

        backgroundColor: "2px",
        scrollTrigger: {
          trigger: ".tecnologias",
          start: "top 700px",
          end: "bottom 400px",
          scrub: true,
          markers: true,
        },
      }
    );
  });

  return (
    <div className="tecnologiasImage mt-20 justify-center ">
      <p className=" justify-center flex font-medium text-zinc-500">Tente clicar...</p>
      <div className="flex justify-center mt-4">
        <Vite />
        <Html />
        <Node />
        <ReactImage />
        <PrismaImage />
        <TypeScriptIcon />
        <ReactNativeImage />
      </div>
     
    </div>
  );
};
