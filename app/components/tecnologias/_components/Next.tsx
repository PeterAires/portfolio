import Image from "next/image";
import NextLogoImage from "../../../public/next_logo.svg";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../../ui/dialog";

const NextLogo = () => {
  return (
    <Dialog>
      <DialogTrigger className="card2 w-32 items-center">
        <Image
          src={NextLogoImage}
          width={100}
          height={100}
          alt=""
          className="bg-white rounded-full"
        />
      </DialogTrigger>
      <DialogContent className="bg-transparent">
        <DialogHeader className="bg-transparent">
          <DialogTitle className="bg-transparent">Next.js</DialogTitle>
          <DialogDescription className="bg-transparent text-white">
            Next.js é um framework React que permite criar aplicações rápidas e
            otimizadas, com renderização híbrida (SSR e SSG), roteamento
            simplificado e suporte nativo a APIs. Ideal para projetos modernos e
            escaláveis.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default NextLogo;
