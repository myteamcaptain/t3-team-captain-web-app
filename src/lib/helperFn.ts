"use client";

import { APP_INFO } from "./const";

export const getAppNameAbv = (newStr?: string) => {
  return `${APP_INFO.appAbv} - ${newStr ?? "Dashboard"}`;
};
export const renameBreadcrumpTitle = (pathName: string) => {
  let formattedPath = "";
  switch (pathName) {
    case "admin": {
      formattedPath = "Dashboard";
      break;
    }
    default: {
      formattedPath = pathName.replaceAll("-", " ");
    }
  }

  return formattedPath;
};
// Create our number formatter.
export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",

  // These options are needed to round to whole numbers if that's what you want.
  minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});
