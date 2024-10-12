import type { ReactNode } from "react";
import AdminHeader from "./AdminHeader";

export default function AdminPageLayouts(props: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`block ${props.className}`}>
      <AdminHeader />
      <div> {props.children}</div>
    </div>
  );
}
