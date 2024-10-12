"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { LucideKey, LucideLogIn, LucideMail } from "lucide-react";
import Link from "next/link";
import SsoAuth from "@/components/Auth/SsoAuth";
import { loginFormSchema } from "@/lib/FormSchema/schema";
import { useSignIn } from "@clerk/nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { ClerkAPIError } from "@clerk/types";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";
const LoginForm = () => {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<ClerkAPIError[]>();
  const router = useRouter();
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof loginFormSchema>) {
    setLoading(true);
    if (!isLoaded) {
      return;
    }

    try {
      const result = await signIn.create({
        identifier: data.email,
        password: data.password,
      });

      if (result.status === "complete") {
        await setActive({
          session: result.createdSessionId,
        });
        router.push("/admin");
      } else {
        console.log(result);
        alert(result);
        setLoading(false);
      }
    } catch (err) {
      if (isClerkAPIResponseError(err)) setErrors(err?.errors);
      console.error(JSON.stringify(err, null, 2));

      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      {errors && (
        <ul>
          {errors.map((el, index) => (
            <li key={index} className="text-red-500">
              {el.longMessage}
            </li>
          ))}
        </ul>
      )}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative w-full">
                  <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                    <LucideMail size={20} />
                  </div>
                  <input
                    type="text"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-green-500 dark:focus:ring-green-500"
                    placeholder="Email address"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative w-full">
                  <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                    <LucideKey size={20} />
                  </div>
                  <input
                    type="password"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-green-500 dark:focus:ring-green-500"
                    placeholder="Password"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full justify-center">
          <Button
            type="submit"
            disabled={loading}
            className="space-x-2 bg-gradient-to-b from-primary to-green-700 px-12 text-white"
            size={"lg"}
          >
            {!loading && (
              <>
                <LucideLogIn /> <p>Login</p>
              </>
            )}
            {loading && <p>Signing in...</p>}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default function Login() {
  return (
    <div className="flex min-h-screen w-full bg-primary-foreground">
      <div className="flex min-h-screen basis-1/2 items-center justify-center bg-primary-foreground">
        <div className="space-y-8 lg:w-[40%]">
          <LoginForm />
          <p className="font[300] text-center text-[18px]">
            <b>Login</b> with Other
          </p>
          <SsoAuth />
          <p className="text-center">
            Don&#39;t have an account?{" "}
            <Link
              href="/auth/create"
              className="font-[600] text-primary hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <div className="min-h-screen basis-1/2 bg-primary"></div>
    </div>
  );
}
