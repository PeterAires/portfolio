import Image from "next/image";
import NodeImage from "../../../public/node.svg";
import { Dialog ,DialogHeader, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "../../ui/dialog";


const Node = () => {
  return (
    <Dialog>
      <DialogTrigger className="card2 w-32 items-center">
        <Image src={NodeImage} width={100} height={100} alt="" />
      </DialogTrigger>
      <DialogContent className="bg-transparent">
        <DialogHeader className="bg-transparent">
          <DialogTitle className="bg-transparent">Node</DialogTitle>
          <DialogDescription className="bg-transparent">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default Node;
