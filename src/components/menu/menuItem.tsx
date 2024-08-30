export type MenuItemProps = {
  label: string;
  isActived?: boolean;
  isOpened?: boolean;
  method: () => void;
  icon: JSX.Element;
};

export const MenuItem = ({
  label,
  isActived = false,
  isOpened = false,
  method,
  ...rest
}: MenuItemProps) => (
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
      {rest.icon}
      {isOpened && <p className="text-base">{label}</p>}
    </button>
  </div>
);
