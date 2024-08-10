import { Menu } from "@/components/menu";
import { useSideBar } from "./useSideBar";

type SideBarType = {
  isOpened: boolean;
};

export const SideBar = ({ isOpened }: SideBarType) => {
  const { menuItems } = useSideBar({ isOpened });

  return <Menu items={menuItems} />;
};
