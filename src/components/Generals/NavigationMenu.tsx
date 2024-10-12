import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NAVIGATION_MENU_AUTH, NAVIGATION_MENU_LIST } from "@/lib/const";

import Link from "next/link";
import type { MenuItemType } from "@/lib/types";
export const subMenuFormat = (subMenu: MenuItemType[]) => {
  return subMenu.map((subItem: MenuItemType, subIndex: number) => (
    <Link
      key={`sub_link_${subIndex}`}
      href={subItem.link}
      legacyBehavior
      passHref
    >
      <NavigationMenuLink>{subItem.label}</NavigationMenuLink>
    </Link>
  ));
};

export const formatMenuItem = (menuList: MenuItemType[]) => {
  return menuList.map((menuList: MenuItemType, index: number) => {
    return (
      <NavigationMenuItem key={index}>
        {menuList.menuList && (
          <>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent className="w-10 p-5">
              {subMenuFormat(menuList.menuList)}
            </NavigationMenuContent>
          </>
        )}
        {!menuList.menuList && (
          <Link href={menuList.link} legacyBehavior passHref>
            <NavigationMenuLink className="px-2 pb-2 hover:border-b-4 hover:border-primary">
              {menuList.label}
            </NavigationMenuLink>
          </Link>
        )}
      </NavigationMenuItem>
    );
  });
};

export const NavigationTypeComp = ({ menu }: { menu: MenuItemType[] }) => {
  return (
    <div className="hidden md:block">
      <NavigationMenu>
        <NavigationMenuList className="space-x-2">
          {formatMenuItem(menu)}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
