"use client"; // Isso precisa estar aqui

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@/app/components/ui/switch";

function Rodape() {
  const {  setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Para evitar erros de SSR
  if (!mounted) return null;

  return (
    <div className="fixed left-0 w-full pt-2 px-4 shadow-md z-50 bg-inherit text-foreground">
      <div className="flex justify-between items-center">
        <div className="flex gap-6 md:gap-10 items-center">
          <a href="#sobre" className="xl:text-2xl md:text-xl text-sm">Sobre mim</a>
          <a href="#tecnologias" className="xl:text-2xl md:text-xl text-sm">Tecnologias</a>
          <a href="#projetos" className="xl:text-2xl md:text-xl text-sm">Projetos</a>
          <a href="#contato" className="xl:text-2xl md:text-xl text-sm">Contato</a>
        </div>
        <div className="mt-1">
          <Switch 
            checked={resolvedTheme === "dark"} 
            onCheckedChange={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} 
          />
        </div>
      </div>
      <hr className="border-t border-border my-3" />
    </div>
  );
}

export default Rodape;
