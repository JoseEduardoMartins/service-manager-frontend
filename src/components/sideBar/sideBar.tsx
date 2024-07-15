import { Menu } from "@/components/menu";
import { useSideBar } from "./useSideBar";

export const SideBar = () => {
  const { menuItems } = useSideBar();

  return (
    <div>
      <header className="w-full h-16 flex items-center">
        <div className="text-xl text-white">Gerenciador de Serviços</div>
      </header>
      <Menu items={menuItems} />
    </div>
  );
};
