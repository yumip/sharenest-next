"use client";
import Table from "../../templates/Table";
import { columns, UserFormShape } from "./columns";
import UserForm from "./NewUserForm";
import { useFetchUsersByGroupId } from "@/lib/hooks/queries/user";
import { Skeleton } from "@mui/material";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { useGridEditHandlers } from "@/shared/components/templates/useGridEditHandlers";
import { DevTool } from "@hookform/devtools";
import { usePatchUser } from "@/lib/hooks/mutations/user";

export default function UserTable() {
  const { data } = useFetchUsersByGroupId({ groupId: "cassiegroup" });

  const updateUserMutation = usePatchUser();
  const methods = useForm<UserFormShape>({
    defaultValues: { rows: data },
    mode: "onBlur",
  });
  const { control, trigger } = methods;
  const { fields, update } = useFieldArray({
    control,
    name: "rows",
  });
  console.log(fields);
  const { processRowUpdate } = useGridEditHandlers(
    fields,
    update,
    trigger,
    updateUserMutation,
  );
  if (!data) return <Skeleton />;

  return (
    <FormProvider {...methods}>
      <Table
        title={"Users"}
        items={data}
        columns={columns}
        disableColumnFilter={false}
        showToolbar={true}
        processRowUpdate={processRowUpdate}
        // onCellEditStop={(params, event) => onCellEditStop(params, event)}
        createForm={
          <UserForm defaultValues={undefined} onSubmit={() => console.log} />
        }
      />
      <DevTool control={control} />
    </FormProvider>
  );
}
