"use client";
import { NAVIGATION_MENU_LIST } from "@/lib/const";
import Link from "next/link";
import Wrapper from "@/components/Generals/Wrapper";
import UserDetails from "@/components/Generals/UserDetails";
import { AdminNavMenu } from "./AdminNavMenu";

export default function AdminHeader() {
  return (
    <div className="flex h-navigation items-center">
      <Wrapper className="flex w-full items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <p>Logo</p>
          </Link>
          <AdminNavMenu />
        </div>

        <div className="flex items-center space-x-4">
          <p>Hello, Jovanni</p>
          <UserDetails />
        </div>
      </Wrapper>
    </div>
  );
}
