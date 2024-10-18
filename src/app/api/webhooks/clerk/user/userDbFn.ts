import { db } from "@/server/db";
import { schema } from "@/server/db/schema";
import { InsertUser } from "@/server/db/schema/users";
import { throwError } from "@/utils/error";
import { eq } from "drizzle-orm";

export const updateUser = async ({
  userId,
  data,
  alreadyExist = false,
}: {
  userId: string;
  data: Partial<Omit<InsertUser, "userId">>;
  alreadyExist?: boolean;
}) => {
  try {
    const exist = alreadyExist || (await checkUserExist(userId));

    if (!exist) return throwError(new Error("User does not exist."));

    const result = await db
      .update(schema.users)
      .set(data)
      .where(eq(schema.users.userId, userId))
      .returning({ insertedId: schema.users.userId });

    return result;
  } catch (error) {
    console.log("UPDATE_USER ERROR:", error);
    return throwError(error);
  }
};

export const checkUserExist = async (id: string) => {
  try {
    const user = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.userId, id),
    });

    return !!user;
  } catch (error) {
    return throwError(error);
  }
};
