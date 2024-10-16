"use client";

import { SheetContainer } from "@/components/Generals/SheetContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReactNode, useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input";

import type { Value } from "react-phone-number-input";
import { LucidePhone } from "lucide-react";

interface RegisterPhoneProps {
  triggerComponent: ReactNode;
}
export default function RegisterPhone({
  triggerComponent,
}: RegisterPhoneProps) {
  const [value, setValue] = useState<Value | undefined>();
  const verifyPhoneHandler = () => {
    alert("okay");
  };
  return (
    <SheetContainer
      title="Register a phone numer"
      description="Add you phone number here. It must be the phone number you use on your Whatsapp account."
      triggerComponent={triggerComponent}
      submitBtn={{
        text: "Verify Phone",
        icon: <LucidePhone size={20} />,
      }}
      handleSubmit={verifyPhoneHandler}
    >
      <div className="grid gap-4 py-4">
        <div className="">
          <PhoneInput
            placeholder="Enter Whatsapp phone number"
            value={value}
            onChange={setValue}
            className="h-10 py-2"
            limitMaxLength={true}
            numberInputProps={{
              style: {
                padding: "10px",
                borderRadius: "5px",
              },
            }}
            error={
              value
                ? isValidPhoneNumber(value)
                  ? undefined
                  : "Invalid phone number"
                : "Phone number required"
            }
          />
        </div>
      </div>
    </SheetContainer>
  );
}
