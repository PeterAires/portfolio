import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import fswBarber from '../public/projects/fsw_barber.png'
import Image from "next/image";

const Projetos = () => {
  return (
    <div className="mt-32">
      <div className="mb-32">
        <h1 className="tecnologias text-3xl  font-black">Projetos</h1>
      </div>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="flex justify-center">Full-Stack-Barbearia<Image src={fswBarber} width={300} height={100} alt="" /></CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="bg-transparent" />
        <CarouselNext className="bg-transparent" />
      </Carousel>
    </div>
  );
};
export default Projetos;
