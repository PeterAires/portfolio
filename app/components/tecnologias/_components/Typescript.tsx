import Image from "next/image";
import TypeScript from "../../../public/typescript_icon.png";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../../ui/dialog";

const TypeScriptIcon = () => {
  return (
    <Dialog>
      <DialogTrigger className="card2 w-32 items-center">
        <Image src={TypeScript} width={100} height={100} alt="" />
      </DialogTrigger>
      <DialogContent className="bg-transparent">
        <DialogHeader className="bg-transparent">
          <DialogTitle className="bg-transparent">TypeScript</DialogTitle>
          <DialogDescription className="bg-transparent text-white">
            Uma linguagem que adiciona tipagem estática ao JavaScript, tornando
            o código mais seguro e escalável.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default TypeScriptIcon;
