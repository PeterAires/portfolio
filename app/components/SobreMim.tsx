import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import foto_de_perfil_profissional from "../public/foto_de_perfil_profissional.jpg";

function SobreMim() {
  useLayoutEffect(() => {
    gsap.fromTo(
      ".sobreMim",
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".sobreMim",
          start: "top 90%",
          end: "top 60%",
          scrub: 0.5,
        },
      }
    );
  }, []);

  useLayoutEffect(() => {
    gsap.fromTo(
      ".sobreMimText",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".sobreMimText",
          start: "top 95%",
          end: "top 65%",
          scrub: 0.5,
        },
      }
    );
  }, []);

  useLayoutEffect(() => {
    gsap.fromTo(
      ".sobreMimImage",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".sobreMimText",
          start: "top 90%",
          end: "top 60%",
          scrub: 0.5,
        },
      }
    );
  }, []);

  return (
    <div className="mt-[700px] overflow-hidden">
      <div id="sobre" className="sobreMim text-center">
        <strong className="text-2xl sm:text-3xl">Sobre mim</strong>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-10">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-11 mt-10 lg:mt-20 text-center lg:text-left">
          <p className="sobreMimText max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
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
    </div>
  );
}

export default SobreMim;
