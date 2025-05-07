import React from "react";
import {
  useFormContext,
  useFieldArray,
  useController,
  FieldPath,
  FieldValues,
} from "react-hook-form";
import { GridRenderEditCellParams } from "@mui/x-data-grid";
import { TextField } from "@mui/material";

type DataGridEditCellProps<T extends FieldValues> = {
  params: GridRenderEditCellParams;
  type?: React.InputHTMLAttributes<unknown>["type"];
};

export function DataGridEditCell<T extends FieldValues>({
  params,
  type = "text",
}: DataGridEditCellProps<T>) {
  const { control } = useFormContext<T>();
  const { fields } = useFieldArray<T>({ control, name: "rows" });

  const fieldIndex = fields.findIndex((row) => row.id === params.id);

  if (fieldIndex === -1) return null;

  const fieldPath =
    `rows.${fieldIndex}.${String(params.field)}` as FieldPath<T>;

  const {
    field,
    fieldState: { error },
  } = useController({ name: fieldPath, control });

  return (
    <TextField
      {...field}
      type={type}
      size="small"
      fullWidth
      error={!!error}
      helperText={error?.message}
    />
  );
}
