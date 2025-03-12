import Image from "next/image";
import ViteImage from "../../../public/vite.svg";
import { Dialog ,DialogHeader, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "../../ui/dialog";


const Vite = () => {
  return (
    <Dialog>
      <DialogTrigger className="card2 w-32 items-center">
        <Image src={ViteImage} width={100} height={100} alt="" />
      </DialogTrigger>
      <DialogContent className="bg-transparent">
        <DialogHeader className="bg-transparent">
          <DialogTitle className="bg-transparent">Vite</DialogTitle>
          <DialogDescription className="bg-transparent">
            This action cannot be undone. This will permanently delete your
            account and remove your data from oViter servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default Vite;
