import React from "react";
import { GridRenderEditCellParams } from "@mui/x-data-grid";
import { TextField } from "@mui/material";
import { useArrayFieldControllerByFormId } from "@/lib/hooks/general/useArrayFieldControllerByformId";

type DataGridEditCellProps<TItem> = {
  params: GridRenderEditCellParams;
  type?: React.InputHTMLAttributes<unknown>["type"];
};


export function DataGridEditCell<TItem>({
  params,
  type = "text",
}: DataGridEditCellProps<TItem>) {

 const controller = useArrayFieldControllerByFormId({
  formId: params.row.formId,
  fieldName: String(params.field),
});

if (!controller) return null;
const {
    field,
    fieldState: { error },
  } = controller;

  return (
    <TextField
      {...field}
      type={type}
      size="small"
      fullWidth
      error={!!error}
      helperText={error?.message}
      onChangeCapture={(field.onChange)}
      value={field.value ?? ''}
      variant="filled"
    />
  );
}
