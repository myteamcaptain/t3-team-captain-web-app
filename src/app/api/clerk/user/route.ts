import { getError } from "@/utils/error";
import { clerkClient } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

const handler = async (req: Request) => {
  const { firstName, lastName, username, userId } = await req.json();
  try {
    const params = { firstName, lastName, username };
    console.log("params", params);
    const updatedUser = await clerkClient().users.updateUser(userId, params);

    return Response.json(
      {
        message: "success",
        data: updatedUser,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.log("CLERK_USER_API_ROUTE ERROR:", error);
    const err = getError(error, "An error occured on updating user case.");
    return Response.json({ status: 500, message: err.message });
  }
};

export { handler as POST };
