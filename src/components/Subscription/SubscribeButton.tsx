import { LucideHeart } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import StripeSubscriptionForm from "./StripeSubscriptionForm";
export default function SubscribeButton() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="bg-primary w-full dark:text-foreground self-end"
          size="xl"
        >
          <LucideHeart className="mr-2 h-4 w-4" /> Subscribe
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Subscription</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <StripeSubscriptionForm />
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
