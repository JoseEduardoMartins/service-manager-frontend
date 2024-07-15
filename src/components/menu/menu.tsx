import { MenuItem, MenuItemType } from './menuItem';

export type MenuType = {
  items: Array<MenuItemType>;
};

export const Menu = ({ items }: MenuType) => (
  <div className="flex flex-col gap-2">
    {items?.map((item, index) => <MenuItem key={index} {...item} />)}
  </div>
);
