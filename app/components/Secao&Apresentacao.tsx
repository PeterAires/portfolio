import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

const SecaoEApresentacao = () => {
  gsap.registerPlugin(ScrollTrigger);

  // Efeito para o primeiro texto
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
  }, []);
  // Efeito para o texto "Apresentando"
  useLayoutEffect(() => {
    gsap.fromTo(
      ".textoApresentando",
      {
        y: -100, // Começa 100px abaixo
        opacity: 0,
      },
      {
        y: 0, // Volta à posição original
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".textoApresentando",
          start: "top 80%", // Ativa quando o topo da seção chega a 80% da tela
          end: "top 20%", // Termina quando o topo está no meio da tela
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  // Efeito para a animação do "explorar"
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
  }, []); // Adicionar dependência vazia

  return (
    <div className="relative w-full h-screen over over">
      {/* Vídeo de fundo */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover "
      >
        <source src="/animacao_video.mp4" type="video/mp4" />
      </video>

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Texto Inicial */}
      <span className="textoInicial flex items-center justify-center h-screen bg-transparent">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-transparent font-bold" style={{ color: "rgb(var(--texto-inicial))" }}>
          Bem-Vindo!
        </h1>
      </span>

      {/* Linha Branca */}
      <div
        className="w-full h-[2px] mt-2"
        style={{
          backgroundColor: ` rgb(var(--borda-invertida)) `,
        }}
      ></div>

      {/* Apresentação */}
      <div className="flex items-center justify-center text-center mt-32 ">
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
    </div>
  );
};

export default SecaoEApresentacao;
