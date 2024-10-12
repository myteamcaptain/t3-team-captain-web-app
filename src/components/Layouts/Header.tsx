"use client";
import { NAVIGATION_MENU_LIST } from "@/lib/const";
import Wrapper from "../Generals/Wrapper";
import Link from "next/link";
import ToogleTheme from "../Generals/ToogleTheme";
import UserDetails from "../Generals/UserDetails";
import { NavigationTypeComp } from "../Generals/NavigationMenu";
export default function Header() {
  return (
    <div className="flex h-navigation items-center">
      <Wrapper className="flex w-full items-center justify-between">
        <Link href="/">
          <p>Logo</p>
        </Link>
        <NavigationTypeComp menu={NAVIGATION_MENU_LIST} />

        <div className="flex items-center space-x-2">
          <UserDetails />
        </div>
      </Wrapper>
    </div>
  );
}
