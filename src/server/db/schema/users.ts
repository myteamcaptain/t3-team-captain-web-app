import { boolean, timestamp, varchar, index } from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import type { z } from "zod";
import { createTable } from "./_table";
import { registeredWhatsappNumbers } from "./registeredWhatsappNumbers";

export const users = createTable(
  "users",
  {
    userId: varchar("user_id").primaryKey(),
    username: varchar("username", { length: 256 }),
    firstname: varchar("firstname", { length: 256 }),
    lastname: varchar("lastname", { length: 256 }),
    email: varchar("email", { length: 256 }),
    emailStatus: varchar("email_status", { length: 256 }),
    profile: varchar("profile", { length: 256 }),
    isDeleted: boolean("is_deleted").default(false),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
  },
  (user) => ({
    userIdUnq: index("user_id_unq").on(user.userId),
  }),
);

// export const usersRelations = relations(users, ({ many }) => ({
//   posts: many(registeredWhatsappNumbers),
// }));

export const insertUserSchema = createInsertSchema(users);
export const userSchema = createSelectSchema(users);
export type InsertUser = z.infer<typeof insertUserSchema>;
