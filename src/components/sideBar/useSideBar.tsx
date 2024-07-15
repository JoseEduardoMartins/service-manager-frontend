import { AuthContext } from "@/contexts/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import {
  FaCalculator,
  FaSignOutAlt,
  FaTachometerAlt,
  FaTools,
  FaUserFriends,
} from "react-icons/fa";

export const useSideBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { signOut } = useContext(AuthContext);

  const menuItems = [
    {
      text: "Dashboard",
      isActive: pathname === "/service-manager",
      method: () => router.push("/service-manager/"),
      icon: FaTachometerAlt,
    },
    {
      text: "Contabilidade",
      isActive: pathname === "/service-manager/accounting",
      method: () => router.push("/service-manager/accounting"),
      icon: FaCalculator,
    },
    {
      text: "Clientes",
      isActive: pathname === "/service-manager/customers",
      method: () => router.push("/service-manager/customers"),
      icon: FaUserFriends,
    },
    {
      text: "Serviços",
      isActive: pathname === "/service-manager/services",
      method: () => router.push("/service-manager/services"),
      icon: FaTools,
    },
    {
      text: "Sair",
      method: () => signOut(),
      icon: FaSignOutAlt,
    },
  ];

  return { menuItems };
};
