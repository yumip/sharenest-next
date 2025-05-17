import { FormValues } from "@/shared/types/form";
import { z } from "zod";

export const userRoleSchema = z.enum(["user", "admin"]);
export const userStatusSchema = z.enum(["active", "inactive"]);

export const userSchema = z.object({
  formId: z.string().uuid(), // assuming IDs are UUIDs — change to `z.string()` if not
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  mobile: z.string().min(1, "Mobile number is required"), // could add regex if needed
  status: userStatusSchema,
  role: userRoleSchema,
});

export type UserForm = z.infer<typeof userSchema>;
export type UserFormShape = FormValues<UserForm>;