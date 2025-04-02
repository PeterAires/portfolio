"use client";

import { useEffect, useRef } from "react";
import { toast } from "sonner";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contato() {
  const contatosRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return; // Evita erros no SSR

    const contatos = contatosRef.current;
    if (!contatos) return;

    // Animação de scroll para os cards
    gsap.fromTo(
      contatos.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          scrub: true,
          trigger: contatos,
          start: "top 80%",
          end: "top 50%",
        },
      }
    );

    // Animação "vai e volta" ao passar o mouse
    Array.from(contatos.children).forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power1.out" });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: "power1.inOut" });
      });
    });
  }, []);

  const copiarParaAreaDeTransferencia = (texto: string) => {
    navigator.clipboard.writeText(texto);
    toast("Copiado com Sucesso!");
  };

  const contatos = [
    {
      id: 1,
      titulo: "E-mail",
      info: "peteraires0201@gmail.com",
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 5h18c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2zm0 2v10h18V7l-9 5.25L3 7z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      id: 2,
      titulo: "Telefone",
      info: "(31) 98436-3365 ",
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.6 10.8a14.7 14.7 0 006.6 6.6l2.2-2.2a1 1 0 011.2-.2 10.4 10.4 0 003.2.6 1 1 0 011 1v3.5a1 1 0 01-1 1A19.8 19.8 0 012 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.1.2 2.2.6 3.2a1 1 0 01-.2 1.2l-2.3 2.4z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      id: 3,
      titulo: (
        <a target="_blank" href="https://github.com/PeterAires">
          GitHub
        </a>
      ),
      info: (
        <a target="_blank" href="https://github.com/PeterAires">
          github.com/PeterAires
        </a>
      ),
      icon: (
        <a href="https://github.com/PeterAires" target="_blank">
          <svg
            width="30"
            height="30"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </a>
      ),
    },
  ];

  return (
    <div
      ref={contatosRef}
      className="mt-[300px] flex flex-col items-center gap-8 px-6 md:px-12"
    >
      <strong className="text-2xl sm:text-3xl font-extralight">Contato</strong>
      {contatos.map(({ id, titulo, info, icon }) => (
        <div
          key={id}
          className="flex items-center gap-5 w-full max-w-md md:max-w-lg bg-gray-900 p-4 rounded-xl shadow-md cursor-pointer hover:bg-gray-700 transition"
          onClick={() =>
            copiarParaAreaDeTransferencia(typeof info === "string" ? info : "")
          }
        >
          <div className="text-white">{icon}</div>
          <div className="flex flex-col text-white">
            <h2 className="font-bold">{titulo}</h2>
            <p className="text-sm">{info}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
