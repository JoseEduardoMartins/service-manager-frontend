import { IconType } from "react-icons";

export type MenuItemType = {
  label: string;
  isActived?: boolean;
  isOpened?: boolean;
  method: () => void;
  icon: IconType;
};

export const MenuItem = ({
  label,
  isActived = false,
  isOpened = false,
  method,
  ...rest
}: MenuItemType) => (
  <div
    className={
      isActived
        ? "text-black rounded-lg cursor-pointer bg-gray-200 transition duration-300"
        : "text-white rounded-lg cursor-pointer hover:text-black hover:bg-gray-300 transition duration-300"
    }
  >
    <button
      type="button"
      className="w-full flex items-center gap-4 p-3 rounded-lg"
      onClick={method}
    >
      <rest.icon className="text-emerald-500 size-6" />
      {isOpened && <p className="text-base">{label}</p>}
    </button>
  </div>
);
