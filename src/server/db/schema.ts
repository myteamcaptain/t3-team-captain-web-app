// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import * as users from "./schema/users";
import * as post from "./schema/post";
import * as registeredWhatsappNumbers from "./schema/registeredWhatsappNumbers";
import * as groupChat from "./schema/groupChats";
/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export * from "drizzle-orm";
export * from "drizzle-orm/expressions";
export { createTable as tableCreator } from "./schema/_table";

export const schema = {
  ...users,
  ...registeredWhatsappNumbers,
  ...post,
  ...groupChat,
};
