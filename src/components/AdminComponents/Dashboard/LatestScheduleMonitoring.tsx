import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LucideUserRoundCheck } from "lucide-react";
interface TotalGameScheduleProps {
  children?: React.ReactNode;
  cardTitle: string;
}
export default function LatestScheduleMonitoring(
  props: TotalGameScheduleProps,
) {
  const { cardTitle } = props;
  return (
    <Card className="w-full py-6">
      <CardContent className="space-y-6">
        <div className="w-full space-y-4">
          <h3 className="leading-7">{cardTitle}</h3>
          <div className="flex justify-between">
            <div className="leading-none">
              <p className="scroll-m-20 text-2xl font-semibold tracking-tight">
                11/11
              </p>
              <span className="text-[14px]">Attended</span>
            </div>
            <div className="leading-none">
              <p className="scroll-m-20 text-2xl font-semibold tracking-tight">
                11/11
              </p>
              <span className="text-[14px]">Did not attend</span>
            </div>
            <div className="leading-none">
              <p className="scroll-m-20 text-2xl font-semibold tracking-tight">
                11/11
              </p>
              <span className="text-[14px]">Did not respond</span>
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-8 gap-1">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((index: number) => (
            <div
              key={index}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-green-900"
            >
              <LucideUserRoundCheck size={24} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
