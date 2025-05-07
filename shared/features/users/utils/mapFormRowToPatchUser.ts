import type { PatchUserRequest } from "../schema/userTypes";
import type { FieldArrayWithId } from "react-hook-form";
import type { userFormSchema } from "../schema/userFormSchema";
import { UserFormShape } from "@/app/platform/(admin)/users/components/columns";

export const mapFormRowToPatchUser = (
  row: FieldArrayWithId<UserFormShape, "rows", "id">,
): PatchUserRequest => ({
  id: row.id,
  firstName: row.firstName,
  lastName: row.lastName,
  email: row.email,
  mobile: row.mobile,
  role: row.role,
  status: row.status,
  groupId: "cassiegroup",
});
