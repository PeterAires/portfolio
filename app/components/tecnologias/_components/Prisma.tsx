import Image from "next/image";
import Prisma from "../../../public/Prisma-icon.png";
import { Dialog ,DialogHeader, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "../../ui/dialog";


const PrismaImage = () => {
  return (
    <Dialog>
      <DialogTrigger className="card2 w-32 items-center">
        <Image src={Prisma} width={100} height={100} alt="" />
      </DialogTrigger>
      <DialogContent className="bg-transparent">
        <DialogHeader className="bg-transparent">
          <DialogTitle className="bg-transparent">Prisma</DialogTitle>
          <DialogDescription className="bg-transparent text-white">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default PrismaImage;
