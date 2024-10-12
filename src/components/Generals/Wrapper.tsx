import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
export default function Wrapper(props: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto my-0 flex max-w-screen-xl items-center px-5",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}
