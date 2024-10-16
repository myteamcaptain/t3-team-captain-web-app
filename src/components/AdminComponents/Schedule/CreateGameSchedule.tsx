import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "@/components/Generals/DatePicker";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import RegisterPhone from "../Profile/RegisterPhone";
import CreateWhatsappGroup from "../Profile/CreateWhatsappGroup";
import { FormDescription } from "@/components/ui/form";
import { LucideCircleHelp } from "lucide-react";
import { InfoTooltip } from "@/components/Generals/InfoTooltip";

export function CreateGameSchedule() {
  return (
    <Card className="w-[550px]">
      <CardHeader>
        <CardTitle>Create Game Schedule</CardTitle>
        <CardDescription>
          Create a game schedule and we will notify all members for you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-8">
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="framework">Select phone number</Label>
                <InfoTooltip
                  compTrigger={<LucideCircleHelp size={16} />}
                  content={
                    <p className="w-[350px]">
                      This is the phone number where you wanted to receive the
                      updates of the game schedule you created.
                    </p>
                  }
                />
              </div>

              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs dark:text-slate-600">
                You did not register any phone number. Register{" "}
                <RegisterPhone
                  triggerComponent={
                    <span className="cursor-pointer p-0 text-primary hover:underline">
                      here
                    </span>
                  }
                />
              </p>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Choose Whatsapp Group</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs dark:text-slate-600">
                No groups . Create{" "}
                <CreateWhatsappGroup
                  triggerComponent={
                    <span className="cursor-pointer p-0 text-primary hover:underline">
                      here
                    </span>
                  }
                />
              </p>
              {/* <Input id="name" placeholder="Name of your project" /> */}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Choose Game Schedule</Label>
              <DatePicker placeholderText="Select a date" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Message</Label>
              <Textarea placeholder="Type your message here." rows={8} />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        {/* <Button variant="outline">Cancel</Button> */}
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  );
}
