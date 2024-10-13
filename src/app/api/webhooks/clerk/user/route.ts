import { db } from "@/server/db";
import { users } from "@/server/db/schema";
import { UserWebhookEvent, WebhookEventType } from "@clerk/nextjs/server";
import { UserJSON } from "@clerk/types";
import { updateUser } from "./userDbFn";

export const runtime = "nodejs";
export async function POST(req: Request) {
  const eventData = (await req.json()) as UserWebhookEvent;
  const eventType = eventData.type as WebhookEventType;
  const data = eventData.data as unknown as UserJSON;
  const userEmailAddress = data.email_addresses.find(
    (ea) => ea.id === data.primary_email_address_id,
  );

  const userId = eventData.data.id as unknown as string;
  switch (eventType) {
    case "user.created": {
      const user = await db
        .insert(users)
        .values({
          userId: userId,
          firstname: data.first_name ?? "",
          lastname: data.last_name ?? "",
          email: userEmailAddress?.email_address,
          emailStatus: userEmailAddress?.verification?.status ?? "",
        })
        .returning({ insertedId: users.userId });

      console.log(`User ${user[0]?.insertedId} created!`);
      break;
    }
    case "user.updated": {
      const updateParams = {
        firstname: data.first_name ?? "",
        lastname: data.last_name ?? "",
        email: userEmailAddress?.email_address,
        emailStatus: userEmailAddress?.verification?.status ?? "",
      };
      const userUpdated = await updateUser({
        userId,
        data: updateParams,
      });
      console.log(`User ${userUpdated[0]?.insertedId} updated!`);
      break;
    }
    case "user.deleted": {
      const updateParams = {
        firstname: data.first_name ?? "",
        lastname: data.last_name ?? "",
        email: userEmailAddress?.email_address,
        emailStatus: userEmailAddress?.verification?.status ?? "",
      };
      const userDeleted = await updateUser({
        userId,
        data: updateParams,
      });

      console.log(`User ${userDeleted[0]?.insertedId} deleted!`);
      break;
    }
  }
  return Response.json(
    { status: 200, message: "Webhook end request." },
    {
      status: 200,
    },
  );
}
