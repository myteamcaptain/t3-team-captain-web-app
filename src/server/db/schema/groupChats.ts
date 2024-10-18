import { index, pgEnum, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { createTable } from "./_table";
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { users } from "./users";
export const groupChatTypeEnum = pgEnum("group_chat_id", [
  "group",
  "contact",
  "broadcast",
  "newsletter",
  "unknown",
]);

export const groupChat = createTable("group_chat", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").references(() => users.userId),
  groupName: varchar("group_name", { length: 256 }).notNull(),
  groupChatId: varchar("group_chat_id", { length: 256 }).notNull(),
  groupChatType: groupChatTypeEnum("group_chat_id").notNull(),
  createdBy: varchar("created_by", { length: 256 }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
});

export const selectGroupChatSchema = createSelectSchema(groupChat);
export const createGroupChatSchema = createSelectSchema(groupChat);

export const groupChatTypeSchema = createGroupChatSchema.shape.groupChatType;
