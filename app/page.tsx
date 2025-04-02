"use client";
import { Tecnologias } from "./components/tecnologias/Tecnologias";
import Projetos from "./components/Projetos";
import SecaoEApresentacao from "./components/Secao&Apresentacao";
import SobreMim from "./components/SobreMim";
import Contato from "./components/Contato";

export default function Home() {
  return (
    <div>
      {/* Seção inicial e Apresentação */}
      {/* coloco um px diferente pro video */}
      <div className="mx-[-4px] sm:mx-[-8px] md:mx-[-16px] lg:mx-[-30px]">
        <SecaoEApresentacao />
      </div>
      <div className="px-4 sm:px-8 md:px-16 lg:px-30 mt24">
        {/* Sobre Mim */}
        <SobreMim />
        {/* Tecnologias */}
        <Tecnologias />
        <div className="flex justify-center mt-52">
          {/* Projetos */}
          <Projetos />
        </div>
        <Contato/>
      </div>
      <div className="flex justify-center items-center mt-20">
        <p className="gont font-extralight text-zinc-500">Espero que tenha gostado, sinta-se livre para dar sugestões...</p>
        </div>
      </div>
  );
}
