import Image from "next/image";
import HtmlImage from "../../../public/html5.svg";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../../ui/dialog";

const Html = () => {
  return (
    <Dialog>
      <DialogTrigger className="card2 w-32 items-center">
        <Image src={HtmlImage} width={100} height={100} alt="" />
      </DialogTrigger>
      <DialogContent className="bg-transparent">
        <DialogHeader className="bg-transparent">
          <DialogTitle className="bg-transparent">Html</DialogTitle>
          <DialogDescription className="bg-transparent text-white">
            A linguagem base da web, usada para estruturar páginas. Com o HTML5,
            é possível criar elementos interativos e semânticos.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default Html;
