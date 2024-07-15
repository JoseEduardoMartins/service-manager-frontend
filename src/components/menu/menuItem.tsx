import { IconType } from "react-icons";

export type MenuItemType = {
  text: string;
  isActive?: boolean;
  method: () => void;
  icon: IconType;
};

export const MenuItem = ({
  text,
  isActive = false,
  method,
  ...rest
}: MenuItemType) => (
  <div
    className={
      isActive
        ? "text-black rounded-lg cursor-pointer bg-gray-200 houver:outline-none focus:outline-gray-300 transition duration-300"
        : "text-white rounded-lg cursor-pointer hover:text-black hover:bg-gray-200 focus:bg-gray-200 houver:outline-none focus:outline-gray-300 transition duration-300"
    }
  >
    <button
      type="button"
      className="w-full flex items-center gap-x-4 p-3 rounded-lg"
      onClick={method}
    >
      <rest.icon className="text-emerald-500 size-4" />
      <p className="break-inside-avoid font-body text-body2 font-regular">
        {text}
      </p>
    </button>
  </div>
);
