import React from "react";
import {
  useFormContext,
  useController,
  useFieldArray,
  FieldValues,
  FieldPath,
} from "react-hook-form";
import { GridRenderEditCellParams, ValueOptions } from "@mui/x-data-grid";
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { UserForm } from "@/shared/features/users/schema/userFormSchema";

type DataGridSelectEditCellProps<T extends FieldValues> = {
  params: GridRenderEditCellParams;
};

export function DataGridSelectCell<T extends FieldValues>({
  params,
}: DataGridSelectEditCellProps<T>) {
  const { control } = useFormContext<UserForm>();
  const { fields } = useFieldArray<UserForm>({ control, name: "rows" });

  const fieldIndex = fields.findIndex((row) => row.id === params.id);
  if (fieldIndex === -1) return null;

  const name = `rows.${fieldIndex}.${String(params.field)}` as FieldPath<T>;

  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  const rawOptions = params.row.valueOptions;
  console.log(rawOptions);
  const options: ValueOptions[] =
    typeof rawOptions === "function" ? rawOptions(params) : rawOptions || [];
  console.log(rawOptions(params), "rawOptions(params)");
  return (
    <Select
      {...field}
      onChange={(e: SelectChangeEvent) => field.onChange(e.target.value)}
      size="small"
      fullWidth
      error={!!error}
    >
      {options.map((opt) =>
        typeof opt === "object" ? (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ) : (
          <MenuItem key={opt} value={opt}>
            {opt}
          </MenuItem>
        ),
      )}
    </Select>
  );
}
