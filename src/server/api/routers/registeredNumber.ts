import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { and, eq, schema } from "@/server/db/schema";
import { Phone } from "lucide-react";

const { users, registeredWhatsappNumbers } = schema;
export const registeredNumberRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ phone: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const { userId } = ctx.auth;
      const result = await ctx.db
        .insert(schema.registeredWhatsappNumbers)
        .values({
          userId,
          phoneNumber: input.phone,
        })
        .returning({ insertedId: schema.registeredWhatsappNumbers.id });
      return result;
    }),
  list: protectedProcedure.query(({ ctx, input }) => {
    const userId = ctx.auth.userId;
    const list = ctx.db.query.registeredWhatsappNumbers.findMany({
      columns: {
        id: true,
        phoneNumber: true,
        isActive: true,
      },
      where: and(
        eq(registeredWhatsappNumbers.userId, users.userId),
        eq(registeredWhatsappNumbers.isActive, true),
      ),
    });
    return list;
  }),
});
