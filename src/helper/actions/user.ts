import { getError } from "@/utils/error";

import { toast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import Link from "next/link";
interface UpdateUserInfoProps {
  userId: string;
  firstName: string;
  lastName: string;
  username: string;
}
export async function updateUserInfo({
  userId,
  firstName,
  lastName,
  username,
}: UpdateUserInfoProps) {
  try {
    const result = await fetch("/api/clerk/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, firstName, lastName, username }),
    });

    return await result.json();
  } catch (err: unknown) {
    console.log(err);

    const error = getError(err, "Encounter a problem: ");
    toast({
      variant: "destructive",
      title: "Failed to update!",
      description: error.message,
    });
    return error;
  }
}
