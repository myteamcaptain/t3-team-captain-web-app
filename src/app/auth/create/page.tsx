"use client";

import SsoAuth from "@/components/Auth/SsoAuth";
import Link from "next/link";
import type { createFormSchema } from "@/lib/FormSchema/schema";
import { useSignUp } from "@clerk/nextjs";
import { useState } from "react";
import ConfirmOTP from "@/components/Auth/ConfirmOTP";
import { useRouter } from "next/navigation";
import type { z } from "zod";
import SignUpform from "@/components/Auth/SignUpForm";

export default function SignUp() {
  const router = useRouter();
  const [pendingVerification, setPendingVerification] =
    useState<boolean>(false);

  const [loading, setLoading] = useState(false);
  const [loadingCode, setLoadingCode] = useState(false);
  const { isLoaded, signUp, setActive } = useSignUp();
  const [otpVerifyErr, setOtpVerifyErr] = useState<string>("");
  // 2. Define a submit handler.
  async function onSubmit(data: z.infer<typeof createFormSchema>) {
    setLoading(true);
    if (!isLoaded) {
      return;
    }
    try {
      const { status: signUpStatus } = await signUp.create({
        emailAddress: data?.email,
        password: data?.password,
      });

      console.log(signUpStatus);
      // send the email.
      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });
      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err: unknown) {
      console.error(JSON.stringify(err, null, 2));
      const errorEmails = JSON.parse(JSON.stringify(err, null, 2));
      const longMessage = errorEmails.errors[0].longMessage;
    }
    setLoading(false);
  }
  const onPressVerify = async ({ OTP }: { OTP: string }) => {
    setLoadingCode(true);

    if (!isLoaded) {
      setLoadingCode(false);
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: OTP,
      });

      if (completeSignUp.status !== "complete") {
        console.log(
          "JSON.stringify(completeSignUp, null, 2)",
          JSON.stringify(completeSignUp, null, 2),
        );
      }
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });

        // document.body.classList.remove("modal-open");
        router.push("/");
      }
    } catch (err: unknown) {
      console.error(JSON.stringify(err, null, 2));
      const errorCodes = JSON.parse(JSON.stringify(err, null, 2));
      console.log("errorCodes", errorCodes);
      const longMessage = errorCodes.errors[0].longMessage as string;
      const longMessage2 = errorCodes.errors[0].message as string;
      setOtpVerifyErr(longMessage);
      //   setErrorCode(longMessage);
      //   setErrorCode2(longMessage2);
      setLoadingCode(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-row-reverse bg-primary-foreground">
      <div className="flex min-h-screen basis-1/2 items-center justify-center bg-primary-foreground">
        {!pendingVerification && (
          <div className="space-y-8 lg:w-[40%]">
            <SignUpform
              onSubmit={onSubmit}
              loading={loading}
              setPendingVerification={setPendingVerification}
            />
            <p className="text-center text-[18px] font-[300]">
              <span className="font-[600]">Create account</span> with
            </p>
            <SsoAuth />
            <p className="text-center">
              Don&#39;t have an account?{" "}
              <Link
                href="/auth/login"
                className="font-[600] text-primary hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        )}
        {pendingVerification && (
          <ConfirmOTP
            loading={loadingCode}
            otpVerifyErr={otpVerifyErr}
            onPressVerify={onPressVerify}
          />
        )}
      </div>
      <div className="min-h-screen basis-1/2 bg-primary"></div>
    </div>
  );
}
