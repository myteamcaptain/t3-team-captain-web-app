"use client";

import Wrapper from "@/components/Generals/Wrapper";
import AdminBreadcrump from "@/components/Layouts/Admin/AdminBreadcrump";
import { api } from "@/trpc/react";

export default function CreateSchedulePage() {
  const { data, isLoading } = api.user.info.useQuery();
  return (
    <div>
      <Wrapper className="flex flex-col">
        <p>{JSON.stringify({ data, isLoading })}</p>
        <AdminBreadcrump />
      </Wrapper>
    </div>
  );
}
