import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

export default function GameChartPlotted() {
  const chartData = [
    { month: "January", desktop: 3, mobile: 80 },
    { month: "February", desktop: 2, mobile: 200 },
    { month: "March", desktop: 5, mobile: 120 },
    { month: "April", desktop: 7, mobile: 190 },
    { month: "May", desktop: 9, mobile: 130 },
    { month: "June", desktop: 1, mobile: 140 },
  ];
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Mobile",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig} className="w-full">
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Line
          dataKey="desktop"
          type="natural"
          stroke="var(--color-desktop)"
          strokeWidth={2}
          dot={{
            fill: "var(--color-desktop)",
          }}
          activeDot={{
            r: 6,
          }}
        />
      </LineChart>
    </ChartContainer>
  );
}
