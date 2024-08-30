"use client";

import { AuthContext } from "@/contexts/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import { Icon } from "../icon";
import { useContext } from "react";
import {
  FaCalculator,
  FaSignOutAlt,
  FaTachometerAlt,
  FaTools,
  FaUserFriends,
} from "react-icons/fa";

type UseSideBarType = {
  isOpened: boolean;
};

export const useSideBar = ({ isOpened }: UseSideBarType) => {
  const router = useRouter();
  const pathname = usePathname();
  const { signOut } = useContext(AuthContext);

  const menuItems = [
    {
      label: "Dashboard",
      isActived: pathname === "/service-manager",
      isOpened,
      method: () => router.push("/service-manager/"),
      icon: <Icon name="dashboard" />,
    },
    {
      label: "Contabilidade",
      isActived: pathname === "/service-manager/accounting",
      isOpened,
      method: () => router.push("/service-manager/accounting"),
      icon: <Icon name="accounting" />,
    },
    {
      label: "Clientes",
      isActived: pathname === "/service-manager/customers",
      isOpened,
      method: () => router.push("/service-manager/customers"),
      icon: <Icon name="customers" />,
    },
    {
      label: "Serviços",
      isActived: pathname === "/service-manager/services",
      isOpened,
      method: () => router.push("/service-manager/services"),
      icon: <Icon name="services" />,
    },
    {
      label: "Sair",
      isOpened,
      method: () => signOut(),
      icon: <Icon name="exit" />,
    },
  ];

  return { menuItems };
};
