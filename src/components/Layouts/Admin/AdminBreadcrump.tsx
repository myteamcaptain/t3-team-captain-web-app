"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { api } from "@/trpc/react";
import Link from "next/link";
import { Fragment } from "react";
import { renameBreadcrumpTitle } from "@/lib/helperFn";

export default function AdminBreadcrump() {
  const pathname = usePathname();
  const pathNames = pathname.split("/").filter((path) => path);
  let pathLink = "";
  return (
    <div className="flex w-full justify-start py-5">
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList>
          {pathNames.map((pathItem: string, pathIndex: number) => {
            pathLink = `${pathLink}/${pathItem}`;
            return (
              <Fragment key={`nav_${pathIndex}`}>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href={pathLink} className="capitalize">
                      {renameBreadcrumpTitle(pathItem)}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {pathIndex < pathNames.length - 1 && <BreadcrumbSeparator />}
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
