"use client";

import Wrapper from "@/components/Generals/Wrapper";
import { getAppNameAbv } from "@/lib/helperFn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: getAppNameAbv("Page Not found"),
};

export default function NotFoundPage() {
  return (
    <div>
      <Wrapper>
        <p>404 not found</p>
      </Wrapper>
    </div>
  );
}
