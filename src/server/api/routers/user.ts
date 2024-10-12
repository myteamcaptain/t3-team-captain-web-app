import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const userRouter = createTRPCRouter({
  info: protectedProcedure.query(({ ctx, input }) => {
    const { userId } = ctx.auth;
    return userId;
  }),
});
