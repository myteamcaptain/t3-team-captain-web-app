import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function CreateScheduleCard() {
  return (
    <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
      <CardHeader className="pb-3">
        <CardTitle>Create New Game Schedule</CardTitle>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
          Please develop a fresh schedule for the upcoming game, ensuring all
          necessary details are included and participants are informed
          accordingly.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Link href="/admin/schedule/create">
          <Button> Create New Schedule</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
