import Image from "next/image";
import React from "../../../public/React-icon.svg.png";
import { Dialog ,DialogHeader, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "../../ui/dialog";


const ReactImage = () => {
  return (
    <Dialog>
      <DialogTrigger className="card2 w-32 items-center">
        <Image src={React} width={100} height={100} alt="" />
      </DialogTrigger>
      <DialogContent className="bg-transparent">
        <DialogHeader className="bg-transparent">
          <DialogTitle className="bg-transparent">React</DialogTitle>
          <DialogDescription className="bg-transparent">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default ReactImage;
