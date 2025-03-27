import Image from "next/image";
import ReactNative from "../../../public/react_native.svg";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../../ui/dialog";

const ReactNativeImage = () => {
  return (
    <Dialog>
      <DialogTrigger className="card2 w-32 items-center">
        <Image src={ReactNative} width={100} height={100} alt="" />
      </DialogTrigger>
      <DialogContent className="bg-transparent">
        <DialogHeader className="bg-transparent">
          <DialogTitle className="bg-transparent">ReactNative</DialogTitle>
          <DialogDescription className="bg-transparent text-white">
            Um framework baseado em React para desenvolver aplicativos móveis
            nativos para Android e iOS usando JavaScript.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default ReactNativeImage;
