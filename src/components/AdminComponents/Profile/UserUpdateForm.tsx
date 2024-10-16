"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { useAuth, useUser } from "@clerk/nextjs";
import { updateUserInfo } from "@/helper/actions/user";
import { ToastAction } from "@/components/ui/toast";
import Link from "next/link";
import { useEffect } from "react";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  firstname: z.string().min(2, {
    message: "Firstname must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "Lastname must be at least 2 characters.",
  }),
});

export default function UserUpdateForm() {
  const { user } = useUser();
  const userId = user?.id;

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      firstname: "",
      lastname: "",
    },
  });

  useEffect(() => {
    if (user) {
      const username = user?.username ?? "";
      const firstName = user?.firstName ?? "";
      const lastName = user?.lastName ?? "";
      form.setValue("username", username, { shouldValidate: true });
      form.setValue("firstname", firstName, { shouldValidate: true });
      form.setValue("lastname", lastName, { shouldValidate: true });
    }
  }, [user]);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const { firstname, lastname, username } = data;

    if (!userId) return;
    const result = await updateUserInfo({
      userId,
      firstName: firstname,
      lastName: lastname,
      username,
    });
    if (result instanceof Error) return;
    toast({
      title: "Update successfull!",
      description:
        "You have successfully updated your user profile. Click to go to dashboard.",
      action: (
        <Link href="/admin">
          <ToastAction altText="Goto schedule to undo">Dashboard</ToastAction>
        </Link>
      ),
    });
  }

  return (
    <Card className="max-w-[450px]">
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
        <CardDescription>Fill out the necessary field.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-foreground dark:text-white">
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-foreground dark:text-white">
                    Firstname
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-foreground dark:text-white">
                    Lastname
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button type="submit">Submit</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
