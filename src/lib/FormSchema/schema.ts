import { z } from "zod";
export const createFormSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: "Email address must be at least 2 characters.",
    })
    .email({
      message: "It should be an email address.",
    }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters.",
    })
    .max(50, {
      message: "Maximum password length is 50",
    }),
  terms: z
    .boolean()
    .refine(
      (value) => value === true,
      "You must agree to the terms and conditions",
    ),
});

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: "Email address must be at least 2 characters.",
    })
    .email({
      message: "It should be an email address.",
    }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});
