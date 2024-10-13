"use client";

import { UserUpdateForm } from "@/components/AdminComponents";
import Wrapper from "@/components/Generals/Wrapper";
import AdminBreadcrump from "@/components/Layouts/Admin/AdminBreadcrump";
import { api } from "@/trpc/react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { LucideBadgeInfo, LucideTerminal } from "lucide-react";
export default function UserProfileRequiredInformation() {
  return (
    <div>
      <Wrapper className="flex flex-col">
        <AdminBreadcrump />
        <div className="w-full space-y-4">
          <Alert variant={"warning"}>
            <LucideBadgeInfo className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              Please complete this form to proceed
            </AlertDescription>
          </Alert>
          <UserUpdateForm />
        </div>
      </Wrapper>
    </div>
  );
}
