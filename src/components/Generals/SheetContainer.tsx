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
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonComponentProps {
  text?: string;
  icon?: ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  onSubmit?: () => Promise<void>;
}
interface SheetContainerProps {
  title: string;
  description?: string;
  children: ReactNode;
  triggerComponent: ReactNode;
  submitBtn?: ButtonComponentProps;
  otherButtons?: ButtonComponentProps[];
}
export function SheetContainer({
  title,
  description,
  children,
  triggerComponent,
  submitBtn = { text: "Submit", isLoading: false },
  otherButtons,
}: SheetContainerProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>{triggerComponent}</SheetTrigger>
      <SheetContent side="right" className="">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          {description && <SheetDescription>{description}</SheetDescription>}
        </SheetHeader>
        {children}
        <SheetFooter>
          <Button
            disabled={submitBtn?.isLoading || submitBtn?.disabled}
            type="button"
            onClick={submitBtn.onSubmit}
            className={cn(`${submitBtn?.disabled && "hidden"} `, "gap-x-2")}
          >
            {submitBtn?.icon}
            {submitBtn?.isLoading
              ? "Verifying..."
              : (submitBtn?.text ?? "Submit")}
          </Button>
          {otherButtons?.map(
            (btnItem: ButtonComponentProps, btnIndex: number) => {
              return (
                <Button
                  key={btnIndex}
                  disabled={btnItem?.isLoading}
                  type="button"
                  onClick={btnItem.onSubmit}
                  className="gap-x-2"
                >
                  {btnItem?.icon}
                  {btnItem?.isLoading
                    ? "Verifying..."
                    : (btnItem?.text ?? "Submit")}
                </Button>
              );
            },
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
