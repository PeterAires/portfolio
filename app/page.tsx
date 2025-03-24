"use client";

import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import foto_de_perfil_profissional from "./public/foto_de_perfil_profissional.jpg";
import { Tecnologias } from "./components/tecnologias/Tecnologias";
import Projetos from "./components/Projetos";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    gsap.fromTo(
      ".textoInicial",
      {
        x: "-100%",
        opacity: "0.3",
      },
      {
        fontSize: "30px",
        x: "0px",
        opacity: "1",
        duration: 1,
      }
    );
  });

  useLayoutEffect(() => {
    gsap.fromTo(
      ".textoApresentando",
      {
        opacity: "0.1",
      },
      {
        opacity: "1",
        paddingBottom: "2px",
        scrollTrigger: {
          trigger: ".textoApresentando",
          start: "top 800px",
          end: "bottom 500px",
          scrub: true,
          markers: false,
        },
      }
    );
  });

  useLayoutEffect(() => {
    gsap.fromTo(
      ".explorar",
      {
        color: "red",
        opacity: "0.5",
      },
      {
        color: "yellow",
        opacity: "1",
        duration: 3,
        repeat: -1, 
        yoyo: true, 
        ease: "power1.inOut", 
      
      }
    );
  });

  useLayoutEffect(() => {
    gsap.fromTo(
      ".sobreMim",
      {
        opacity: "0.1",
        x: "100%",
      },
      {
        opacity: "1",
        x: "0px",
        paddingBottom: "2px",
        scrollTrigger: {
          trigger: ".sobreMim",
          start: "top 800px",
          end: "bottom 500px",
          scrub: true,
          markers: false,
        },
      }
    );
  });
  useLayoutEffect(() => {
    gsap.fromTo(
      ".sobreMimText",
      {
        opacity: "0.1",
        x: "-100%",
      },
      {
        opacity: "1",
        x: "0px",
        paddingBottom: "2px",
        scrollTrigger: {
          trigger: ".sobreMimText",
          start: "top 700px",
          end: "bottom 600px",
          scrub: true,
          markers: false,
        },
      }
    );
  });
  useLayoutEffect(() => {
    gsap.fromTo(
      ".sobreMimImage",
      {
        opacity: "0.1",
        x: "100%",
      },
      {
        opacity: "1",
        x: "0px",
        paddingBottom: "2px",
        scrollTrigger: {
          trigger: ".sobreMimText",
          start: "top 900px",
          end: "bottom 900px",
          scrub: true,
          markers: false,
        },
      }
    );
  });

  useLayoutEffect(() => {
    gsap.fromTo(
      ".tecnologias",
      {
        opacity: 0.8
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

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-30">
      {/* Seção Inicial */}
      <div className="textoInicial flex items-center justify-center h-screen">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Bem-Vindo!
        </h1>
      </div>

      {/* Apresentação */}
      <div className="flex items-center justify-center text-center">
        <div className="textoApresentando">
          <h1 className="text-xl sm:text-2xl md:text-3xl">
            Olá, eu me chamo Peter
          </h1>
          <h1 className="text-xl sm:text-2xl md:text-3xl">
            Atualmente Desenvolvedor Front-End Junior
          </h1>
          <h1 className="text-xl sm:text-2xl md:text-3xl">
            Esse é o meu Portfólio, sinta-se livre para{" "}
            <strong className="explorar text-yellow-200">Explorar</strong>
          </h1>
        </div>
      </div>

      {/* Sobre Mim */}
      <div id="sobre" className="sobreMim text-center lg:text-center mt-96">
        <strong className="text-2xl sm:text-3xl">Sobre mim</strong>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-28 ">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-11 mt-10 lg:mt-20 text-center lg:text-left">
          <p className="sobreMimText max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At incidunt
            nostrum tenetur possimus! Quaerat nam nulla dignissimos deleniti
            odio vero aspernatur voluptate. Doloribus, pariatur. Assumenda vero
            similique optio praesentium repellat? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Temporibus dignissimos rem nostrum
            ullam animi praesentium officiis doloribus, nemo ducimus iste
            quibusdam reprehenderit vero? Aut impedit ipsa eveniet vitae debitis
            reprehenderit.
          </p>
          <Image
            className="sobreMimImage rounded-lg max-w-full h-auto"
            src={foto_de_perfil_profissional}
            width={300}
            height={100}
            alt="Foto de perfil profissional"
          />
        </div>
      </div>
      <div className="flex justify-center mt-52">
        <h1 className="tecnologias text-3xl  font-black">
          Tecnologias
        </h1>
      </div>
      <Tecnologias />
      <div className="flex justify-center mt-52">

        
        <Projetos/>
      </div>
    </div>
  );
}
