// src/components/Icon.tsx
import React from "react";
import { IconType, IconBaseProps } from "react-icons";
import {
  FaCalculator,
  FaSignOutAlt,
  FaTachometerAlt,
  FaTools,
  FaUserFriends,
} from "react-icons/fa";

const iconMapping: Record<IconName, IconType> = {
  dashboard: FaTachometerAlt,
  accounting: FaCalculator,
  customers: FaUserFriends,
  services: FaTools,
  exit: FaSignOutAlt,
};

type IconName = "dashboard" | "accounting" | "customers" | "services" | "exit";

const sizeOptions = {
  sm: "size-4",
  md: "size-6",
  lg: "size-8",
  xl: "size-10",
};

type IconSize = "sm" | "md" | "lg" | "xl";

const colorOptions = {
  primary: "text-emerald-500",
};

type IconColor = "primary";

interface IconProps {
  name: IconName;
  title?: string;
  size?: IconSize;
  color?: IconColor;
}

export const Icon = ({
  name,
  title,
  size = "md",
  color = "primary",
}: IconProps): JSX.Element => {
  const IconComponent = iconMapping[name];

  return (
    <IconComponent
      title={title}
      className={`${sizeOptions[size]} ${colorOptions[color]}`}
    />
  );
};
