import { Button } from "@/components/ui/button";
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
import { ReactNode } from "react";

interface SheetContainerProps {
  title: string;
  description?: string;
  children: ReactNode;
  triggerComponent: ReactNode;
  submitBtn?: {
    text?: string;
    icon?: ReactNode;
  };
  handleSubmit?: () => void;
}
export function SheetContainer({
  title,
  description,
  children,
  triggerComponent,
  submitBtn = { text: "Submit" },
  handleSubmit,
}: SheetContainerProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>{triggerComponent}</SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          {description && <SheetDescription>{description}</SheetDescription>}
        </SheetHeader>
        {children}
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" onClick={handleSubmit} className="gap-x-2">
              {submitBtn?.icon}
              {submitBtn?.text ?? "Submit"}
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
