"use client";
import Table from "../../templates/Table";
import { columns } from "./columns";
import UserForm from "./NewUserForm";
import { useFetchUsersByGroupId } from "@/lib/hooks/queries/user";
import { FieldArray, FormProvider, useFieldArray, useForm } from "react-hook-form";
import { useGridEditHandlers } from "@/shared/hooks/rhf/useGridEditHandlers";
import { usePatchUser } from "@/lib/hooks/mutations/user";
import { PatchUserRequest } from "@/shared/features/users/schema/userTypes";
import { mapFetchUserToFormRow, mapFormRowToPatchUser } from "@/shared/features/users/utils/mappers";
import { useEffect } from "react";
import { UserFormShape } from "@/shared/features/users/schema/userFormSchema";

export default function UserTable() {
  const { data } = useFetchUsersByGroupId({ groupId: "cassiegroup" });
  const updateUserMutation = usePatchUser();

  const methods = useForm<UserFormShape>({
    defaultValues: { rows: [] },
    mode: "onBlur",
  });
  const { control, trigger, reset, getValues } = methods;
  const { fields, update } = useFieldArray({
    control,
    name: "rows",
  });
  const { processRowUpdate } = useGridEditHandlers<
  FieldArray<UserFormShape, 'rows'>,
  PatchUserRequest                               
>(
    update,
    trigger,
    getValues,
    updateUserMutation,
    mapFormRowToPatchUser
  );

  useEffect(() => {
    if (data?.length) {
        const defaultValues = data.map(row =>  mapFetchUserToFormRow(row)) as Object[];
      reset({ rows: defaultValues });
    }
  }, [data, reset]);

  return (
     <FormProvider {...methods}>
      <Table
        title={"Users"}
        fields={fields}
        columns={columns}
        disableColumnFilter={false}
        showToolbar={true}
        processRowUpdate={processRowUpdate}
        createForm={
          <UserForm defaultValues={undefined} onSubmit={() => console.log} />
        }
      />
    </FormProvider>
  );
}
