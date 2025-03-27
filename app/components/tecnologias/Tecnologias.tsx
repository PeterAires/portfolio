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
      ".tecnologias",
      {
        opacity: 0.8,
      },
      {
        opacity: 1,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }
    );
  });

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
          markers: false,
        },
      }
    );
  });

  return (
    <div className="mt-72">
      <div>
        <div className="flex justify-center">
          <h1 className="tecnologias text-3xl  font-black">Tecnologidas</h1>
        </div>
      </div>
      <div className="tecnologiasImage mt-20 justify-center ">
        <p className=" justify-center flex font-medium text-zinc-500">
          Tente clicar...
        </p>
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
    </div>
  );
};
