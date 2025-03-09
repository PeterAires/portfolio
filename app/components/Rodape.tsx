import { Switch } from "@/app/components/ui/switch";

function Rodape() {
  return (
    <div className=" fixed  left-0 w-full pt-2 px-2 shadow-md z-50 ">
      <div className=" flex justify-between">
        <div className=" justify-start flex gap-10">
          <button className=" text-2xl ">Sobre mim</button>
          <button className=" text-2xl">Projetos</button>
          <button className=" text-2xl">Contato</button>
        </div>
        <div className="flex justify-end mt-2">
          <Switch />
        </div>
      </div>
      <hr className="border-t border-[#dbd4e2] my-4" />
    </div>
  );
}
export default Rodape;
