"use client";

import {
  LatestScheduleMonitoring,
  TotalGameSchedule,
} from "@/components/AdminComponents";
import CheckGameScheduleCard from "@/components/AdminComponents/Dashboard/CheckGameScheduleCard";
import CreateScheduleCard from "@/components/AdminComponents/Dashboard/CreateScheduleCard";
import Wrapper from "@/components/Generals/Wrapper";
import AdminBreadcrump from "@/components/Layouts/Admin/AdminBreadcrump";

export default function AdminPage() {
  return (
    <div>
      <Wrapper className="flex flex-col">
        <AdminBreadcrump />
        <div className="w-full space-y-8">
          <div className="ween-bet grid w-full grid-cols-3 gap-4">
            <div className="">
              <TotalGameSchedule
                cardTitle="All Time Game Schedule Made"
                totalSchedule={56}
              />
            </div>
            <LatestScheduleMonitoring cardTitle="Latest Game Schedule Monitoring" />
            <LatestScheduleMonitoring cardTitle="Last Game Schedule Attendee" />
          </div>
          <div className="flex w-full space-x-4">
            <div className="basis-1/2">
              <CreateScheduleCard />
            </div>
            <div className="basis-1/2">
              <CheckGameScheduleCard />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
