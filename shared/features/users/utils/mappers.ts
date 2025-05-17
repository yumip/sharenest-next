import type { PatchUserRequest } from "../schema/userTypes";
import type { FieldArray } from "react-hook-form";
import { User } from "@/shared/types/user";
import { UserFormShape } from "../schema/userFormSchema";

export const mapFormRowToPatchUser = (
  row: FieldArray<UserFormShape, "rows">,
): PatchUserRequest => ({
  id: row.formId,
  firstName: row.firstName,
  lastName: row.lastName,
  email: row.email,
  mobile: row.mobile,
  role: row.role,
  status: row.status,
  groupId: "cassiegroup",
});

export const mapFetchUserToFormRow = (
  user: User,
): FieldArray<UserFormShape, "rows"> => ({
    formId: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    mobile: user.mobile,
    status: user.status,
    role: user.role
});