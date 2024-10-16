"use client";

import { CreateGameSchedule } from "@/components/AdminComponents/Schedule/CreateGameSchedule";
import Wrapper from "@/components/Generals/Wrapper";
import AdminBreadcrump from "@/components/Layouts/Admin/AdminBreadcrump";
import { api } from "@/trpc/react";

export default function CreateSchedulePage() {
  const { data, isLoading } = api.user.info.useQuery();
  return (
    <Wrapper className="flex h-content flex-col">
      <AdminBreadcrump />
      <div className="w-full space-y-8 py-5">
        <CreateGameSchedule />
      </div>
    </Wrapper>
  );
}
