import { getError } from "@/utils/error";

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
    return getError(err);
  }
}
