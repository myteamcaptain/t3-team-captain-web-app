"use client";

import { SheetContainer } from "@/components/Generals/SheetContainer";
import { ReactNode, useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

import type { Value } from "react-phone-number-input";
import { LucidePhone } from "lucide-react";
import { whapiErrorMsgFn } from "@/utils/whapi";
import { api } from "@/trpc/react";
import { useToast } from "@/hooks/use-toast";
interface RegisterPhoneProps {
  triggerComponent: ReactNode;
}
export default function RegisterPhone({
  triggerComponent,
}: RegisterPhoneProps) {
  const { toast } = useToast();
  const [phone, setPhone] = useState<Value | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const { mutate } = api.registeredNumber.create.useMutation({
    onSuccess: () => {
      toast({
        title: "Whatsapp number was registered",
        description:
          "Yayy! Congratulation for registering your number. You can use this for receiving monitoring updates from attendees.",
      });
      setPhone(undefined);
      setErrorMsg("");
    },
    onError: () => {
      setErrorMsg(
        "Whatsapp number was verify but cant register. Please try again!",
      );
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });
  const verifyPhoneHandler = async () => {
    setIsLoading(true);
    const result = await fetch("/api/whapi/group", {
      method: "POST",
      body: JSON.stringify({
        phone,
      }),
    });
    const data = await result.json();

    if (data.status != 200) {
      setErrorMsg(whapiErrorMsgFn(data.status).message);
      setIsLoading(false);
    }
    if (data.status == 200) {
      mutate({ phone: phone as string });
    }
  };

  return (
    <SheetContainer
      title="Register a phone numer"
      description="Add you phone number here. It must be the phone number you use on your Whatsapp account."
      triggerComponent={triggerComponent}
      submitBtn={{
        text: "Verify & Add Phone",
        icon: <LucidePhone size={20} />,
        isLoading,
        onSubmit: verifyPhoneHandler,
      }}
    >
      <div className="mt-10 grid gap-4 py-5">
        {errorMsg && (
          <p className="text-center text-xs text-red-500">{errorMsg}</p>
        )}
        <div className="">
          <PhoneInput
            placeholder="Enter Whatsapp phone number"
            value={phone}
            onChange={setPhone}
            className="h-10 py-2"
            limitMaxLength={true}
            numberInputProps={{
              style: {
                padding: "10px",
                borderRadius: "5px",
              },
            }}
            error={
              phone
                ? isValidPhoneNumber(phone)
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
