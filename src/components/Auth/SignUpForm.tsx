"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  LucideExternalLink,
  LucideKey,
  LucideMail,
  LucidePencilLine,
  LucideUser,
} from "lucide-react";
import { createFormSchema } from "@/lib/FormSchema/schema";

export default function SignUpform({
  setPendingVerification,
  onSubmit,
  loading,
}: {
  setPendingVerification: (value: boolean) => void;
  onSubmit: (data: z.infer<typeof createFormSchema>) => void;
  loading?: boolean;
}) {
  const form = useForm<z.infer<typeof createFormSchema>>({
    resolver: zodResolver(createFormSchema),
    defaultValues: {
      email: "",
      password: "",
      terms: true,
    },
  });

  return (
    <Form {...form}>
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
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    defaultChecked={field.value}
                    onChange={(value) => alert(value)}
                  />
                  <div className="flex items-center space-x-2">
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none hover:text-primary peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Accept terms and conditions
                    </label>
                    <Link
                      href={"/terms-of-services"}
                      target="_blank"
                      className="hover:text-primary hover:underline"
                    >
                      <LucideExternalLink size={14} />
                    </Link>
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex w-full justify-center">
          <Button
            disabled={loading}
            type="submit"
            className="space-x-2 bg-gradient-to-b from-primary to-green-700 px-12 text-white"
            size={"lg"}
          >
            <LucidePencilLine /> <p>Sign Up</p>
          </Button>
        </div>
      </form>
    </Form>
  );
}
