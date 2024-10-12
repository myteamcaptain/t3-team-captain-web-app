import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CheckGameScheduleCard() {
  return (
    <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
      <CardHeader className="pb-3">
        <CardTitle>Monitor Game Attendee</CardTitle>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
          Please verify the attendance for the most recent game you scheduled to
          ensure everyone is accounted for and ready to play.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button>Check Schedule</Button>
      </CardFooter>
    </Card>
  );
}
