import type { Metadata } from "next";
import { getAppNameAbv } from "@/lib/helperFn";

export const metadata: Metadata = {
  title: getAppNameAbv("Admin"),
};
export default function AdminPage() {
  return <p>Admin</p>;
}
