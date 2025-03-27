import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import foto_de_perfil_profissional from "../public/foto_de_perfil_profissional.jpg";

function SobreMim() {
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

  return (
    <div className="mt-96">
      <div id="sobre" className="sobreMim text-center lg:text-center  ">
        <strong className="text-2xl sm:text-3xl">Sobre mim</strong>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-10 ">
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
    </div>
  );
}

export default SobreMim;
