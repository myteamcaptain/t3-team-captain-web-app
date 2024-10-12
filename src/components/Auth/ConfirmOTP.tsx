"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { Button } from "../ui/button";
import { useState } from "react";
import type { FormEvent } from "react";

export default function ConfirmOTP({
  onPressVerify,
  loading,
  otpVerifyErr,
}: {
  onPressVerify: ({ OTP }: { OTP: string }) => void;
  loading?: boolean;
  otpVerifyErr?: string;
}) {
  const [OTP, setOTP] = useState<string>("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onPressVerify({ OTP });
  };
  return (
    <form className="space-y-4 lg:w-[40%]" onSubmit={handleSubmit}>
      <div>
        <h3 className="text-[20px] font-[600]">Confirm OTP</h3>
        <p className="font-[300]">
          Please confirm the OTP that you receive on the email.
        </p>
      </div>

      <InputOTP
        size={20}
        maxLength={6}
        pattern={REGEXP_ONLY_DIGITS}
        onChange={setOTP}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      {otpVerifyErr && <p className="text-red-500">{otpVerifyErr}</p>}
      <Button
        disabled={loading}
        type="submit"
        className="space-x-2 bg-gradient-to-b from-primary to-green-700 px-6 text-white"
        size={"lg"}
      >
        {loading ? "Verifying..." : "Verify"}
      </Button>
    </form>
  );
}
