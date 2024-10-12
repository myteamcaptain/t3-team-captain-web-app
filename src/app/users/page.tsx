import { getAppNameAbv } from "@/lib/helperFn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: getAppNameAbv("Users"),
};
export default function UserPage() {
  return <p>User</p>;
}
