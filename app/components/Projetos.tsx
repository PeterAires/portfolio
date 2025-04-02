import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import fswBarber from "../public/projects/fsw_barber.png";
import Image from "next/image";

const Projetos = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    // Animação do título "Projetos" para crescer ao rolar a página
    gsap.fromTo(
      ".titulo-projetos", // Alvo da animação
      { scale: 0.5, opacity: 0 }, // Começa pequeno e invisível
      {
        scale: 1, // Cresce até o tamanho normal
        opacity: 1, // Fica visível
        duration: 1, // Duração da animação
        ease: "power3.out", // Efeito suave
        scrollTrigger: {
          trigger: ".titulo-projetos", // Quando o título entra na tela
          start: "top 80%", // Inicia quando o título entra em 80% da tela
          end: "bottom top",
          scrub: true, // Sincroniza com a rolagem
          markers: false, // Remove os marcadores de scroll
        },
      }
    );
  }, []);
  useLayoutEffect(() => {
    // Animação do título "Projetos" para crescer ao rolar a página
    gsap.fromTo(
      ".carrosel", // Alvo da animação
      { opacity: 0 }, // Começa pequeno e invisível
      {
        opacity: 1, // Fica visível
        duration: 1, // Duração da animação
        ease: "power3.out", // Efeito suave
        scrollTrigger: {
          trigger: ".carrosel", // Quando o título entra na tela
          start: "top 80%", // Inicia quando o título entra em 80% da tela
          end: "bottom 80%",
          scrub: true, // Sincroniza com a rolagem
          markers: false, // Remove os marcadores de scroll
        },
      }
    );
  }, []);

  return (
    <div id="projetos" className="mt-32">
      <div className="mb-32">
        <h1 className="titulo-projetos text-3xl font-black justify-center flex">
          Projetos
        </h1>
      </div>

      {/* Conteúdo da seção */}
      <div className="carrosel relative">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="carousel-item flex justify-center">
              Full-Stack-Barbearia
              <Image src={fswBarber} width={300} height={100} alt="fswBarber" />
            </CarouselItem>
            <CarouselItem className="carousel-item">...</CarouselItem>
            <CarouselItem className="carousel-item">...</CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="bg-transparent" />
          <CarouselNext className="bg-transparent" />
        </Carousel>
      </div>
    </div>
  );
};

export default Projetos;
