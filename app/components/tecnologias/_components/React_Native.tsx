import Image from "next/image";
import ReactNative from "../../../public/react_native.svg";
import { Dialog ,DialogHeader, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "../../ui/dialog";


const ReactNativeImage = () => {
  return (
    <Dialog>
      <DialogTrigger className="card2 w-32 items-center">
        <Image src={ReactNative} width={100} height={100} alt="" />
      </DialogTrigger>
      <DialogContent className="bg-transparent">
        <DialogHeader className="bg-transparent">
          <DialogTitle className="bg-transparent">ReactNative</DialogTitle>
          <DialogDescription className="bg-transparent">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default ReactNativeImage;
