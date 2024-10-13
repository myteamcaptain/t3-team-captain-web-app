import type { ZodSchema } from "zod";

import "@clerk/types";

import type { ClerkAPIResponseError } from "@clerk/shared/error";

const isClerkError = (error: unknown): error is ClerkAPIResponseError => {
  if (typeof error !== "object" || error === null || error === undefined)
    return false;

  return "clerkError" in error;
};

export const throwError = (error: unknown, message?: string) => {
  const errorMessage = message ?? "An error occured.";

  if (isClerkError(error))
    throw new Error(error.errors[0]?.longMessage ?? message);
  else if (typeof error === "string") throw new Error(error || message);
  else if (error instanceof Error)
    throw error.message ? error : new Error(errorMessage);
  else throw new Error(errorMessage);
};

export const getError = (error: unknown, message?: string) => {
  const errorMessage = message ?? "An error occured.";

  if (isClerkError(error))
    return new Error(error.errors[0]?.longMessage ?? message);
  else if (typeof error === "string") return new Error(error || message);
  else if (error instanceof Error)
    return error.message ? error : new Error(errorMessage);
  else return new Error(errorMessage);
};

export const getZodParseError =
  <T = unknown>(schema: ZodSchema<T>) =>
  (data: T) => {
    const parsed = schema.safeParse(data);

    if (parsed.success) return null;

    const error = parsed.error.issues[0]!;

    return error.message;
  };
