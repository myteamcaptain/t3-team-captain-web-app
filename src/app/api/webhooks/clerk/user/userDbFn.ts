import { db } from "@/server/db";
import { InsertUser, users } from "@/server/db/schema";
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
      .update(users)
      .set(data)
      .where(eq(users.userId, userId))
      .returning({ insertedId: users.userId });

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
