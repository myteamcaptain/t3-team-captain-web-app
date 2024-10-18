import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { schema } from "../../db/schema";

export const groupChatsRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        groupChatId: z.string().min(1),
        groupName: z.string().min(1),
        groupChatType: schema.groupChatTypeSchema,
        createdAt: z.date(),
      }),
    )
    .mutation(({ ctx, input }) => {
      const { userId } = ctx.auth;
      const { groupChatId, groupChatType, createdAt, groupName } = input;
      const result = ctx.db
        .insert(schema.groupChat)
        .values({
          groupName,
          userId,
          groupChatId,
          groupChatType,
          createdAt,
        })
        .returning({ insertedId: schema.groupChat.id });

      return result;
    }),
});
