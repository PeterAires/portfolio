import Next from "../public/next.svg";
import Vite from "../public/vite.svg";
import Html from "../public/html5.svg";
import Node from "../public/node.svg";
import Prisma from "../public/prisma.svg";
import { Card } from "./ui/card";
import Image from "next/image";

const tecnologias = [
  { name: "Next.js", icon: Next },
  { name: "Vite", icon: Vite },
  { name: "HTML5", icon: Html },
  { name: "Node.js", icon: Node },
  { name: "Prisma", icon: Prisma },
];

export const Tecnologias = () => {
  return (
    <div className=" flex justify-center ">
      <Card className="card1 bg-transparent border-black p-4 w-32 h-36">
        <Image src={Next} width={100} height={100} />
      </Card>
      <Card className="card2 bg-transparent border-black w-32">
        <Image src={Vite} width={100} height={100} />
      </Card>
      <Card className="card3 bg-transparent border-black w-32">
        <Image src={Html} width={100} height={100} />
      </Card>
      <Card className="card4 bg-transparent border-black w-32">
        <Image src={Node} width={100} height={100} />
      </Card>
      <Card className="card5 bg-transparent border-black w-32">
        <Image src={Prisma} width={100} height={100} />
      </Card>
    </div>
  );
};
