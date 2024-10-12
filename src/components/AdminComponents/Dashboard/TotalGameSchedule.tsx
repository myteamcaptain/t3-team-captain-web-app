import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import GameChartPlotted from "./GameChartPlotted";

interface TotalGameScheduleProps {
  children?: React.ReactNode;
  cardTitle: string;
  totalSchedule?: number;
}

export default function TotalGameSchedule(props: TotalGameScheduleProps) {
  const { cardTitle, totalSchedule = 0 } = props;
  return (
    <Card className="w-full py-6">
      <CardContent className="space-y-6">
        <div className="w-full space-y-4">
          <h3 className="leading-7">{cardTitle}</h3>
          <p className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {totalSchedule}
          </p>
        </div>
        <GameChartPlotted />
      </CardContent>
    </Card>
  );
}
