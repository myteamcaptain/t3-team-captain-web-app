// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import * as users from "./schema/users";
import * as posts from "./schema/post";
import * as registeredWhatsappNumbers from "./schema/registeredWhatsappNumbers";
/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */

//export { createTable as tableCreator } from "./schema/_table";

export const schema = {
  ...users,
  ...registeredWhatsappNumbers,
  ...posts,
};
