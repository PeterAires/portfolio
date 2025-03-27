import { Switch } from "@/app/components/ui/switch";

function Rodape() {
  return (
    <div className=" fixed  left-0 w-full pt-2 px-2 shadow-md z-50 ">
      <div className=" flex justify-between">
        <div className=" justify-start flex gap-10 items-center">
          <a href="#sobre" className=" xl:text-2xl md:text-xl text-base">Sobre mim</a>
          <a href="#projetos" className=" xl:text-2xl md:text-xl text-base ">Projetos</a>
          <a href="#contato" className=" xl:text-2xl md:text-xl text-base">Contato</a>
        </div>
        <div className="flex justify-end mt-2 ">
          <Switch />
        </div>
      </div>
      <hr className="border-t border-[#dbd4e2] my-4" />
    </div>
  );
}
export default Rodape;
