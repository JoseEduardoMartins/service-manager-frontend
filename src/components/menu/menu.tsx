import { MenuItem, MenuItemProps } from "./menuItem";

export type MenuProps = {
  items: Array<MenuItemProps>;
};

export const Menu = ({ items }: MenuProps) => (
  <div className="flex flex-col gap-2">
    {items?.map((item, index) => (
      <MenuItem
        key={index}
        label={item.label}
        isActived={item.isActived}
        isOpened={item.isOpened}
        method={item.method}
        icon={item.icon}
      />
    ))}
  </div>
);
