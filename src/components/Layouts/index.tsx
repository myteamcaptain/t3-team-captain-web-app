import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function PageLayouts(props: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`block ${props.className}`}>
      <Header />
      <div> {props.children}</div>
      <Footer />
    </div>
  );
}
