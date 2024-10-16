import { boolean, serial, timestamp, varchar } from "drizzle-orm/pg-core";

import { relations, sql } from "drizzle-orm";
import { users } from "./users";
import { createTable } from "./_table";

export const registeredWhatsappNumbers = createTable(
  "registered_whatsapp_numbers",
  {
    id: serial("id").primaryKey(),
    userId: varchar("user_id").references(() => users.userId),
    phoneNumber: varchar("user_id").references(() => users.userId),
    isActive: boolean("is_active").default(true),
    isDeleted: boolean("is_deleted").default(false),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
  },
);

// export const registeredWhatsappNumbersRelations = relations(
//   registeredWhatsappNumbers,
//   ({ one }) => ({
//     user: one(users),
//   }),
// );
